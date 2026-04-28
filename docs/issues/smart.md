# Issue — Smart

Panduan pengelolaan konten dan konfigurasi aplikasi Smart melalui FStore. Seluruh pembaruan konten dilakukan langsung di FStore tanpa perlu mengubah kode.

---

## Daftar Dokumen & Cara Memperbarui via FStore

### Struktur Data Dokumen di FStore

Collection: `smart_documents`

```json
{
  "id": "doc_001",
  "title": "Nama Dokumen",
  "description": "Deskripsi singkat dokumen",
  "file_url": "https://drive.google.com/uc?export=view&id=FILE_ID",
  "category": "kategori",
  "is_active": true,
  "updated_at": "2024-01-15"
}
```

### Cara Memperbarui Dokumen yang Ada

1. Login ke **FStore**
2. Masuk ke **Collection** → `smart_documents`
3. Cari dokumen berdasarkan `title` atau `id`
4. Klik dokumen → **Edit**
5. Update field yang perlu diubah (misalnya `file_url` jika file diganti)
6. Klik **Update** — perubahan langsung aktif di aplikasi

### Cara Menambah Dokumen Baru

1. Login ke **FStore** → Collection `smart_documents`
2. Klik **Add Document**
3. Isi semua field sesuai struktur di atas
4. Set `is_active: true` agar dokumen muncul di aplikasi
5. Klik **Save**

### Cara Menonaktifkan Dokumen (Tanpa Menghapus)

Ubah field `is_active` menjadi `false`. Dokumen tidak akan muncul di aplikasi tapi data tetap tersimpan.

---

## Daftar Video & Cara Memperbarui via FStore

### Struktur Data Video di FStore

Collection: `smart_videos`

```json
{
  "id": "vid_001",
  "title": "Judul Video",
  "description": "Deskripsi video",
  "video_url": "https://link-ke-video.com",
  "thumbnail_url": "https://drive.google.com/uc?export=view&id=FILE_ID",
  "duration": "05:30",
  "is_active": true,
  "order": 1,
  "updated_at": "2024-01-15"
}
```

### Cara Memperbarui Video

Sama seperti dokumen — cari di collection `smart_videos`, edit field yang perlu diubah, simpan.

::: tip Tips Thumbnail dari Google Drive
Untuk thumbnail, gunakan format URL:
`https://drive.google.com/uc?export=view&id=FILE_ID`

Pastikan file di Google Drive sudah di-share dengan setting **"Anyone with the link can view"**.
:::

### Urutan Tampil Video

Field `order` menentukan urutan tampil video di aplikasi. Angka kecil = tampil lebih awal. Atur ulang angka `order` di setiap dokumen untuk mengubah urutan.

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

---

## Cara Menambahkan Menu di Setiap Role User

::: info Coming Soon
Bagian ini sedang disiapkan oleh **Ahmad Apriliyanto**.  
Akan diisi setelah proses konfigurasi role selesai didokumentasikan.
:::

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
