import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/frontend-docs/',
  title: 'Frontend Dev Wiki',
  description: 'Dokumentasi internal aplikasi frontend — Ahmad Apriliyanto',
  lang: 'id-ID',
  themeConfig: {
    siteTitle: 'Frontend Dev Wiki',
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Daftar Aplikasi', link: '/apps/daftar-aplikasi' },
      { text: 'Issue', link: '/issues/anjungan' },
    ],

    sidebar: [
      {
        text: 'Mulai',
        items: [
          { text: 'Pendahuluan', link: '/pendahuluan' },
          { text: 'Tools', link: '/tools' },
        ],
      },
      {
        text: 'Aplikasi',
        items: [
          { text: 'Daftar Aplikasi', link: '/apps/daftar-aplikasi' },
          { text: 'Detail — Flutter', link: '/apps/detail-flutter' },
          { text: 'Detail — Update via SSH', link: '/apps/detail-ssh' },
        ],
      },
      {
        text: 'Troubleshoot & Issue',
        items: [
          { text: 'Anjungan', link: '/issues/anjungan' },
          { text: 'Smart', link: '/issues/smart' },
        ],
      },
    ],

    footer: {
      message: 'Dokumentasi Internal — Dilarang disebarkan ke pihak luar.',
      copyright: 'Dibuat oleh Ahmad Apriliyanto — Frontend Programmer',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/ahmadapriliyanto23.github.io/internal-docs/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahmadapriliyanto23.github.io/internal-docs' },
    ],
  },
})
