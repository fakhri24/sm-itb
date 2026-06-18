// ============================================================
// Registry materi: daftar 12 topik + akses ke datanya.
// Topik `tersedia:false` tetap tampil di beranda tapi belum bisa dibuka.
// Tambah topik baru nanti = import file datanya + ubah `tersedia:true` + sisipkan `data`.
// ============================================================

import eksponenLogaritma from "./eksponen-logaritma.js";
import operasiBilangan from "./operasi-bilangan.js";
import aljabar from "./aljabar.js";
import trigonometri from "./trigonometri.js";
import bangunDatarRuang from "./bangun-datar-ruang.js";
import statistika from "./statistika.js";

export const daftarTopik = [
  { id: "operasi-bilangan",        judul: "Operasi bilangan",              urutan: 1,  tersedia: true, data: operasiBilangan },
  { id: "aljabar",                 judul: "Aljabar",                       urutan: 2,  tersedia: true, data: aljabar },
  { id: "trigonometri",            judul: "Trigonometri",                  urutan: 3,  tersedia: true, data: trigonometri },
  { id: "bangun-datar-ruang",      judul: "Bangun datar dan bangun ruang", urutan: 4,  tersedia: true, data: bangunDatarRuang },
  { id: "statistika",              judul: "Statistika",                    urutan: 5,  tersedia: true, data: statistika },
  { id: "koordinat-kartesius",     judul: "Sistem koordinat kartesius",    urutan: 6,  tersedia: false },
  { id: "kombinatorika",           judul: "Kombinatorika",                 urutan: 7,  tersedia: false },
  { id: "polinomial",              judul: "Polinomial",                    urutan: 8,  tersedia: false },
  { id: "fungsi-invers-komposisi", judul: "Fungsi, invers, komposisi",     urutan: 9,  tersedia: false },
  { id: "persamaan-lingkaran",     judul: "Persamaan lingkaran",           urutan: 10, tersedia: false },
  { id: "limit-turunan-integral",  judul: "Limit, turunan, integral",      urutan: 11, tersedia: false },
  { id: "eksponen-logaritma",      judul: "Eksponen dan Logaritma",        urutan: 12, tersedia: true, data: eksponenLogaritma },
];

// Cari satu topik berdasarkan id.
export function getTopik(id) {
  return daftarTopik.find((t) => t.id === id) || null;
}

// Cari satu sub-materi di dalam sebuah topik.
export function getSubMateri(topik, subId) {
  if (!topik || !topik.data) return null;
  return topik.data.subMateri.find((s) => s.id === subId) || null;
}
