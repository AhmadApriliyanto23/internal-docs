# Issue — Smart

Panduan pengelolaan konten dan konfigurasi aplikasi Smart melalui FStore. Seluruh pembaruan konten dilakukan langsung di FStore tanpa perlu mengubah kode.

---

::: warning
Untuk `upload file` dan `upload vidio` tidak ada aksi pengkodingan apapun pada smart
:::

## Daftar Isi {#daftar-isi}

- [Daftar Dokumen & Cara Memperbarui via FStore](#daftar-dokumen-cara-memperbarui-via-fstore)
- [Daftar Video & Cara Memperbarui via FStore](#daftar-video-cara-memperbarui-via-fstore)
- [Gambar Homepage Smart](#gambar-homepage-smart)
- [Cara Menambahkan Menu di Setiap Role User](#cara-menambahkan-menu-di-setiap-role-user)
- [Ringkasan — Mana yang Perlu Diubah di FStore?](#ringkasan-mana-yang-perlu-diubah-di-fstore)

---

## Daftar Dokumen & Cara Memperbarui via FStore

### Struktur Data Dokumen di FStore

Collection: `pemberitahuan`

```json
{
    "path": "https://assets.rsabhk.co.id/smart/documents/SE Jam Kerja Bulan Ramadan 1447 H RSABHK.pdf", //path dokumen
    "fileName": "SE Jam Kerja Bulan Ramadan 1447 H RSABHK", //judul dokumen
    "new": true, //flag untuk dekteksi upload terbaru
    "created_at":"2026-02-19"  //Tanggal diisi tanggal upload
},
```

### Upload file dokumen di FStore
1. Login ke **FStore**
2. Masuk ke **Collection** → `smart` → `document`
3. Upload file dengan cara klik navbar `upload` → `upload skip`

### Cara Memperbarui Dokumen & Menambah Dokumen Baru
1. Tetap di direktori setelah upload file cari file pemberitahuan.json
3. Download file `pemberitahuan.json`
4. Buka file `pemberitahuan.json` dengan text editor (vscode)
5. simpan perubahan
6. kembali ke FStore didirektori sebelumnya
7. hapus file pemberitahuan.json yang existing
8. upload file pemberitahuan.json yang terbaru

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Daftar Video & Cara Memperbarui via FStore

### Struktur Data Video di FStore

Collection: `smart vidio`

```json
{
  "title": "Perubahan Budaya Kerja Kementerian Kesehatan",
  "src": "https://assets.rsabhk.co.id/smart/vidio/Sequence 02_1.mp4"
},
```

### Cara Memperbarui Video

Sama seperti dokumen — hanya saja bukan di folder `pemberitahuan` tetapi di folder `vidio`
Stepnya sama dengan upload file dokumen dan cara mendafatkannya di json harus sesuai 

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Gambar Homepage Smart

### Lokasi Konfigurasi
- **Collection:** `smart_config`
- **Field:** `homepage_image`

### Cara Memperbarui Gambar Homepage

1. Upload gambar baru ke **Firebase Storage** atau **Google Drive**

   **Jika pakai Google Drive:**
   - Upload gambar ke folder yang sudah ditentukan di Drive
   - Klik kanan → **Share** → **Anyone with the link** → **Viewer**
   - Salin link, ubah formatnya:
     ```
     Sebelum: https://drive.google.com/file/d/FILE_ID/view
     Sesudah: https://drive.google.com/uc?export=view&id=FILE_ID
     ```

2. Login ke **FStore** → Collection `smart_config`
3. Buka dokumen konfigurasi → Edit field `homepage_image`
4. Paste URL gambar yang sudah diformat
5. Klik **Update**

**Preview gambar sebelum disimpan:**
Paste URL di browser untuk memastikan gambar muncul dengan benar sebelum update ke FStore.

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Cara Menambahkan Menu di Setiap Role User

###

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Ringkasan — Mana yang Perlu Diubah di FStore?

| Konten | Collection | Field Utama |
|--------|-----------|-------------|
| Dokumen | `smart_documents` | `file_url`, `title`, `is_active` |
| Video | `smart_videos` | `video_url`, `thumbnail_url`, `order` |
| Gambar Homepage | `smart_config` | `homepage_image` |
| Konfigurasi Menu | *(coming soon)* | *(coming soon)* |

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*