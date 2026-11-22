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

function konversiKeDetik(nilai: number, satuan: number): number {
    let pengali: number = 1;
    switch (satuan) {
        case 1:
            pengali = 1
            break;
            case 2:
                pengali = 60
                break;
                case 3:
                    pengali = 60 * 60
                    break
                    case 4:
                        pengali = 60 * 60 * 24
                        break
                        case 5: 
                        pengali = 60 * 60 * 24 * 7
                        break;
                        case 6: 
                            pengali = 60 * 60 * 24 * 30
                            break;
                            default:
                            pengali = 1
                            break;
    }
    return nilai * pengali;
}

function formatDurasi(detik: number): string {
    let angka: number = detik;
    let satuan: string = "detik";
    if (detik >= 60 * 60 * 24 * 7 * 30) {
        angka = detik / (60 * 60 * 24 * 7 * 30);
        satuan = "bulan";
    } else if (detik >= 60 * 60 * 24 * 7 ) {
        angka = detik / (60 * 60 * 24 * 7);
        satuan = "minggu";
    } else if (detik >= 60 * 60 * 24) {
        angka = detik / (60 * 60 * 24);
        satuan = "hari";
    } else if (detik >= 60 * 60) {
        angka = detik / (60 * 60);
        satuan = "jam";
    } else if (detik >= 60) {
        angka = detik / 60;
        satuan = "menit";
    }
    return `${Math.round(angka *10)/10} ${satuan}`;
}

function parseTanggal(teks: string): Date{
    const tanggal: string[] = teks.split("-");
    const hari: number = Number(tanggal[0]);
    const bulan: number = Number(tanggal[1]);
    const tahun: number = Number(tanggal[2]);
    return new Date(tahun, bulan -1, hari);
}