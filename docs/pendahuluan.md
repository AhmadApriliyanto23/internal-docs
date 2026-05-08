# Pendahuluan

> Dokumentasi ini dibuat dan dikelola oleh **Ahmad Apriliyanto — Frontend Programmer**.  
> Terakhir diperbarui: *(isi tanggal terbaru setiap kali ada update)*

---

## Tentang Dokumentasi Ini

Wiki ini adalah panduan teknis internal yang berisi seluruh informasi yang dibutuhkan untuk mengembangkan, mengelola, dan melakukan troubleshoot pada aplikasi-aplikasi frontend yang ada di tim.

Tujuannya agar setiap developer — baik yang baru bergabung maupun yang sudah lama — dapat bekerja secara mandiri tanpa harus bertanya satu per satu untuk hal-hal teknis yang berulang.

## Framework yang Digunakan

1. Angular JS - SMART
2. Angular 14 - Daftar Online, Admin Daftar Online
3. Flutter - Mobile RSABHK
4. React JS - Vedika, Anjungan, Dashboard, Bridging, EIS, Viewer Content, Form Keluhan & Kepuasan

## Kenapa Memilih Framework Tersebut?

| Framework | Alasan Pemilihan | Digunakan Sejak |
|-----------|-----------------|-----------------|
| Angular JS | *(aplikasi existing sebelum saya datang)* | *(2016)* |
| Angular 14 | Typescript, mengikuti jejak aplikasi sebelumnya agar linier | *(2022)* |
| React JS | Mudah dipelajari, Komponen Resuable, Banyak pengembang, Stabil, Banyak penggiatnya di luar sehingga memudahkan programmer baru untuk lebih efektif dalam menangani pekerjaan | *(2023)* |
| Flutter   | Cross-platform, satu codebase untuk Android & iOS | *(2024)* |


---

## Ringkasan Issue Umum

Secara garis besar, ada dua kategori masalah yang paling sering ditemui:

### 1. Masalah Konfigurasi (Anjungan)
Aplikasi Anjungan sering mengalami error ketika IP server berubah. Solusinya adalah memperbarui konfigurasi JSON di FStore setiap kali IP berubah. Detail ada di halaman [Issue — Anjungan](/issues/anjungan).

### 2. Masalah Konten (Smart)
Aplikasi Smart memerlukan pembaruan konten (dokumen, video, gambar) secara berkala melalui FStore. Proses ini tidak memerlukan perubahan kode. Detail ada di halaman [Issue — Smart](/issues/smart).

---

## Cara Menggunakan Wiki Ini

- Gunakan **sidebar kiri** untuk navigasi antar halaman.
- Gunakan **search** (ikon kaca pembesar di pojok kanan atas) untuk mencari topik spesifik.
- Setiap halaman memiliki daftar isi otomatis di sebelah kanan.
- Jika menemukan informasi yang sudah usang, silakan edit langsung via GitHub.

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*
