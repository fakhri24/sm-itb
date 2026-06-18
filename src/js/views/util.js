// util.js — potongan HTML bersama antar-view.

// Tampilan "tidak ditemukan" (rute/materi/sub-materi tak dikenal).
export function notFoundHtml(pesan = "Halaman yang kamu cari tidak ditemukan.") {
  return `
    <nav class="breadcrumb"><span class="breadcrumb-aktif">Tidak ditemukan</span></nav>
    <h1>404 — Tidak ditemukan</h1>
    <p class="pengantar">${pesan}</p>
    <p><a href="#/">← Kembali ke beranda</a></p>`;
}
