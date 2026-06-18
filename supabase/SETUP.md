# Setup Supabase — Fase 1A

Langkah membuat backend soal. Lakukan di dashboard Supabase (butuh akun).

## 1. Buat project
1. Buka https://supabase.com → **Sign in** (boleh pakai GitHub).
2. **New project** → isi:
   - **Name:** `sm-itb-matematika` (bebas)
   - **Database Password:** buat kuat, **simpan** (dipakai kalau akses DB langsung; bukan untuk frontend)
   - **Region:** pilih terdekat (mis. Southeast Asia / Singapore)
3. Tunggu provisioning ±1–2 menit.

## 2. Jalankan skema
1. Sidebar kiri → **SQL Editor** → **New query**.
2. Salin seluruh isi [`schema.sql`](schema.sql) → tempel → **Run**.
3. Pastikan tidak ada error (muncul "Success").

## 3. Isi data contoh (seed)
1. **SQL Editor** → **New query** lagi.
2. Salin seluruh isi [`seed.sql`](seed.sql) → tempel → **Run**.
3. Harusnya menyisipkan **11 baris** soal.

## 4. Verifikasi
Jalankan di SQL Editor:
```sql
select sub_materi_id, count(*) 
from public.soal 
where materi_id = 'eksponen-logaritma'
group by sub_materi_id 
order by sub_materi_id;
```
Harus muncul 6 sub-materi. Lalu cek RLS aktif:
- **Table Editor** → tabel `soal` → ikon perisai harus menandakan **RLS enabled**.

## 5. Ambil kredensial (untuk frontend nanti, Fase 5)
1. Sidebar → **Project Settings** → **API** (atau **API Keys**).
2. Catat dua hal:
   - **Project URL** → `https://xxxx.supabase.co`
   - **Publishable key** → diawali `sb_publishable_...`
     (Kalau project masih menampilkan key lama `anon` berformat JWT, cari tab/bagian
     **API Keys** versi baru; gunakan **publishable**, bukan `anon` legacy.)
3. Salin file `.env.example` di root menjadi `.env`, isi `SUPABASE_URL` & `SUPABASE_PUBLISHABLE_KEY`.
   (`.env` tidak di-commit; ini sekadar catatan. Wiring ke client dilakukan di Fase 5.)

> **JANGAN** salin **secret key** (`sb_secret_...`) ke mana pun di frontend.

## 6. (Opsional) Tes baca anonim
Di **Project Settings → API**, atau lewat browser console nanti, pastikan `select` pada `soal`
berhasil dengan publishable key. Ini yang membuktikan RLS read-only kita benar.
