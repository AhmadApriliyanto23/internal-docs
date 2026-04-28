import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/internal-docs/',
  title: 'Frontend Dev Wiki',
  description: 'Dokumentasi internal aplikasi frontend — Ahmad Apriliyanto',
  lang: 'id-ID',
  ignoreDeadLinks: true,
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
          { text: 'Anjungan', link: '/apps/anjungan' },
          { text: 'Smart', link: '/apps/smart' },
          { text: 'Flutter — Build & Deploy', link: '/apps/detail-flutter' },
          { text: 'Update via SSH', link: '/apps/detail-ssh' },
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
      pattern: 'https://github.com/USERNAME/REPO/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub',
    },
 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/USERNAME/REPO' },
    ],
  },
})
