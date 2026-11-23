# Prioritization/ Sistem Prioritas Agenda dan Aktivitas Mahasiswa 

*Kelas / Kelompok:* T1B / Kelompok-10
*Link Repository:* https://github.com/giovanni123sh-dev/UAS-PEMDAS-GIO-dan-DEDHEN.git 
*Mata Kuliah:* Pemrograman Dasar  
*Tahun Akademik:* 2026/2027  

*link google docs*: https://docs.google.com/document/d/1elDF28BIBOexTZjOlL76Sgox4i7xgYkq/edit

---

## A. Daftar Anggota & Pembagian Tugas

| No. | Nama Anggota | NIM | Akun GitHub | Tugas dan Tanggung Jawab |
|---|---|---|---|---|
| 1 | Dedhen Nugrahandi Styowidi  | `263140700111031` | `@Dedhen23` | Menu Utama, Fitur Read, Delete & Search, Flowchart Bab II & Screenshot] |
| 2 | Giovanni Sebastian Hia | `263140700111055` | `@giovanni123sh-dev` | Setup Repository Struktur Data, Logika Skor Prioritas,Fitur Create & Update, Laporan Bab I.


Setiap anggota juga me-review Pull Request anggota lain. Tabel ini diperbarui pada setiap progress.

---

## B. Proposal & Analisis Awal

### 1. Tema & Deskripsi Masalah
* **Tema:** Prioritization/ Sistem Prioritas Agenda dan Aktivitas Mahasiswa
* **Deskripsi Masalah:** Mahasiswa sering punya banyak agenda sekaligus: tugas kuliah, kuis, ujian, kegiatan organisasi, kepanitiaan, dan urusan pribadi. Agenda ini biasanya dicatat terpisah (chat, catatan HP, kertas), sehingga mudah terlewat dan sulit ditentukan mana yang harus dikerjakan lebih dulu. Akibatnya tugas menumpuk mendekati tenggat dan waktu terbagi tidak efektif. Karena itu dibutuhkan aplikasi console Sistem Prioritas Agenda dan Aktivitas Mahasiswa yang menyimpan semua agenda di satu tempat, menghitung skor prioritas otomatis dari tingkat kepentingan dan kedekatan tenggat, lalu menampilkan agenda dari yang paling mendesak.

### 2. Identifikasi Entitas & Properti Data
**Entitas Utama: `Menu`**
* `Id`: `string` - Kode unik agenda, dibuat otomatis (contoh:”AGD-001")
* `Judul`: `string` - Nama agenda/aktivitas (contoh:”Laporan UAS Pemdas”)
* `Kategori`: `string` - Jenis agenda: Kuliah, Tugas, Ujian, Organisasi, Pribadi
* `Tenggat`: `string` - Tanggal batas waktu
* `Kepentingan`: `number` - Tingkat kepentingan, skala 1–5
* `Durasi jam`: `number` - Estimasi waktu pengerjaan dalam jam
* `Skor prioritas`:`number` - Dihitung otomatis dari kepentingan dan sisa hari menuju tenggat
* `Selesai`: `boolean` - true jika sudah selesai, false jika belum


> Catatan: properti di atas disusun dari fitur yang tercantum; sesuaikan dengan `interface Menu` di `src/index.ts`.

### 3. Daftar Fitur Utama (CRUD + Search + Transaksi) & Decomposition Awal
1. **Menu Utama:**
   * Menampilkan daftar pilihan menu aplikasi PRIORITIZATION (menu 1–7 dan 0 untuk keluar) secara berulang hingga pengguna memilih opsi keluar (0).

2. **Create:**
   * Menginput data tugas baru yang mencakup nama tugas, kategori, tingkat kesulitan (1–5), tanggal deadline (DD-MM-YYYY), dan perkiraan durasi pengerjaan (dikonversi ke satuan detik), menetapkan status awal "belum" serta ID otomatis, lalu menyimpannya ke dalam array daftarTugas.
3. **Read:**
   * Menampilkan seluruh data tugas yang tersimpan dalam bentuk tabel beserta skor prioritasnya, serta menampilkan rincian lengkap tugas tertentu berdasarkan ID (meliputi rincian poin, level prioritas, tanggal mulai paling lambat, dan saran pengerjaan).
4. **Update:**
   * Menampilkan detail data tugas lama berdasarkan ID, mengubah atribut yang diminta pengguna (nama, kategori, kesulitan, deadline, durasi, atau status atau mempertahankan nilai lama jika dikosongkan), lalu menghitung ulang skor prioritas dan rekomendasinya secara otomatis.

5. **Delete:**
   * Mencari tugas berdasarkan ID, meminta konfirmasi penghapusan (Y/N), dan menghapus data tugas tersebut dari array daftarTugas sesuai permintaan pengguna.

6. **Search:**
   * Melakukan pencarian tugas berdasarkan kata kunci pada nama tugas atau kategori tanpa membedakan huruf besar/kecil (case-insensitive), disertai filter status pengerjaan dan rentang tingkat kesulitan (minimal hingga maksimal).
7. **Prioritas & Jadwal Hari Ini (Fitur Tambahan):** 
   * Menyaring tugas yang masih aktif, menghitung dan mengurutkan skor prioritas dari tertinggi ke terendah, menampilkan tabel prioritas beserta saran tanggal mulai paling lambat, serta menyusun alokasi jadwal pengerjaan berdasarkan waktu luang pengguna hari ini.

---

## C. Rencana Pengembangan Project
Pengembangan project dilakukan melalui beberapa tahapan:
1. Persiapan repository public dan konfigurasi awal TypeScript (`.gitignore`, `tsconfig.json`, `package.json`, `src/index.ts`).
2. Penyusunan proposal, analisis permasalahan, serta draft awal laporan di folder `docs/`.
3. Perancangan struktur data `Menu` dan alur logika program (*decomposition*, flowchart).
4. Implementasi fitur CRUD + Search + Transaksi Kasir.
5. Integrasi, pengujian, dan evaluasi program pada seluruh skenario input dan validasi.
6. Penyusunan dokumentasi akhir dan laporan UAS.

**Alur Git:** Branch `main` (selalu bisa dijalankan), `develop` (integrasi), dan `feature/<nama-fitur>`. Fitur digabung ke `develop` lewat Pull Request yang di-review minimal satu anggota lain; `develop` digabung ke `main` pada setiap batas progress. Format commit: `tipe: deskripsi singkat` (contoh: `feat: tambah fitur hapus data`).

---

## D. Progress Pengerjaan

### Progress 1 — 23 Nov 2026
- [ ] **Dedhen:** README, 1.1 Deskripsi Masalah awal.
- [ ] **Giovanni:** Buat repo Public, setup proyek, 1.2 Decomposition awal. 