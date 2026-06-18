// ============================================================
// lib/soal.js — SATU pintu akses ke data soal.
// Fase 4: sumbernya data mock lokal.
// Fase 5: cukup ganti ISI fungsi ini dengan query Supabase — pemanggilnya tak berubah,
//         karena bentuk data & tanda tangan fungsi (async) sudah disamakan dari awal.
// ============================================================

import { soalMock } from "../../data/soal-mock.js";

// Ambil semua soal untuk satu sub-materi. Sengaja async (return Promise)
// agar identik dengan pemanggilan jaringan ke Supabase nanti.
export async function fetchSoal(materiId, subMateriId) {
  return soalMock.filter(
    (s) => s.materi_id === materiId && s.sub_materi_id === subMateriId
  );
}
