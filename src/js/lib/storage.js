// ============================================================
// lib/storage.js — SATU pintu akses progress belajar (localStorage).
// Aturan proyek: jangan akses localStorage langsung di tempat lain (CLAUDE.md §10).
//
// Bentuk data sengaja berupa satu objek JSON yang utuh & serializable, supaya
// mudah dimigrasi ke Supabase Auth nanti (tinggal kirim objek ini ke server).
//   {
//     dibaca:  { "materiId/subId": true, ... },
//     latihan: { "materiId/subId": { benar, total, waktu }, ... }
//   }
// ============================================================

const KUNCI = "sm-itb:progress:v1"; // versi di nama kunci -> aman saat skema berubah

function baca() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI)) || {};
  } catch {
    return {}; // localStorage tidak tersedia / data rusak -> anggap kosong
  }
}

function tulis(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch {
    /* mode privat / kuota penuh -> abaikan, progress sekadar best-effort */
  }
}

function kunciSub(materiId, subId) {
  return `${materiId}/${subId}`;
}

// ---- Status "sudah dibaca" per sub-materi ----
export function tandaiDibaca(materiId, subId) {
  const data = baca();
  data.dibaca = data.dibaca || {};
  data.dibaca[kunciSub(materiId, subId)] = true;
  tulis(data);
}

export function sudahDibaca(materiId, subId) {
  const data = baca();
  return Boolean(data.dibaca && data.dibaca[kunciSub(materiId, subId)]);
}

// ---- Skor latihan per sub-materi ----
export function simpanSkorLatihan(materiId, subId, benar, total) {
  const data = baca();
  data.latihan = data.latihan || {};
  data.latihan[kunciSub(materiId, subId)] = { benar, total, waktu: Date.now() };
  tulis(data);
}

export function ambilSkorLatihan(materiId, subId) {
  const data = baca();
  return (data.latihan && data.latihan[kunciSub(materiId, subId)]) || null;
}
