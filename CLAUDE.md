# CLAUDE.md — SM-ITB Matematika

> File ini adalah **kontrak tujuan utama** proyek. Baca sebelum generate code apa pun.
> Tujuan: jangan kehilangan arah saat implementasi. Jika ada keputusan baru, **update file ini**.
>
> **Rencana kerja fase per fase:** lihat [`plan/PLAN.md`](plan/PLAN.md). Kerjakan **berurutan**,
> satu fase tuntas sebelum lanjut. Prinsip: kontrak data dulu → HTML → CSS → JS → integrasi DB → deploy.
> Fokus pembelajaran — jelaskan logika tiap bagian, jangan loncat fase tanpa diminta.

---

## 1. Tujuan Proyek

Website **SPA** rangkuman materi + latihan soal untuk persiapan **Tes Mandiri ITB (SM-ITB)**, fokus **Matematika**.
Sumber materi: PDF "Materi Tes Mandiri ITB" (disclaimer: tidak resmi, referensi tambahan).

Tiga lapis konten:

```
Materi (12 topik) → Sub-materi → Konsep Esensial (+ Bank Soal Latihan per sub-materi)
```

> **Penting:** Di PDF, daftar matematika **hanya judul besar tanpa sub-materi**. Sub-materi & konsep
> esensial matematika **kita susun sendiri** (bukan dari sumber resmi ITB). Jangan klaim sebagai resmi.
> (Fisika di PDF sudah ada sub-materinya — bisa jadi modul terpisah di masa depan, **di luar scope sekarang**.)

---

## 2. Tech Stack & Constraint (WAJIB dipatuhi)

- **Frontend:** Vanilla **HTML + CSS + JavaScript** (tanpa framework, tanpa build step kalau bisa). SPA dengan client-side routing sederhana (hash/history router buatan sendiri).
- **Render rumus:** **KaTeX** (via CDN). Wajib — semua rumus matematika pakai KaTeX, bukan gambar.
- **Database:** **Supabase** — **hanya untuk SOAL latihan**. Akses **baca anonim** via RLS (read-only, pakai **publishable key** `sb_publishable_...`).
- **Materi rangkuman:** **file statis di repo** (JS/JSON/Markdown), di-version control. **Tidak** di Supabase.
- **Auth:** **Tanpa login.** Progress & riwayat latihan disimpan di **localStorage**.
  - Rancang struktur data progress agar **mudah dimigrasi ke Supabase Auth nanti** (mis. wrapper `storage` layer, jangan akses `localStorage` langsung tersebar).
- **Deploy:** **Netlify** (static site / SPA). Sediakan redirect SPA (`/* /index.html 200`).
- **Bahasa UI:** Indonesia.

### Yang TIDAK boleh
- Tidak pakai React/Vue/Svelte/dll.
- Tidak menaruh materi rangkuman di Supabase.
- Tidak menambahkan login/auth tanpa diminta.
- Jangan commit secret. Supabase **publishable key** (`sb_publishable_...`) boleh di client (memang publik, privilege rendah), tapi **secret key** (`sb_secret_...`) **dilarang** di client.

> **Catatan API key Supabase:** kita pakai sistem key baru — **publishable key** (`sb_publishable_...`)
> pengganti `anon` key lama, dan **secret key** (`sb_secret_...`) pengganti `service_role`.
> Key `anon`/`service_role` lama berbasis JWT sudah legacy dan **akan dihapus akhir 2026**, jadi
> kita langsung pakai key baru dari awal. Secara kode tak ada bedanya — `createClient(url, publishableKey)`,
> dan RLS tetap memperlakukan request tanpa login sebagai role `anon`.

---

## 3. Keputusan Arsitektur (sudah disepakati)

| Aspek | Keputusan |
|---|---|
| Storage materi | File statis di repo |
| Storage soal | Supabase (read-only anonim, publishable key) |
| Auth | Tanpa login; progress di localStorage (siap migrasi) |
| Format soal | Pilihan Ganda **5 opsi (A–E)** + pembahasan; **validasi di client** (jawaban benar boleh ter-fetch ke client — wajar untuk situs belajar) |
| MVP | **Vertical slice 1 topik dulu**: **Eksponen & Logaritma** (lengkap: konsep esensial + soal), end-to-end |
| Desain | **Clean & akademik** — terang, fokus keterbacaan rumus, aksen biru ITB |

