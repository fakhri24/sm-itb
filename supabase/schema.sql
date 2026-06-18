-- ============================================================
-- SM-ITB Matematika — Skema tabel `soal`
-- Jalankan di: Supabase Dashboard > SQL Editor > New query > Run
-- Referensi: CLAUDE.md §7
-- ============================================================

-- Tabel utama bank soal. Satu baris = satu soal pilihan ganda.
create table if not exists public.soal (
  id            uuid primary key default gen_random_uuid(),
  materi_id     text not null,                 -- mis. 'eksponen-logaritma'
  sub_materi_id text not null,                 -- mis. 'sifat-logaritma'
  pertanyaan    text not null,                 -- boleh berisi rumus KaTeX dgn delimiter $...$
  pilihan       jsonb not null,                -- [{ "key": "A", "teks": "..." }, ...]
  jawaban       text not null,                 -- 'A' | 'B' | 'C' | 'D' | 'E'
  pembahasan    text,                          -- boleh berisi KaTeX $...$
  tingkat       text not null default 'sedang'
                check (tingkat in ('mudah','sedang','sulit')),
  created_at    timestamptz not null default now()
);

-- Index untuk query utama frontend: ambil soal per (materi, sub-materi).
create index if not exists soal_materi_sub_idx
  on public.soal (materi_id, sub_materi_id);

-- ---------- Keamanan: Row Level Security ----------
-- Aktifkan RLS supaya akses ditentukan oleh policy (default: tolak semua).
alter table public.soal enable row level security;

-- Peran `anon` (request via publishable key tanpa login) HANYA boleh SELECT.
-- Tidak ada policy insert/update/delete -> otomatis ditolak. Read-only.
drop policy if exists "anon read soal" on public.soal;
create policy "anon read soal"
  on public.soal
  for select
  to anon
  using (true);
