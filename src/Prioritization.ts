import * as readlinesync from "readline-sync";

interface Tugas {
    id: number;
    nama: string;
    kategori: string | number
    kesulitan: number;
    deadline: string | number;
    estimasi: number
    status: string;
}

const daftarStatus: string[] = ["Belum", "Proses", "Selesai"]
let daftarTugas: Tugas[] = [];
let idTugas: number = 1;
let appberjalan: boolean = true;

