// ============================================================
// lib/soal.js — SATU pintu akses ke data soal.
// Fase 5: sumbernya Supabase (read-only via publishable key + RLS).
// Bentuk data yang dikembalikan SAMA dengan baris tabel `soal`, sehingga
// view (latihan & materi) tidak perlu berubah dari Fase 4.
// ============================================================

import { getClient } from "./supabase.js";

// Ambil semua soal untuk satu sub-materi, urut sesuai waktu dibuat.
// Melempar Error bila gagal — pemanggil menangani state error/loading.
export async function fetchSoal(materiId, subMateriId) {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("soal")
    .select("id, materi_id, sub_materi_id, pertanyaan, pilihan, jawaban, pembahasan, tingkat")
    .eq("materi_id", materiId)
    .eq("sub_materi_id", subMateriId)
    .order("created_at", { ascending: true });

  if (error) throw new Error("Gagal memuat soal: " + error.message);

  // `pilihan` (jsonb) sudah otomatis menjadi array objek oleh supabase-js.
  return data || [];
}
