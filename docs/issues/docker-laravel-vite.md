# Docker Build Guide — Laravel + Vite + Vue (PWA)

Project ini menggunakan **Laravel** sebagai backend API dan **Vite + Vue 3** sebagai frontend SPA (Single Page Application) dengan PWA support.

---

## 1. Build Frontend (Vite)

Sebelum build image Docker, build frontend terlebih dahulu agar ada asset yang sudah di-compile:

```bash
# Install dependencies (sekali saja)
pnpm install

# Build untuk production
pnpm run build
```

Hasil build akan berada di `public/build/` (vite manifest + asset file).

Setelah build, `sw.js` dan `workbox-*.js` akan otomatis tercopy ke `public/` oleh plugin `copy-sw-to-root` di `vite.config.js`.

---

## 2. Dockerfile

Buat file `Dockerfile` di root project:

```dockerfile
# ---- Stage 1: Build Node assets (jika belum di-build manual) ----
# FROM node:22-alpine AS node-build
# WORKDIR /app
# COPY package.json pnpm-lock.yaml ./
# RUN npm install -g pnpm && pnpm install
# COPY . .
# RUN pnpm run build

# ---- Stage 2: PHP + Laravel ----
FROM php:8.4-fpm-alpine

# Install system dependencies
RUN apk add --no-cache \
    nginx \
    supervisor \
    curl \
    unzip \
    libzip-dev \
    oniguruma-dev \
    && docker-php-ext-install pdo_mysql zip mbstring

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Copy .env.example to .env if .env not exists
RUN if [ ! -f .env ]; then cp .env.example .env; fi

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Set permissions
RUN chown -R www-data:www-data storage bootstrap/cache public/build public/sw.js public/workbox-*.js public/manifest.json \
    && chmod -R 775 storage bootstrap/cache

# Generate app key
RUN php artisan key:generate

# Cache Laravel config & routes
RUN php artisan config:cache && php artisan route:cache

# ---- Nginx configuration ----
COPY docker/nginx.conf /etc/nginx/http.d/default.conf

# ---- Supervisor ----
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
```

---

## 3. Nginx Configuration

Buat folder `docker/` dan file `docker/nginx.conf`:

```nginx
server {
    listen 80;
    server_name _;
    root /var/www/html/public;
    index index.php index.html;

    # SPA: fallback all non-file routes ke index.php
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # Static assets cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

---

## 4. Supervisor Configuration

Buat file `docker/supervisord.conf`:

```ini
[supervisord]
nodaemon=true
user=root
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid

[program:php-fpm]
command=php-fpm
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/php-fpm.log
stderr_logfile=/var/log/supervisor/php-fpm.log

[program:nginx]
command=nginx -g "daemon off;"
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/nginx.log
stderr_logfile=/var/log/supervisor/nginx.log

[program:laravel-queue]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
numprocs=1
stopasgroup=true
killasgroup=true
stdout_logfile=/var/log/supervisor/laravel-queue.log
stderr_logfile=/var/log/supervisor/laravel-queue.log
```

---

## 5. .dockerignore

Buat file `.dockerignore`:

```
.git
.gitignore
node_modules
vendor
.env
storage/logs/*
storage/framework/cache/data/*
storage/framework/sessions/*
storage/framework/views/*
storage/app/*
bootstrap/cache/*
tests/
docker-compose.yml
README.md
*.md
.vscode/
```

---

## 6. Build & Run Docker Image

```bash
# 1. Build frontend dulu
pnpm run build

# 2. Build Docker image
docker build -t fe-sdm-pwa:latest .

# 3. Run container
docker run -d \
  --name fe-sdm-pwa \
  -p 8080:80 \
  -e APP_ENV=production \
  -e APP_DEBUG=false \
  -e APP_URL=http://your-domain.com \
  -e DB_CONNECTION=mysql \
  -e DB_HOST=your-db-host \
  -e DB_PORT=3306 \
  -e DB_DATABASE=your_db \
  -e DB_USERNAME=your_user \
  -e DB_PASSWORD=your_password \
  fe-sdm-pwa:latest
```

> **Catatan:** Environment variables untuk database, redis, dan lainnya harus disesuaikan dengan environment produksi.

---

## 7. Environment Variables untuk Vite

Variabel berikut bisa di-set di `.env` untuk mengatur Vite Dev Server (hanya dipakai saat development, tidak diperlukan di production):

```
VITE_SERVER_HOST=0.0.0.0
VITE_SERVER_PORT=8000
VITE_SERVER_PROXY_TARGET=http://localhost:8000
```

Di production, Vite hanya digunakan saat build. Hasil build berupa file static di `public/build/` yang langsung disajikan oleh Nginx/Laravel.

---

## 8. File Structure Setelah Build

```
.
├── Dockerfile
├── docker/
│   ├── nginx.conf
│   └── supervisord.conf
├── .dockerignore
├── public/
│   ├── build/              <-- Hasil build Vite (auto generated)
│   │   ├── assets/
│   │   └── manifest.json
│   ├── sw.js               <-- Copied by post-build plugin
│   ├── workbox-*.js        <-- Copied by post-build plugin
│   ├── manifest.json       <-- Copied by post-build plugin
│   └── index.php           <-- Laravel entry point
├── vite.config.js
├── package.json
└── composer.json
```

---

## 9. Catatan Penting

1. **PWA Service Worker**: File `sw.js` dan `workbox-*.js` akan otomatis tercopy ke `public/` setiap kali `pnpm run build` dijalankan (via plugin `copy-sw-to-root` di `vite.config.js`).
2. **Nginx fallback**: Digunakan `try_files` agar SPA (Vue Router) bisa menangani routing client-side.
3. **Queue Worker**: Supervisor menjalankan `php artisan queue:work` untuk memproses antrian (misalnya log absensi, notifikasi, dll).
4. **Session & Cache**: Pastikan menggunakan database driver untuk session dan cache (bukan file) jika menggunakan multiple container/replica.
5. **CORS**: Konfigurasi CORS di Laravel (`config/cors.php`) harus disesuaikan agar frontend bisa mengakses API.
