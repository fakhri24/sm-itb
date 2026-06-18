# PLAN.md — Rencana Fase per Fase (Nol → Full-stack)

> Rencana kerja **konkret, langkah per langkah**, untuk membangun SM-ITB Matematika dari nol.
> Tujuan utama: **pembelajaran** — setiap baris kode harus dipahami & kuat secara logika,
> supaya pemilik proyek tahu apa yang harus diubah saat ingin memperbaiki sesuatu.
> Acuan tujuan & constraint: lihat [`../CLAUDE.md`](../CLAUDE.md).

## Filosofi Urutan Kerja

1. **Kontrak data dulu** → nama field/variabel terkunci dari sumber asli, frontend tinggal ikut (tanpa data contoh palsu).
2. **Tulang (HTML) → daging (CSS) → nyawa (JS)** → tahu dulu butuh elemen apa, baru dirapikan, baru dihidupkan.
3. **Mock → DB nyata** → logika frontend matang dulu, integrasi Supabase belakangan.
4. **1 materi tuntas dulu (Eksponen & Logaritma)** → jadi cetakan; topik lain tinggal ikut pola.

> **Catatan SPA:** HTML final digenerate oleh JS. Maka "HTML statis" di Fase 2 adalah **prototipe markup**
> yang nanti di Fase 4 "dipindahkan" menjadi fungsi render JS. Kerja HTML tidak terbuang — jadi cetakan.

**Konvensi status:** ☐ belum · ◧ sedang · ☑ selesai. Centang saat fase tuntas.

---

## FASE 0 — Fondasi Proyek ☑

**Tujuan:** kerangka proyek bisa dibuka di browser (halaman kosong), CDN ter-load.

**Langkah:**
1. `git init` + `.gitignore` (abaikan `.env`, dsb).
2. Struktur folder sesuai §8 CLAUDE.md (`src/css`, `src/js/{views,lib,components}`, `src/data/materi`, `public`).
3. `index.html` minimal: 1 `<div id="app">`, load **KaTeX** (CSS+JS) & **@supabase/supabase-js** via CDN.
4. `netlify.toml` + `public/_redirects` → redirect SPA (`/* /index.html 200`).
5. `.env.example` → `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` (referensi, bukan rahasia asli).

**Output / cara verifikasi:** buka `index.html` (atau `npx serve`), halaman terbuka tanpa error console, KaTeX bisa render rumus uji.

**Yang dipelajari:** struktur SPA tanpa build step, peran CDN, ES modules native.

---

## FASE 1 — Lapisan Data ("backend" / kontrak data) ☑

> Data ada di **dua tempat**: materi = file statis repo; soal = Supabase. Keduanya mengunci nama field.

### 1A. Supabase — tabel soal
1. Buat project Supabase, catat `URL` + `publishable key` (`sb_publishable_...`).
2. Jalankan SQL tabel `soal` + aktifkan RLS + policy `anon read` (lihat §7 CLAUDE.md).
3. **Seed manual** lewat dashboard: ~5–10 soal PG untuk sub-materi Eksponen & Logaritma (isi `pilihan` jsonb, `jawaban`, `pembahasan` boleh KaTeX).

### 1B. Materi statis — file data
1. Tulis `src/data/materi/eksponen-logaritma.js` sesuai model §6 CLAUDE.md (id, judul, urutan, `subMateri[]` → `konsep[]` blok bertipe).
2. Isi konsep esensial 6 sub-materi (seed di §5 CLAUDE.md), rumus sebagai string KaTeX.

**Output / cara verifikasi:** soal bisa di-`select` anonim dari dashboard; file materi bisa di-`import` dan di-`console.log` strukturnya.

**Yang dipelajari:** skema relational + RLS, perbedaan data dinamis (DB) vs statis (repo), bentuk "kontrak" yang dipakai seluruh frontend.

---

## FASE 2 — Tulang Frontend (HTML prototipe, TANPA CSS) ☑

**Tujuan:** lihat semua elemen yang dibutuhkan tiap halaman, pakai markup statis hardcoded.

**Halaman/prototipe yang dibuat (markup contoh, tag semantik, belum ada styling):**
1. **Beranda** — daftar 12 topik (link).
2. **Halaman Materi** — judul topik + daftar sub-materi.
3. **Halaman Sub-materi** — area konsep esensial (tempat KaTeX) + tombol "Latihan".
4. **Halaman Latihan** — kartu soal, daftar pilihan A–D, area feedback, area pembahasan, indikator skor/progress.

**Output / cara verifikasi:** keempat prototipe tampil sebagai dokumen polos; semua elemen yang dibutuhkan teridentifikasi & dicatat.

**Yang dipelajari:** HTML semantik, memikirkan kebutuhan UI sebelum estetika.

---

## FASE 3 — Daging (CSS + penamaan id/class konsisten) ☑

**Tujuan:** tampilan **clean & akademik** (terang, aksen biru ITB), penamaan rapi & siap dimanipulasi JS.

**Langkah:**
1. Tetapkan konvensi penamaan `class`/`id` yang konsisten & deskriptif (mis. pola blok-elemen).
2. Variabel CSS untuk warna/tipografi (palet biru ITB), fokus keterbacaan rumus.
3. Styling tiap prototipe Fase 2; pastikan rumus KaTeX terbaca rapi.