---

## 4. Daftar Materi Matematika (12 topik)

Status: ☐ belum, ◧ konsep esensial dibuat, ☑ lengkap (konsep + soal).

1. ☐ Operasi bilangan
2. ☐ Aljabar
3. ☐ Trigonometri
4. ☐ Bangun datar dan bangun ruang
5. ☐ Statistika
6. ☐ Sistem koordinat kartesius
7. ☐ Kombinatorika
8. ☐ Polinomial
9. ☐ Fungsi, invers, komposisi
10. ☐ Persamaan lingkaran
11. ☐ Limit, turunan, integral
12. ☑ **Eksponen dan logaritma** ← vertical slice pertama (konsep + soal, SPA jalan dgn data mock; soal pindah ke Supabase di Fase 5)

> Sub-materi & konsep esensial untuk topik 1–11 disusun **bertahap** setelah slice pertama jadi.

---

## 5. Vertical Slice Pertama — Eksponen & Logaritma

Sub-materi + konsep esensial (seed konten; boleh dikembangkan, rumus dirender KaTeX):

1. **Bentuk pangkat (eksponen)** — `id: bentuk-pangkat`
   - Definisi pangkat bulat (positif, nol, negatif): $a^0=1$, $a^{-n}=\frac{1}{a^n}$
   - Sifat: $a^m\cdot a^n=a^{m+n}$, $\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$, $(ab)^n=a^nb^n$, $\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$
2. **Bentuk akar & pangkat pecahan** — `id: bentuk-akar`
   - $a^{1/n}=\sqrt[n]{a}$, $a^{m/n}=\sqrt[n]{a^m}$
   - Merasionalkan penyebut
3. **Persamaan & pertidaksamaan eksponen** — `id: persamaan-eksponen`
   - Basis sama → samakan eksponen; perhatikan basis $>1$ vs $0<a<1$ (arah pertidaksamaan)
4. **Definisi logaritma** — `id: definisi-logaritma`
   - $a^x=b \iff x=\log_a b$ (basis $a>0,\ a\neq1$)
5. **Sifat logaritma** — `id: sifat-logaritma`
   - $\log_a(xy)=\log_a x+\log_a y$, $\log_a\frac{x}{y}=\log_a x-\log_a y$
   - $\log_a x^n=n\,\log_a x$, ganti basis $\frac{\log_c b}{\log_c a}$, $\log_a a=1$, $\log_a 1=0$
6. **Persamaan & pertidaksamaan logaritma** — `id: persamaan-logaritma`
   - Syarat numerus $>0$; basis $>1$ vs $0<a<1$

> **Kontrak `sub_materi_id`** (kebab-case, stabil): `bentuk-pangkat`, `bentuk-akar`,
> `persamaan-eksponen`, `definisi-logaritma`, `sifat-logaritma`, `persamaan-logaritma`.
> Wajib **sama persis** antara file materi (`src/data/materi/eksponen-logaritma.js`) dan kolom
> `sub_materi_id` di tabel `soal`. SQL skema & seed ada di folder `supabase/`.

Setiap sub-materi punya **bank soal PG** di Supabase (lihat skema §7).

---

## 6. Model Data Materi (file statis)

Bentuk yang disarankan (boleh JSON atau modul JS), satu file per topik di `src/data/materi/`:

```js
// contoh: eksponen-logaritma.js
export default {
  id: "eksponen-logaritma",
  judul: "Eksponen dan Logaritma",
  urutan: 12,
  subMateri: [
    {
      id: "bentuk-pangkat",
      judul: "Bentuk Pangkat (Eksponen)",
      konsep: [ /* blok konten: teks + rumus KaTeX (string $...$) */ ],
    },
    // ...
  ],
};
```

- Konten konsep boleh berupa array blok (`{ tipe: "teks"|"rumus"|"catatan"|"contoh", isi }`) agar mudah dirender konsisten.
- ID stabil & kebab-case (dipakai untuk routing & relasi ke soal).

