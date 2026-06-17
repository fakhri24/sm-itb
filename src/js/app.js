// app.js — titik masuk (bootstrap) aplikasi.
// FASE 0: tugasnya hanya membuktikan fondasi berjalan:
//   1) KaTeX bisa merender rumus, dan
//   2) library (KaTeX & Supabase) benar-benar ter-load dari CDN.
// Nanti (Fase 4) file ini akan menginisialisasi router & memuat halaman pertama.

// Jalankan setelah seluruh HTML siap (DOMContentLoaded), agar elemen target sudah ada.
document.addEventListener("DOMContentLoaded", () => {
  ujiKaTeX();
  cekLibrary();
});

// Render satu rumus uji ke dalam <span id="katex-test">.
function ujiKaTeX() {
  const target = document.getElementById("katex-test");
  if (!target) return;

  if (typeof window.katex === "undefined") {
    target.textContent = "(KaTeX gagal dimuat)";
    return;
  }

  // Rumus uji: definisi logaritma — representatif untuk slice pertama.
  // Notasi logaritma memakai bentuk ilmiah \log_a b (bukan {}^a\log b).
  window.katex.render("a^x = b \\iff x = \\log_a b", target, {
    throwOnError: false,
  });
}

// Tampilkan status apakah kedua library global tersedia.
function cekLibrary() {
  const status = document.getElementById("lib-status");
  if (!status) return;

  const adaKaTeX = typeof window.katex !== "undefined";
  const adaSupabase = typeof window.supabase !== "undefined";

  status.textContent =
    `KaTeX: ${adaKaTeX ? "OK ✅" : "GAGAL ❌"} | ` +
    `Supabase: ${adaSupabase ? "OK ✅" : "GAGAL ❌"}`;

  // Log juga ke console untuk verifikasi developer.
  console.log("[Fase 0] KaTeX termuat:", adaKaTeX);
  console.log("[Fase 0] Supabase termuat:", adaSupabase);
}
