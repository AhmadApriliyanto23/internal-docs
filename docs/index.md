---
layout: home

hero:
  name: "Frontend Dev Wiki"
  text: "Dokumentasi Internal"
  tagline: Panduan teknis untuk seluruh aplikasi frontend yang dikelola tim. Dibuat agar developer baru maupun lama dapat bekerja secara mandiri.
  actions:
    - theme: brand
      text: Mulai Baca →
      link: /pendahuluan
    - theme: alt
      text: Daftar Aplikasi
      link: /apps/daftar-aplikasi

features:
  - icon: 📖
    title: Pendahuluan
    details: Gambaran umum framework, sejarah penggunaan, dan ringkasan masalah umum yang sering ditemui.
    link: /pendahuluan
  - icon: 🛠️
    title: Tools
    details: Daftar lengkap tools yang wajib digunakan — VS Code, Android Studio, FStore, Play Console, Firebase.
    link: /tools
  - icon: 📱
    title: Daftar Aplikasi
    details: Inventori semua aplikasi beserta domain, teknologi, repository, SSH remote, dan cara instalasi.
    link: /apps/daftar-aplikasi
  - icon: 🐛
    title: Troubleshoot
    details: Panduan penyelesaian issue umum untuk aplikasi Anjungan dan Smart.
    link: /issues/anjungan
---

---

## Shortcut Dokumentasi Aplikasi

Akses cepat ke dokumentasi masing-masing aplikasi:

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:16px">

<a href="/internal-docs/apps/anjungan" style="display:block;padding:16px 20px;border:1px solid var(--vp-c-divider);border-radius:10px;text-decoration:none;transition:border-color 0.2s,box-shadow 0.2s" onmouseover="this.style.borderColor='var(--vp-c-brand-1)';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.borderColor='var(--vp-c-divider)';this.style.boxShadow='none'">
  <div style="font-size:24px;margin-bottom:8px">🖥️</div>
  <div style="font-weight:600;color:var(--vp-c-text-1);margin-bottom:4px">Anjungan</div>
  <div style="font-size:13px;color:var(--vp-c-text-2)">Kiosk browser — konfigurasi IP & troubleshoot</div>
</a>

<a href="/internal-docs/apps/smart" style="display:block;padding:16px 20px;border:1px solid var(--vp-c-divider);border-radius:10px;text-decoration:none;transition:border-color 0.2s,box-shadow 0.2s" onmouseover="this.style.borderColor='var(--vp-c-brand-1)';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.borderColor='var(--vp-c-divider)';this.style.boxShadow='none'">
  <div style="font-size:24px;margin-bottom:8px">📲</div>
  <div style="font-weight:600;color:var(--vp-c-text-1);margin-bottom:4px">Smart</div>
  <div style="font-size:13px;color:var(--vp-c-text-2)">Manajemen konten dokumen, video & homepage</div>
</a>

</div>

---

> 📝 **Catatan:** Dokumentasi ini bersifat internal. Jika ada informasi yang perlu diperbarui, silakan hubungi **Ahmad Apriliyanto** atau buat pull request langsung di repository ini.