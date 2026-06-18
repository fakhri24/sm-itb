// ============================================================
// router.js — SPA router sederhana berbasis hash (#/...).
// Kenapa hash? Tanpa konfigurasi server pun deep-link & refresh tidak 404.
// (Di Netlify kita juga punya redirect SPA, jadi history API bisa dipakai nanti.)
//
// Cara kerja: tiap rute punya POLA seperti "/materi/:materiId/:subId".
// ":nama" diubah jadi grup regex; nilainya diberikan ke handler sebagai params.
// ============================================================

const daftarRute = [];
let penangananTidakDitemukan = null;

// Daftarkan satu rute. handler menerima objek params, mis. { materiId, subId }.
export function tambahRute(pola, handler) {
  const namaParam = [];
  const sumberRegex = pola.replace(/:[^/]+/g, (cocok) => {
    namaParam.push(cocok.slice(1)); // buang ":" -> simpan nama param
    return "([^/]+)";               // satu segmen path
  });
  daftarRute.push({ regex: new RegExp("^" + sumberRegex + "$"), namaParam, handler });
}

// Handler cadangan bila tidak ada rute yang cocok.
export function setTidakDitemukan(handler) {
  penangananTidakDitemukan = handler;
}

// Pindah halaman secara programatik.
export function pergiKe(path) {
  location.hash = path;
}

function jalankan() {
  const path = decodeURIComponent(location.hash.slice(1)) || "/";
  window.scrollTo(0, 0);

  for (const rute of daftarRute) {
    const cocok = path.match(rute.regex);
    if (cocok) {
      const params = {};
      rute.namaParam.forEach((nama, i) => (params[nama] = cocok[i + 1]));
      rute.handler(params);
      return;
    }
  }

  if (penangananTidakDitemukan) penangananTidakDitemukan(path);
}

// Mulai mendengarkan perubahan hash + render rute saat ini.
export function mulaiRouter() {
  window.addEventListener("hashchange", jalankan);
  jalankan();
}
