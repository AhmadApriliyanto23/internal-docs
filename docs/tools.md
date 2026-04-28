# Tools

Daftar perangkat dan layanan yang wajib digunakan dalam proses pengembangan, deployment, dan pengelolaan aplikasi.

---

## 1. VS Code

**Visual Studio Code** adalah code editor utama yang digunakan untuk seluruh pengembangan frontend.

**Ekstensi wajib yang harus dipasang:**
- `Flutter` — support syntax Flutter & Dart
- `Dart` — language support Dart
- `ESLint` — linter untuk JavaScript/TypeScript
- `GitLens` — visualisasi git history
- `Remote - SSH` — untuk koneksi langsung ke server via SSH dari VS Code

**Download:** [https://code.visualstudio.com](https://code.visualstudio.com)

---

## 2. Android Studio

**Android Studio** adalah IDE resmi untuk pengembangan Android dan Flutter. Wajib terinstall meskipun kamu sudah menggunakan VS Code, karena Flutter membutuhkan Android SDK yang disediakan Android Studio.

**Yang perlu disetup setelah install:**
1. Install **Android SDK** via SDK Manager
2. Install **Android Emulator** untuk testing tanpa device fisik
3. Jalankan `flutter doctor` di terminal untuk memverifikasi setup sudah benar

**Download:** [https://developer.android.com/studio](https://developer.android.com/studio)

---

## 3. FStore

**FStore** adalah layanan penyimpanan dan konfigurasi yang digunakan untuk menyimpan data realtime yang diakses aplikasi, termasuk:

- Konfigurasi JSON (misalnya IP server Anjungan)
- Daftar dokumen aplikasi Smart
- Daftar video aplikasi Smart
- Konfigurasi gambar homepage

::: tip Cara Akses
Login ke FStore menggunakan akun yang sudah diberikan oleh admin. Minta akses ke **Ahmad Apriliyanto** jika belum punya.
:::

---

## 4. Google Play Console

**Google Play Console** adalah platform resmi Google untuk mendistribusikan dan mengelola aplikasi Android di Play Store.

**Digunakan untuk:**
- Publish aplikasi baru
- Update versi aplikasi (upload file `.aab`)
- Melihat statistik download dan crash report
- Mengelola testing track (internal, alpha, beta, production)

**Akses:** [https://play.google.com/console](https://play.google.com/console)

::: warning Perhatian
Akses Play Console memerlukan akun Google yang sudah ditambahkan sebagai anggota tim. Hubungi admin untuk penambahan akun.
:::

---

## 5. Google Firebase

**Firebase** adalah platform backend dari Google yang menjadi tulang punggung backend beberapa aplikasi.

**Layanan Firebase yang digunakan:**

| Layanan | Fungsi |
|---------|--------|
| **Firestore** | Database NoSQL realtime (FStore) |
| **Firebase Storage** | Penyimpanan file (gambar, dokumen) |
| **Firebase Auth** | Autentikasi pengguna |
| **Firebase Hosting** | *(jika digunakan)* Hosting aplikasi web |
| **Crashlytics** | Monitoring crash aplikasi Flutter |

**Akses:** [https://console.firebase.google.com](https://console.firebase.google.com)

---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*
