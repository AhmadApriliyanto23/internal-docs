# Issue — Anjungan

Kumpulan masalah yang sering terjadi pada aplikasi Anjungan beserta langkah penyelesaiannya.

---

## Issue 1 — IP Server Berubah (Paling Sering Terjadi)

### Gejala
- Aplikasi Anjungan menampilkan layar error / loading terus-menerus
- Koneksi ke server gagal
- Data tidak muncul

### Penyebab
IP server berubah (misal setelah restart server atau perubahan jaringan), sementara konfigurasi di FStore masih menggunakan IP lama.

### Solusi — Update IP di FStore

1. Login ke **FStore** menggunakan akun admin
2. Masuk ke **Collection** → cari collection `config` (atau nama collection yang sudah ditentukan)
3. Buka dokumen konfigurasi IP, biasanya bernama `ip_server` atau `app_config`
4. Update field `ip_address` dengan IP terbaru:

```json
{
  "ip_address": "192.168.x.x",
  "port": "3000",
  "last_updated": "2024-01-15"
}
```

5. Klik **Save / Update**
6. Refresh aplikasi Anjungan — tidak perlu deploy ulang

::: tip
Selalu isi field `last_updated` dengan tanggal hari ini agar mudah ditracking kapan terakhir diubah.
:::

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
Login FStore → Collection config → Cek ip_address
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

**Langkah 5 — Cek log server via SSH**
```bash
ssh user@ip-server
pm2 logs nama-aplikasi --lines 50
```

Cari baris error di log dan sesuaikan penanganannya.

**Langkah 6 — Eskalasi**
Jika semua langkah di atas sudah dilakukan dan masih error, hubungi **Ahmad Apriliyanto** dengan menyertakan:
- Screenshot error
- Hasil log dari langkah 5
- Waktu kejadian

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*
