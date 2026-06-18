// view Sub-materi — render konsep esensial (4 tipe blok) + tombol & navigasi.

import { getTopik } from "../../data/materi/index.js";
import { tandaiDibaca, sudahDibaca } from "../lib/storage.js";
import { notFoundHtml, parseMarkdown } from "./util.js";

export function subMateri({ materiId, subId }) {
  const topik = getTopik(materiId);
  const data = topik && topik.tersedia ? topik.data : null;
  const idx = data ? data.subMateri.findIndex((s) => s.id === subId) : -1;
  if (idx === -1) {
    return { html: notFoundHtml("Sub-materi ini tidak ditemukan.") };
  }

  const sub = data.subMateri[idx];
  const prev = data.subMateri[idx - 1];
  const next = data.subMateri[idx + 1];
  const sudah = sudahDibaca(materiId, subId);

  const blok = sub.konsep.map(renderBlok).join("");

  const navPrev = prev
    ? `<a class="nav-prev" href="#/materi/${materiId}/${prev.id}">&larr; ${prev.judul}</a>`
    : `<span class="nav-prev nav-nonaktif">&larr; Sebelumnya</span>`;
  const navNext = next
    ? `<a class="nav-next" href="#/materi/${materiId}/${next.id}">${next.judul} &rarr;</a>`
    : `<span class="nav-next nav-nonaktif">Berikutnya &rarr;</span>`;

  const html = `
    <nav class="breadcrumb">
      <a href="#/">Beranda</a><span class="breadcrumb-pemisah">/</span>
      <a href="#/materi/${materiId}">${data.judul}</a><span class="breadcrumb-pemisah">/</span>
      <span class="breadcrumb-aktif">${sub.judul}</span>
    </nav>
    <h1 class="submateri-judul">${sub.judul}</h1>
    <article class="konsep">${blok}</article>
    <div class="submateri-aksi">
      <button type="button" class="tombol-tandai-dibaca" id="tombol-tandai" ${sudah ? "disabled" : ""}>
        ${sudah ? "Sudah dibaca ✓" : "Tandai sudah dibaca"}
      </button>
      <a class="tombol-latihan" href="#/materi/${materiId}/${subId}/latihan">Mulai Latihan &rarr;</a>
    </div>
    <nav class="submateri-nav">${navPrev}${navNext}</nav>`;

  const onMount = (root) => {
    const tombol = root.querySelector("#tombol-tandai");
    tombol?.addEventListener("click", () => {
      tandaiDibaca(materiId, subId);
      tombol.textContent = "Sudah dibaca ✓";
      tombol.disabled = true;
    });
  };

  return { html, onMount };
}

// Render satu blok konsep sesuai tipenya. Untuk "rumus", bungkus dengan $$ (display).
function renderBlok(b) {
  const isi = parseMarkdown(b.isi);
  switch (b.tipe) {
    case "teks":
      return `<p class="blok blok-teks">${isi}</p>`;
    case "rumus":
      return `<div class="blok blok-rumus">$$${b.isi}$$</div>`;
    case "catatan":
      return `<aside class="blok blok-catatan"><span class="blok-catatan-label">Catatan</span> ${isi}</aside>`;
    case "contoh":
      return `<div class="blok blok-contoh"><span class="blok-contoh-label">Contoh</span> ${isi}</div>`;
    default:
      return "";
  }
}
