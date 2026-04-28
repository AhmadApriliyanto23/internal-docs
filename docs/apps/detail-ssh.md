# Detail Aplikasi — Update via SSH Remote

Panduan untuk melakukan update aplikasi langsung ke server melalui koneksi SSH tanpa perlu deploy ulang dari lokal.

---

## Prasyarat

Sebelum bisa melakukan update via SSH, pastikan:
- Kamu sudah punya akses SSH ke server (username & password atau SSH key)
- Sudah punya alamat IP/hostname server (cek di [Daftar Aplikasi](/apps/daftar-aplikasi))
- Koneksi internet/VPN sudah aktif jika server ada di jaringan internal

---

## Cara Koneksi ke Server

```bash
# Format dasar
ssh username@alamat-ip

# Contoh
ssh deploy@192.168.1.10

# Jika menggunakan port selain 22
ssh -p 2222 deploy@192.168.1.10

# Jika menggunakan SSH key
ssh -i ~/.ssh/nama-key.pem deploy@192.168.1.10
```

Masukkan password jika diminta. Jika berhasil, kamu akan masuk ke terminal server.

---

## Cara Update Aplikasi

### Aplikasi Web (Node.js / Vue / React)

```bash
# Masuk ke direktori project
cd /var/www/nama-aplikasi

# Cek branch saat ini
git status
git branch

# Pull perubahan terbaru dari repository
git pull origin main

# Install dependencies baru (jika ada perubahan package.json)
npm install

# Build ulang aplikasi
npm run build

# Restart service
pm2 restart nama-aplikasi

# Cek status service
pm2 status
pm2 logs nama-aplikasi --lines 20
```

### Aplikasi dengan Nginx

```bash
# Setelah build selesai, reload nginx jika ada perubahan konfigurasi
sudo nginx -t          # Test konfigurasi nginx dulu
sudo systemctl reload nginx
```

---

## Perintah PM2 yang Sering Dipakai

| Perintah | Fungsi |
|----------|--------|
| `pm2 list` | Lihat semua service yang berjalan |
| `pm2 restart nama-app` | Restart aplikasi tertentu |
| `pm2 stop nama-app` | Stop aplikasi |
| `pm2 start nama-app` | Start aplikasi |
| `pm2 logs nama-app` | Lihat log realtime |
| `pm2 logs nama-app --lines 50` | Lihat 50 baris log terakhir |

---

## Keluar dari SSH

```bash
exit
```

---

## Troubleshoot SSH

**Tidak bisa konek:**
- Cek apakah IP server benar (IP bisa berubah — konfirmasi ke admin)
- Cek apakah VPN/jaringan internal aktif
- Pastikan port SSH tidak diblokir firewall

**Permission denied:**
- Password salah — minta reset ke admin
- SSH key tidak terdaftar di server

**Connection timeout:**
- Server mungkin sedang down atau tidak bisa diakses dari jaringan kamu

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*
