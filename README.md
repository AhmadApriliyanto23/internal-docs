# Frontend Dev Wiki

Dokumentasi internal teknis untuk seluruh aplikasi frontend yang dikelola tim.

## Cara Menjalankan Lokal

```bash
# Install dependencies
npm install

# Jalankan di localhost
npm run dev
```

Buka browser di `http://localhost:5173`

## Cara Edit Konten

Semua halaman ada di folder `docs/` dalam format Markdown (`.md`).

| Folder/File | Isi |
|-------------|-----|
| `docs/pendahuluan.md` | Pendahuluan & gambaran umum |
| `docs/tools.md` | Daftar tools |
| `docs/apps/` | Detail semua aplikasi |
| `docs/issues/` | Panduan troubleshoot per aplikasi |

## Deploy

Wiki ini di-deploy otomatis ke GitHub Pages setiap kali ada push ke branch `main`.

Setelah push, tunggu 1–2 menit lalu buka:
`https://USERNAME.github.io/NAMA-REPO/`

## Setup Awal GitHub Pages (Sekali Saja)

1. Buka repo di GitHub → **Settings** → **Pages**
2. Pada **Source**, pilih **GitHub Actions**
3. Simpan. Setelah itu setiap push ke `main` akan auto-deploy.

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*
