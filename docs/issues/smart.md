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
- [Cara memberi akses user berdasarkan id pegawai/id login berdasarkan role di menu tertentu](#cara-memberi-akses-user-berdasarkan-id-pegawai-id-login-berdasarkan-role-di-menu-tertentu)

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



<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Cara Menambahkan Menu di Setiap Role User

### Menambahkan menu pada sidemenu
1. buka code smart melalui `ssh` masing-masing
2. akses direktori ***app*** → `data` → `GetSideMenu`
3. cari file berdasarkan role yang akan di ubah/tambah menunya.
4. simpan perubahan
5. lakukan commit
6. pull hasil kerjanya ke branch `master2`

### Cara deploy smart di ssh
1. akses ssh
2. pastikan direktori terminal ``/media/dev/[NAMA]/frontend-smart``
3. setelah posisinya di branch master2
4. jalankan perintah
```
git fetch
git pull //dari branch yang dikerjaan
```
5. setelah berhasil, silahkana naik kedirektori ``/media/dev/[NAMA]/`` cukup dengan menjalakan terminal `cd..`
6. setelah itu silahkan jalankan perintah ``../deploy/deploy.sh`` tunggu sampai diminta password, setelah mengisi password project akan direbuild lagi


<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>

---

## Cara memberi akses user berdasarkan id pegawai/id login berdasarkan role di menu tertentu
::: warning
Perlu diketahui satu pegawai bisa memiliki beberapa role dalam sistem.
Kemudian ada dua kondisi yang biasanya diterapkan yaitu:
1. beri akses berdasarkan `id login` (kekurangnya jika pegawai tersebut login dengan role yang berbeda tidak akan bisa mengakses menu yang diberi kondisi)
2. beri akses berdasarkan `id pegawai` (metode ini paling tepat untuk memberi akses kepada user)
:::

### Cara memberi akses menu berdasarkan `id pegawai`
1. buka controller menu yang dikerjakan
2. gunakan kode berikut untuk seleksi role & `id pegawai`
```javascript
$scope.OnInit = () => {
	var datapegawai = JSON.parse(window.localStorage.getItem('pegawai')); //mengambil data dari localstorage
	var statusCode = ModelItem.getStatusUser(); // Untuk mengetahui role user
	if (statusCode == "akuntansi") { // filtering menggunakan role
		if (![932,1158,986,1102,23359,23360,395].includes(datapegawai['id'])) { //daftar id pegawai yang diberi akses
			$scope.isAccessDanied(); //mengarahkan user ke homepage jika tidak memiliki akses
		}
	} else if (statusCode == "logistik") {
		if (![1028].includes(datapegawai['id'])) {
			$scope.isAccessDanied();
		}
	}
}

$scope.isAccessDanied = () => {
	toastr.warning('OOps! Anda tidak memiliki akses disini', 'Warning');
	setTimeout(() => {
		$state.go('home')
	}, 2000);
}

$scope.OnInit();
```
### Cara memberi akses menu berdasarkan `id login`
1. buka controller menu yang dikerjakan
2. jika ingin memberi kondisi berdasarkan `id login` sebagai berikut
```javascript
$scope.OnInit = () => {
	var datauserlogin = JSON.parse(window.localStorage.getItem('datauserlogin')); //mengambil data dari localstorage
	var statusCode = ModelItem.getStatusUser(); // Untuk mengetahui role user
	if (statusCode == "akuntansi") { // filtering menggunakan role
		if (![932,1158,986,1102,23359,23360,395].includes(datauserlogin['id'])) { //daftar id login yang diberi akses
			$scope.isAccessDanied(); //mengarahkan user ke homepage jika tidak memiliki akses
		}
	} else if (statusCode == "logistik") {
		if (![1028].includes(datauserlogin['id'])) {
			$scope.isAccessDanied();
		}
	}
}

$scope.isAccessDanied = () => {
	toastr.warning('OOps! Anda tidak memiliki akses disini', 'Warning');
	setTimeout(() => {
		$state.go('home')
	}, 2000);
}

$scope.OnInit();
```

<a href="#daftar-isi" style="display:inline-block;margin-top:8px;font-size:13px;color:var(--vp-c-brand-1);text-decoration:none">↑ Kembali ke Daftar Isi</a>
---

*Dibuat oleh Ahmad Apriliyanto — Frontend Programmer*