---

## 7. Skema Supabase — Soal

Tabel `soal` (read-only anonim via RLS):

```sql
create table soal (
  id           uuid primary key default gen_random_uuid(),
  materi_id    text not null,          -- mis. 'eksponen-logaritma'
  sub_materi_id text not null,         -- mis. 'sifat-logaritma'
  pertanyaan   text not null,          -- boleh berisi KaTeX
  pilihan      jsonb not null,         -- [{key:'A', teks:'...'}, ...]
  jawaban      text not null,          -- 'A' | 'B' | ...
  pembahasan   text,                   -- boleh berisi KaTeX
  tingkat      text default 'sedang',  -- mudah|sedang|sulit
  created_at   timestamptz default now()
);

-- RLS: anon hanya boleh SELECT
alter table soal enable row level security;
create policy "anon read soal" on soal for select to anon using (true);
```

- Validasi jawaban **di client** (cocokkan `pilihan key` dengan `jawaban`).
- Konfigurasi Supabase (`url`, `publishable key`) di file config client; **jangan** taruh `secret key`.
- **Delimiter rumus:** teks `pertanyaan`, `pilihan[].teks`, dan `pembahasan` boleh memuat KaTeX
  dengan delimiter `$...$` (inline) / `$$...$$` (display). Frontend yang merender (Fase 4).
- **SQL ada di repo:** `supabase/schema.sql` (tabel + RLS) & `supabase/seed.sql` (soal contoh),
  dijalankan manual di Supabase SQL Editor.

---

## 8. Struktur Folder (usulan)

```
sm-itb/
├── CLAUDE.md
├── index.html
├── netlify.toml            # redirect SPA
├── public/                 # _redirects atau aset statis
├── src/
│   ├── css/
│   ├── js/
│   │   ├── app.js          # bootstrap
│   │   ├── router.js       # SPA router (hash/history)
│   │   ├── views/          # halaman: home, materi, sub-materi, latihan
│   │   ├── lib/
│   │   │   ├── supabase.js  # client + fetch soal
│   │   │   ├── storage.js   # wrapper localStorage (progress) — abstraksi untuk migrasi auth
│   │   │   └── katex.js     # helper render rumus
│   │   └── components/
│   └── data/
│       └── materi/         # file statis per topik
└── .env.example            # SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY (untuk referensi)
```

---

## 9. Fitur (prioritas)

**MVP (slice):**
- Browse materi → sub-materi → konsep esensial (render KaTeX).
- Latihan soal PG per sub-materi: jawab → feedback instan + pembahasan.
- Progress dasar di localStorage (sub-materi dibaca, skor latihan).

**Fase lanjut (jangan kerjakan dulu tanpa diminta):**
- Lengkapi 12 topik.
- Pencarian materi/rumus.
- Mode try-out berwaktu (campuran soal).
- Migrasi progress ke Supabase Auth (sinkron lintas device).
- Modul Fisika.

---

## 10. Konvensi

- Bahasa UI & konten: **Indonesia**.
- ID konten: **kebab-case**, stabil.
- Semua rumus via **KaTeX** (jangan gambar/Unicode mentah untuk rumus kompleks).
- **Notasi logaritma:** pakai bentuk ilmiah $\log_a b$ (`\log_a b`), **bukan** ${}^a\log b$ (`{}^a\log b`).
- **Soal pilihan ganda selalu 5 opsi (A–E).** `jawaban` salah satu dari `A`–`E`.
- **Spasi di sekitar `<` pada math inline** (mis. `$0 < a < 1$`, bukan `$0<a<1$`). Teks rumus
  diinjeksi via `innerHTML`; `<` tanpa spasi bisa dianggap awal tag HTML. (`>` aman.)
- Akses storage progress **hanya** lewat `lib/storage.js` (jangan sebar `localStorage` langsung).
- Akses Supabase **hanya** lewat `lib/supabase.js`.
- Jaga agar tetap **tanpa build step** bila memungkinkan (ES modules native + CDN).
