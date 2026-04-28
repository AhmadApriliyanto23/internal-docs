# Issue — Anjungan

Kumpulan masalah yang sering terjadi pada aplikasi Anjungan beserta langkah penyelesaiannya.

---

## Daftar Isi {#daftar-isi}

- [Issue 1 — IP Server Berubah](#issue-1-—-ip-server-berubah-paling-sering-terjadi)
- [Issue 2 — Browser Bukan Mozilla Firefox 70.0.1](#issue-2-—-browser-bukan-mozilla-firefox-70-0-1)
- [Panduan Troubleshoot Lengkap](#panduan-troubleshoot-lengkap-urutan-pengecekan)

---

## Issue 1 — IP Server Berubah (Paling Sering Terjadi)

### Gejala
- Aplikasi Anjungan menampilkan layar error / loading terus-menerus
- Koneksi ke server gagal
- Data tidak muncul

### Penyebab
IP desktop berubah (misal setelah restart server, perubahan jaringan dari lan ke wifi, mati listrik), sementara konfigurasi di FStore masih menggunakan IP lama.

### Solusi — Update IP di FStore

1. Login ke **[FStore](http://assets.rsabhk.lan:5000/)** menggunakan akun admin
2. Masuk ke **assets** → cari collection `anjungan`
3. Download file config.json
4. buka config.json dengan text editor (vscode)
berikut object jsonnya
```json
{
      "ipPlatform": "172.16.111.205",
      "ipPrinter": "172.16.111.205",
      "name": "ALAMANDA 1",
      "port": "usb",
      "isFinger": true
  }
```
```
`iplatform` => IP PC anjungan
`ipPrinter` => IP POS Printer
`name` => lokasi anjungan
`port` => mendeteksi apakah printernya `USB` atau `ip`
`isFinger` => mendeteksi PC mendukung finger atau tidak
```
5. cari ip milik PC (`ipPlatform`) jika sudah ada tinggal sesuaikan `ipPrinter`
6. jika belum ada silahkan tambah satu object baru dipaling bawah sesuai ip terbaru
7. simpan perubahan
8. kembali ke FStore didirektori sebelumnya
9. hapus file config.json 
10. upload file config.json yang terbaru


::: warning melihat perubahan
lihat update jsonnya bisa diakases di **[API CONFIG](http://assets.rsabhk.co.id/anjungan/config.json)**
kemudian di mesin anjungan yang error perlu direfresh dahulu
:::

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Issue 2 — Browser Bukan Mozilla Firefox 70.0.1

### Gejala
- Tampilan aplikasi rusak / tidak sesuai
- Fitur tertentu tidak berjalan
- Terjadi error di console browser

### Penyebab
Aplikasi Anjungan dirancang khusus untuk **Mozilla Firefox versi 70.0.1**. Browser lain (Chrome, Edge, Safari) atau versi Firefox yang berbeda dapat menyebabkan ketidakcocokan.

### Solusi

::: danger Jangan Update Browser
Jangan pernah update Firefox di device anjungan tanpa konfirmasi terlebih dahulu ke tim pengembang.
:::

1. Cek versi Firefox: buka Firefox → klik menu ☰ → **Help** → **About Firefox**
2. Jika bukan versi 70.0.1, install ulang Firefox versi yang benar
3. Download Firefox 70.0.1: *(isi link download internal atau arsip versi lama)*
4. Setelah install, pastikan **auto-update Firefox dinonaktifkan**:
   - Buka Firefox → menu ☰ → **Options** → **General**
   - Pada bagian **Firefox Updates**, pilih **"Never check for updates"**

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Panduan Troubleshoot Lengkap (Urutan Pengecekan)

Ikuti langkah berikut secara berurutan sebelum eskalasi:

**Langkah 1 — Cek koneksi jaringan**
```
Pastikan device anjungan terhubung ke jaringan yang benar (WiFi/LAN)
Coba buka website lain (google.com) untuk memastikan internet aktif
```

**Langkah 2 — Cek versi browser**
```
Buka Firefox → Help → About Firefox
Pastikan versi = 70.0.1
```

**Langkah 3 — Cek & update konfigurasi IP di FStore**
```
Login FStore → Collection anjungan → Cek config.json
Bandingkan dengan IP server saat ini
Update jika berbeda
```

**Langkah 4 — Clear cache browser**
```
Firefox → menu ☰ → Options → Privacy & Security
→ Cookies and Site Data → Clear Data
Centang keduanya → Clear
Refresh aplikasi
```

Cari baris error di log dan sesuaikan penanganannya.

**Langkah 6 — Eskalasi**
Jika semua langkah di atas sudah dilakukan dan masih error, hubungi **Ahmad Apriliyanto** dengan menyertakan:
- Screenshot error
- Hasil log dari langkah 5
- Waktu kejadian

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*