# Anjungan
Berikut adalah struktur dokumentasi aplikasi anjungan. Dokumentasi ini mencakup beberapa bagian: pendahuluan, penjelasan tentang aplikasi, repositori, cara instalasi, cara update, dan task yang sering muncul beserta cara penangannya.

## Pendahuluan
Dokumentasi ini bertujuan untuk memberikan panduan lengkap mengenai aplikasi yang dibangun dengan menggunakan React versi 18.2.0. Aplikasi ini dirancang untuk Cetak SEP di beberapa ruangan (Alamanda, Anyelir, Lobby Utama).

## Penjelasan Aplikasi

### Jenis Framework dan Versi
Aplikasi ini dibangun menggunakan:
- **Framework**: React js
- **Versi**: 18.2.0

### Dependencies
dependencies yang harus diinstal sebelum melakukan pekerjaan
1. Cara Instal Git
2. Cara Instal node js versi 22.11.0

### Plugin yang Digunakan
Aplikasi ini menggunakan beberapa plugin untuk meningkatkan fungsionalitasnya. Berikut adalah daftar plugin beserta versinya:
- **Plugin 1**: axios - 1.3.4
- **Plugin 2**: bootstrap - 5.2.3
- **Plugin 4**: jquery - 3.6.3
- **Plugin 5**: qrcode.react - 4.2.0
- **Plugin 6**: react-qr-code - 2.0.15
- **Plugin 7**: react-router-dom - 6.25.1
- **Plugin 8**: react-scripts - 5.0.1
- **Plugin 9**: react-simple-keyboard - 3.6.12
- **Plugin 10**: sweetalert2 - 11.7.3
- **Plugin 11**: sweetalert2-react-content - 5.0.7

### Repositori
Aplikasi ini dapat diakses melalui repositori berikut:
- **URL Repositori**: 
 ```bash
   ssh://userdev@172.16.55.31:/volume1/git/new/fe-anjungan.git
```
## Cara Instalasi di Local
Untuk menginstal aplikasi ini di lingkungan lokal, ikuti langkah-langkah berikut:
1. Clone repositori:
   ```bash
   git clone [URL Repositori]
   ```
2. Masuk ke direktori aplikasi:
   ```bash
   cd [Nama Direktori]
   ```
3. Install dependensi:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm start
   ```

## Cara Update di Server Melalui SSH
Untuk melakukan update aplikasi di server melalui SSH, ikuti langkah-langkah berikut:
1. Masuk ke server menggunakan SSH:
   ```bash
   ssh [username]@[server_ip]
   ```
2. Navigasi ke direktori aplikasi:
   ```bash
   cd [Nama Direktori Aplikasi]
   ```
3. Tarik perubahan terbaru dari repositori:
   ```bash
   git pull origin [branch_name]
   ```
4. Install dependensi jika diperlukan:
   ```bash
   npm install
   ```
5. Restart aplikasi jika diperlukan:
   ```bash
   pm2 restart [nama_aplikasi]
   ```

## Task yang Sering Muncul dan Cara Penangannya
Berikut adalah beberapa task yang sering muncul beserta cara penangannya:

### Task 1: [Deskripsi Task]
- **Solusi**: [Deskripsi solusi atau langkah-langkah untuk menangani task ini]

### Task 2: [Deskripsi Task]
- **Solusi**: [Deskripsi solusi atau langkah-langkah untuk menangani task ini]

### Task 3: [Deskripsi Task]
- **Solusi**: [Deskripsi solusi atau langkah-langkah untuk menangani task ini]

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*