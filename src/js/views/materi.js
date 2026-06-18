// view Materi — daftar sub-materi sebuah topik. Jumlah soal diisi async (dari lib/soal).

import { getTopik } from "../../data/materi/index.js";
import { fetchSoal } from "../lib/soal.js";
import { sudahDibaca } from "../lib/storage.js";
import { notFoundHtml } from "./util.js";

export function materi({ materiId }) {
  const topik = getTopik(materiId);
  if (!topik || !topik.tersedia) {
    return { html: notFoundHtml("Topik ini belum tersedia.") };
  }
  const data = topik.data;

  const items = data.subMateri
    .map((s) => {
      const dibaca = sudahDibaca(materiId, s.id);
      return `
        <li class="submateri-item">
          <a class="submateri-judul" href="#/materi/${materiId}/${s.id}">${s.judul}</a>
          <span class="submateri-meta" data-jumlah="${s.id}">…</span>
          <span class="submateri-status ${dibaca ? "submateri-dibaca" : ""}">${dibaca ? "sudah dibaca ✓" : "belum dibaca"}</span>
        </li>`;
    })
    .join("");

  const html = `
    <nav class="breadcrumb">
      <a href="#/">Beranda</a><span class="breadcrumb-pemisah">/</span>
      <span class="breadcrumb-aktif">${data.judul}</span>
    </nav>
    <h1 class="materi-judul">${data.judul}</h1>
    <p class="materi-deskripsi">Pilih sub-materi untuk membaca konsep esensial, lalu lanjut ke latihan soal.</p>
    <ol class="daftar-submateri">${items}</ol>`;

  // onMount: isi jumlah soal tiap sub-materi (datang dari sumber soal, async).
  const onMount = async (root) => {
    for (const s of data.subMateri) {
      const el = root.querySelector(`[data-jumlah="${s.id}"]`);
      if (!el) continue;
      const list = await fetchSoal(materiId, s.id);
      el.textContent = `${list.length} soal`;
    }
  };

  return { html, onMount };
}
