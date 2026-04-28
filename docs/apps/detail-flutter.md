# Detail Aplikasi — Flutter

Panduan lengkap untuk menjalankan, build, dan mendistribusikan aplikasi Flutter ke Google Play Store.

---

## Cara Running Aplikasi

### 1. Pastikan Environment Sudah Siap

```bash
# Cek apakah Flutter sudah terinstall dengan benar
flutter doctor

# Cek device/emulator yang tersedia
flutter devices
```

Pastikan tidak ada tanda ❌ pada output `flutter doctor`. Jika ada, ikuti instruksi yang diberikan untuk memperbaikinya.

### 2. Jalankan Aplikasi

```bash
# Clone repository (jika belum)
git clone https://github.com/USERNAME/NAMA-REPO.git
cd NAMA-REPO

# Install dependencies
flutter pub get

# Jalankan di device/emulator default
flutter run

# Jalankan di device spesifik
flutter run -d <device-id>

# Jalankan dalam mode release (lebih cepat, tidak ada debug overlay)
flutter run --release
```

---

## Pra-Build — Persiapan Sebelum Rilis ke Play Store

::: warning Wajib dilakukan sebelum setiap build rilis
Langkah ini sering terlewat dan menyebabkan build ditolak Play Store atau versi tidak terupdate.
:::

### 1. Update Versi di `pubspec.yaml`

Buka file `pubspec.yaml` di root project, cari baris `version`:

```yaml
# Format: versionName+versionCode
# versionName = yang terlihat user (1.2.0)
# versionCode = angka yang terus naik (harus SELALU lebih besar dari versi sebelumnya)
version: 1.2.0+5
```

::: tip Aturan versionCode
`versionCode` (angka setelah `+`) harus selalu lebih besar dari versi yang sudah ada di Play Store. Jika Play Store sudah punya build `+4`, maka build baru minimal `+5`.
:::

### 2. Update Dependencies

```bash
# Update semua package ke versi terbaru yang kompatibel
flutter pub upgrade

# Atau update package tertentu saja
flutter pub upgrade nama_package
```

Cek output terminal, pastikan tidak ada konflik dependency. Jika ada warning, baca pesannya dan sesuaikan versi yang diminta.

### 3. Cek Kompatibilitas

```bash
# Pastikan tidak ada deprecated API
flutter analyze
```

Perbaiki semua error (merah) sebelum build. Warning (kuning) boleh diabaikan untuk sementara.

---

## Cara Build & Upload ke Play Store

### 1. Build App Bundle (AAB)

```bash
# Build dalam format AAB (wajib untuk Play Store)
flutter build appbundle --release

# File output ada di:
# build/app/outputs/bundle/release/app-release.aab
```

::: info Kenapa AAB bukan APK?
Google Play Store sejak 2021 mewajibkan format AAB (Android App Bundle) untuk aplikasi baru. AAB lebih kecil dan dioptimalkan per device oleh Google secara otomatis.
:::

### 2. Upload ke Play Console

1. Buka [Google Play Console](https://play.google.com/console)
2. Pilih aplikasi yang ingin diupdate
3. Masuk ke menu **Production** (atau testing track yang sesuai)
4. Klik **Create new release**
5. Upload file `app-release.aab`
6. Isi **Release notes** (catatan perubahan versi ini)
7. Klik **Review release** → **Start rollout**

### 3. Waktu Review

- Biasanya **1–3 hari kerja** untuk review pertama
- Update versi biasanya lebih cepat, bisa **beberapa jam**

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*
