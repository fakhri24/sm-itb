// view Beranda — daftar 12 topik. Hanya topik `tersedia` yang bisa diklik.

import { daftarTopik } from "../../data/materi/index.js";

export function beranda() {
  const items = daftarTopik.map(itemTopik).join("");
  const html = `
    <h1>Materi Matematika</h1>
    <p class="pengantar">Pilih topik untuk membaca konsep esensial dan mengerjakan latihan.</p>
    <ul class="daftar-topik">${items}</ul>`;
  return { html };
}

function itemTopik(t) {
  if (t.tersedia) {
    const jml = t.data ? t.data.subMateri.length : 0;
    return `
      <li class="topik-item topik-aktif">
        <span class="topik-nomor">${t.urutan}</span>
        <a class="topik-judul topik-tautan" href="#/materi/${t.id}">${t.judul}</a>
        <span class="topik-status">${jml} sub-materi &middot; tersedia</span>
      </li>`;
  }
  return `
    <li class="topik-item topik-nonaktif">
      <span class="topik-nomor">${t.urutan}</span>
      <span class="topik-judul">${t.judul}</span>
      <span class="topik-status">belum tersedia</span>
    </li>`;
}