**Output / cara verifikasi:** prototipe statis tampak rapi & konsisten; daftar class/id terdokumentasi untuk dipakai JS.

**Yang dipelajari:** CSS variables, sistem penamaan yang memudahkan hook JS.

---

## FASE 4 — Nyawa (JavaScript) ☑

**Tujuan:** ubah prototipe statis jadi SPA hidup. Markup Fase 2 → fungsi render JS.

**Langkah (alur Materi dulu, baru Latihan):**
1. **`lib/storage.js`** — wrapper localStorage progress (jangan akses `localStorage` langsung di tempat lain).
2. **`lib/katex.js`** — helper render rumus konsisten.
3. **`router.js`** — router hash sederhana (peta route → view).
4. **Views Materi** — `home`, `materi`, `sub-materi` render dari `src/data/materi/*` (alur ini belum butuh Supabase).
5. **View Latihan** — logika soal: tampilkan soal, pilih jawaban → **validasi di client** (cocokkan `pilihan.key` vs `jawaban`) → feedback + pembahasan + update skor. **Data soal pakai MOCK dulu** (array lokal berbentuk sama dengan tabel `soal`).

**Output / cara verifikasi:** navigasi antar halaman jalan; materi tampil dari file data; latihan berfungsi penuh dengan data mock; progress tersimpan di localStorage.

**Yang dipelajari:** routing SPA manual, render berbasis data, pemisahan layer (storage/katex), kenapa mock mempermudah debugging logika.

---

## FASE 5 — Integrasi Backend Nyata (Supabase) ☑

**Tujuan:** ganti data mock dengan data asli dari Supabase.

**Langkah:**
1. **`lib/supabase.js`** — inisialisasi client (`createClient(url, publishableKey)`) + fungsi `fetchSoal(materiId, subMateriId)`.
2. Ganti sumber data soal di view Latihan dari mock → `lib/supabase.js`.
3. Tangani state **loading** & **error** (koneksi gagal/kosong).

**Output / cara verifikasi:** latihan menampilkan soal asli dari Supabase end-to-end; konfigurasi hanya pakai publishable key (tidak ada secret key di client).

**Yang dipelajari:** memanggil API DB dari client, RLS bekerja saat baca anonim, kenapa kontrak data Fase 1 bikin penggantian ini mulus (nama field sudah cocok).

---

## FASE 6 — Deploy ke Netlify ☑

**Tujuan:** website live & redirect SPA jalan.

**Langkah:**
1. Push repo ke Git remote; hubungkan ke Netlify (static, tanpa build / build trivial).
2. Set env Netlify (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`) bila di-inject; pastikan `_redirects`/`netlify.toml` aktif.
3. Smoke test di URL produksi: deep-link ke route (mis. `/#/materi/eksponen-logaritma`) tidak 404.

**Output / cara verifikasi:** URL publik bisa dibuka, navigasi & latihan jalan, refresh di sub-route tidak error.

**Yang dipelajari:** deploy SPA statis, pentingnya redirect fallback.

---

## FASE 7 — Replikasi Pola (Rangkuman 11 Materi) ☐

**Tujuan:** Melengkapi rangkuman konsep esensial untuk 11 topik matematika tersisa secara bertahap tanpa soal database terlebih dahulu.

**Langkah Kerja per Sub-Fase:**
1. Buat berkas data `src/data/materi/<id-topik>.js`.
2. Tulis penjelasan & rumus KaTeX untuk tiap sub-materi.
3. Impor & daftarkan topik tersebut di `src/data/materi/index.js`, lalu ubah `tersedia: true`.
4. Verifikasi di browser lokal (halaman materi bisa dibuka & rumus dirender dengan baik).

### Sub-Fase Rangkuman:
- [x] **Fase 7.1:** Operasi Bilangan ☑
- [x] **Fase 7.2:** Aljabar ☑
- [ ] **Fase 7.3:** Trigonometri ☐
- [ ] **Fase 7.4:** Bangun Datar dan Bangun Ruang ☐
- [ ] **Fase 7.5:** Statistika ☐
- [ ] **Fase 7.6:** Sistem Koordinat Kartesius ☐
- [ ] **Fase 7.7:** Kombinatorika ☐
- [ ] **Fase 7.8:** Polinomial ☐
- [ ] **Fase 7.9:** Fungsi, Invers, Komposisi ☐
- [ ] **Fase 7.10:** Persamaan Lingkaran ☐
- [ ] **Fase 7.11:** Limit, Turunan, Integral ☐

**Output / cara verifikasi:** topik baru muncul di beranda, bisa diklik, materi konsep esensial tampil rapi, halaman latihan menampilkan pesan fallback tanpa error.

---

## Checklist Ringkas

- [x] Fase 0 — Fondasi proyek
- [x] Fase 1 — Lapisan data (Supabase soal + file materi)
- [x] Fase 2 — HTML prototipe (tanpa CSS)
- [x] Fase 3 — CSS + penamaan konsisten
- [x] Fase 4 — JavaScript (alur materi → latihan, data mock)
- [x] Fase 5 — Integrasi Supabase nyata
- [x] Fase 6 — Deploy Netlify
- [ ] Fase 7 — Replikasi pola (Fase 7.1 s.d 7.11)
