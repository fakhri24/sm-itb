// ============================================================
// lib/katex.js — SATU pintu render rumus.
// Memakai ekstensi auto-render KaTeX (di-load via CDN di index.html) untuk
// mengubah teks ber-delimiter $...$ (inline) dan $$...$$ (display) menjadi rumus.
//
// Pola pakai: bangun HTML (boleh memuat $...$), masukkan ke DOM, lalu panggil
//   renderMath(kontainer)
// ============================================================

export function renderMath(root) {
  if (!root || typeof window.renderMathInElement !== "function") return;
  window.renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false, // rumus salah tampil merah, tidak mematahkan halaman
  });
}
