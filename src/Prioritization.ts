interface Tugas {
    id: number;
    nama: string;
    kategori: string | number
    kesulitan: number;
    deadline: string | number;
    estimasi: number
    status: string;
}

interface nilaiSkor {
    waktu: number;
    kesulitan: number;
    kategori: number;
    bonus: number;
}

interface kategori {
    nama: string;
    bobot: number;
}

const jam_kerja_perhari: number = 3;
const daftarStatus: string[] = ["Belum", "Proses", "Selesai"]
const daftarSatuan: string[] = ["Detik", "Menit", "Jam", "Hari", "Minggu", "Bulan"]
const daftarKategori: kategori[] = [
    { nama: "kuliah", bobot: 5 },
    { nama: "pekerjaan", bobot: 5 },
    { nama: "kesehatan", bobot: 4 },
    { nama: "organisasi", bobot: 3 },
    { nama: "pribadi", bobot: 4 },
    { nama: "hiburan", bobot: 2 },
    { nama: "lainnya", bobot: 1 }
]
let daftarTugas: Tugas[] = [];
let idTugas: number = 1;
let appberjalan: boolean = true;

function menu (): void {
    console.log("=== Aplikasi Prioritas Tugas ===");
    console.log("1. Tambah Tugas"); // ini create
    console.log("2. Lihat Daftar Tugas"); //ini read
    console.log("3. Lihat Daftar Tugas Berdasarkan Id");
    console.log("4. Ubah Tugas"); // ini Update
    console.log("5. Hapus Tugas"); // ini delete
    console.log("6. Cari Tugas") // in search
    console.log("7. Tabel Prioritas dan Jadwal Hari ini")
    console.log("0. Keluar");
    console.log("================================");
}

