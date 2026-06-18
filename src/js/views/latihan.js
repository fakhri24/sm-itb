// view Latihan — soal PG 5 opsi. Validasi jawaban DI CLIENT (cocokkan key vs jawaban).
// Alur: muat soal -> tampil 1 per 1 -> klik opsi -> feedback + pembahasan -> berikutnya -> hasil.

import { getTopik, getSubMateri } from "../../data/materi/index.js";
import { fetchSoal } from "../lib/soal.js";
import { simpanSkorLatihan } from "../lib/storage.js";
import { renderMath } from "../lib/katex.js";
import { notFoundHtml, parseMarkdown } from "./util.js";

export function latihan({ materiId, subId }) {
  const topik = getTopik(materiId);
  const sub = getSubMateri(topik, subId);
  if (!sub) return { html: notFoundHtml("Sub-materi latihan tidak ditemukan.") };

  const html = `
    <nav class="breadcrumb">
      <a href="#/">Beranda</a><span class="breadcrumb-pemisah">/</span>
      <a href="#/materi/${materiId}">${topik.data.judul}</a><span class="breadcrumb-pemisah">/</span>
      <a href="#/materi/${materiId}/${subId}">${sub.judul}</a><span class="breadcrumb-pemisah">/</span>
      <span class="breadcrumb-aktif">Latihan</span>
    </nav>
    <h1 class="latihan-judul">Latihan: ${sub.judul}</h1>
    <div id="latihan-kontainer"><p class="pengantar">Memuat soal…</p></div>`;

  // Seluruh logika interaktif berjalan setelah HTML terpasang (onMount).
  const onMount = (root) => jalankanLatihan(root, materiId, subId);
  return { html, onMount };
}

async function jalankanLatihan(root, materiId, subId) {
  const kontainer = root.querySelector("#latihan-kontainer");

  // Muat soal dari Supabase. Tangani gagal (koneksi/konfigurasi) dengan jelas.
  let soal;
  try {
    soal = await fetchSoal(materiId, subId);
  } catch (e) {
    kontainer.innerHTML = `
      <p class="pengantar">Gagal memuat soal. Periksa koneksi atau konfigurasi Supabase.</p>
      <p><button type="button" class="tombol-ulangi" id="tombol-coba-lagi">Coba lagi</button></p>`;
    kontainer
      .querySelector("#tombol-coba-lagi")
      .addEventListener("click", () => jalankanLatihan(root, materiId, subId));
    return;
  }

  if (soal.length === 0) {
    kontainer.innerHTML = `<p class="pengantar">Belum ada soal untuk sub-materi ini.</p>`;
    return;
  }

  // State latihan (tertutup di dalam fungsi ini — tidak bocor ke global).
  let idx = 0;
  let benar = 0;
  let terjawab = false;

  function tampilkanSoal() {
    const s = soal[idx];
    terjawab = false;

    const pilihan = s.pilihan
      .map(
        (p) => `
        <li class="pilihan-item">
          <button type="button" class="pilihan-tombol" data-key="${p.key}">
            <span class="pilihan-key">${p.key}</span>
            <span class="pilihan-teks">${parseMarkdown(p.teks)}</span>
          </button>
        </li>`
      )
      .join("");

    const labelLanjut = idx + 1 < soal.length ? "Soal berikutnya &rarr;" : "Lihat hasil &rarr;";

    kontainer.innerHTML = `
      <div class="latihan-status">
        <span class="latihan-progres">Soal ${idx + 1} dari ${soal.length}</span>
        <span class="latihan-skor">Benar: ${benar}</span>
      </div>
      <section class="kartu-soal">
        <p class="soal-pertanyaan">${parseMarkdown(s.pertanyaan)}</p>
        <ul class="daftar-pilihan">${pilihan}</ul>
        <div class="area-feedback" hidden></div>
        <div class="area-pembahasan" hidden></div>
        <button type="button" class="tombol-soal-berikutnya" id="tombol-lanjut" hidden>${labelLanjut}</button>
      </section>`;

    renderMath(kontainer);
    kontainer
      .querySelectorAll(".pilihan-tombol")
      .forEach((btn) => btn.addEventListener("click", () => jawab(btn, s)));
    kontainer.querySelector("#tombol-lanjut").addEventListener("click", lanjut);
  }

  function jawab(btn, s) {
    if (terjawab) return; // hanya boleh menjawab sekali
    terjawab = true;

    const dipilih = btn.dataset.key;
    const tepat = dipilih === s.jawaban;
    if (tepat) benar++;

    // Tandai opsi: hijau untuk yang benar, merah untuk pilihan salah si pengguna.
    kontainer.querySelectorAll(".pilihan-tombol").forEach((b) => {
      b.disabled = true;
      const li = b.closest(".pilihan-item");
      if (b.dataset.key === s.jawaban) li.classList.add("pilihan-benar");
      else if (b.dataset.key === dipilih) li.classList.add("pilihan-salah");
    });

    const feedback = kontainer.querySelector(".area-feedback");
    feedback.hidden = false;
    feedback.innerHTML = tepat
      ? `<p class="soal-feedback feedback-benar">Benar! ✓</p>`
      : `<p class="soal-feedback feedback-salah">Belum tepat. Jawaban benar: ${s.jawaban}.</p>`;

    if (s.pembahasan) {
      const pembahasan = kontainer.querySelector(".area-pembahasan");
      pembahasan.hidden = false;
      pembahasan.innerHTML = `
        <div class="soal-pembahasan">
          <span class="pembahasan-label">Pembahasan</span>
          <p>${parseMarkdown(s.pembahasan)}</p>
        </div>`;
    }

    kontainer.querySelector(".latihan-skor").textContent = `Benar: ${benar}`;
    kontainer.querySelector("#tombol-lanjut").hidden = false;
    renderMath(kontainer); // render rumus pada feedback & pembahasan
  }

  function lanjut() {
    if (idx + 1 < soal.length) {
      idx++;
      tampilkanSoal();
      window.scrollTo(0, 0);
    } else {
      tampilkanHasil();
    }
  }

  function tampilkanHasil() {
    simpanSkorLatihan(materiId, subId, benar, soal.length);
    const persen = Math.round((benar / soal.length) * 100);
    kontainer.innerHTML = `
      <section class="latihan-hasil">
        <h2>Hasil Latihan</h2>
        <p class="hasil-skor">Skor kamu: <strong>${benar} / ${soal.length}</strong> (${persen}%)</p>
        <div class="hasil-aksi">
          <button type="button" class="tombol-ulangi" id="tombol-ulangi">Ulangi latihan</button>
          <a class="tombol-kembali" href="#/materi/${materiId}/${subId}">Kembali ke materi</a>
        </div>
      </section>`;
    kontainer.querySelector("#tombol-ulangi").addEventListener("click", () => {
      idx = 0;
      benar = 0;
      tampilkanSoal();
      window.scrollTo(0, 0);
    });
  }

  tampilkanSoal();
}
