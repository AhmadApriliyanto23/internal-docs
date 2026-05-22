# Chrome

---

## Cara mengaktifkan kamera dari web local

1. akses url dibawah ini
```bash
chrome://flags/#unsafely-treat-insecure-origin-as-secure
```

2. cari tulisan  `Insecure origins treated as secure` yang terblok kuning
3. isikan alamat ip local + port kedalam inputannya, contoh
```bash
http://172.16.111.205:5173
```

4. kemudian ubah disabled ke `enable`
5. terakhir relaunch browser
