// app.js — bootstrap aplikasi. Mendaftarkan rute -> view, lalu menjalankan router.

import { tambahRute, setTidakDitemukan, mulaiRouter } from "./router.js";
import { renderMath } from "./lib/katex.js";
import { beranda } from "./views/beranda.js";
import { materi } from "./views/materi.js";
import { subMateri } from "./views/sub-materi.js";
import { latihan } from "./views/latihan.js";
import { notFoundHtml } from "./views/util.js";

const outlet = document.getElementById("app");

// Bungkus sebuah view menjadi handler rute:
// render HTML -> render rumus -> jalankan onMount (pasang event, dll).
function pasang(view) {
  return (params) => {
    const { html, onMount } = view(params);
    outlet.innerHTML = html;
    renderMath(outlet);
    if (onMount) onMount(outlet);
  };
}

// Peta rute (urutan dari spesifik ke umum tidak masalah karena regex di-anchor ^...$).
tambahRute("/", pasang(beranda));
tambahRute("/materi/:materiId", pasang(materi));
tambahRute("/materi/:materiId/:subId", pasang(subMateri));
tambahRute("/materi/:materiId/:subId/latihan", pasang(latihan));

setTidakDitemukan(() => {
  outlet.innerHTML = notFoundHtml();
});

mulaiRouter();
