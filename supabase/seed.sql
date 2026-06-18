-- ============================================================
-- SM-ITB Matematika — Seed soal: Eksponen & Logaritma
-- Jalankan SETELAH schema.sql. Aman dijalankan ulang (hapus dulu lalu isi).
-- Rumus pakai delimiter KaTeX $...$. Backslash ditulis tunggal (\frac),
-- jsonb_build_* yang meng-encode ke JSON dengan benar.
--
-- Pilihan ganda: 5 opsi (A–E).
--
-- KONTRAK sub_materi_id (harus sama dgn file src/data/materi/eksponen-logaritma.js):
--   bentuk-pangkat | bentuk-akar | persamaan-eksponen
--   definisi-logaritma | sifat-logaritma | persamaan-logaritma
-- ============================================================

-- Idempotent: bersihkan soal topik ini dulu agar tidak dobel saat seed ulang.
delete from public.soal where materi_id = 'eksponen-logaritma';

insert into public.soal (materi_id, sub_materi_id, pertanyaan, pilihan, jawaban, pembahasan, tingkat) values

-- ---------- 1. Bentuk pangkat ----------
('eksponen-logaritma', 'bentuk-pangkat',
 'Nilai dari $2^{-3}$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$-8$'),
   jsonb_build_object('key','B','teks','$-6$'),
   jsonb_build_object('key','C','teks','$\frac{1}{8}$'),
   jsonb_build_object('key','D','teks','$\frac{1}{6}$'),
   jsonb_build_object('key','E','teks','$8$')
 ),
 'C',
 'Karena $a^{-n}=\frac{1}{a^n}$, maka $2^{-3}=\frac{1}{2^3}=\frac{1}{8}$.',
 'mudah'),

('eksponen-logaritma', 'bentuk-pangkat',
 'Bentuk sederhana dari $\dfrac{a^5 \cdot a^3}{a^2}$ dengan $a\neq 0$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$a^6$'),
   jsonb_build_object('key','B','teks','$a^4$'),
   jsonb_build_object('key','C','teks','$a^{10}$'),
   jsonb_build_object('key','D','teks','$a^{16}$'),
   jsonb_build_object('key','E','teks','$a^{2}$')
 ),
 'A',
 'Gunakan $a^m\cdot a^n=a^{m+n}$ lalu $\dfrac{a^m}{a^n}=a^{m-n}$: $\dfrac{a^{5+3}}{a^2}=a^{8-2}=a^6$.',
 'sedang'),

-- ---------- 2. Bentuk akar & pangkat pecahan ----------
('eksponen-logaritma', 'bentuk-akar',
 'Bentuk $\sqrt[3]{a^2}$ setara dengan ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$a^{3/2}$'),
   jsonb_build_object('key','B','teks','$a^{2/3}$'),
   jsonb_build_object('key','C','teks','$a^{6}$'),
   jsonb_build_object('key','D','teks','$a^{1/6}$'),
   jsonb_build_object('key','E','teks','$a^{1/3}$')
 ),
 'B',
 'Gunakan $\sqrt[n]{a^m}=a^{m/n}$, sehingga $\sqrt[3]{a^2}=a^{2/3}$.',
 'sedang'),

('eksponen-logaritma', 'bentuk-akar',
 'Hasil merasionalkan penyebut dari $\dfrac{6}{\sqrt{3}}$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$2\sqrt{3}$'),
   jsonb_build_object('key','B','teks','$6\sqrt{3}$'),
   jsonb_build_object('key','C','teks','$3\sqrt{3}$'),
   jsonb_build_object('key','D','teks','$\frac{\sqrt{3}}{2}$'),
   jsonb_build_object('key','E','teks','$\sqrt{3}$')
 ),
 'A',
 'Kalikan dengan $\dfrac{\sqrt{3}}{\sqrt{3}}$: $\dfrac{6}{\sqrt{3}}\cdot\dfrac{\sqrt{3}}{\sqrt{3}}=\dfrac{6\sqrt{3}}{3}=2\sqrt{3}$.',
 'sedang'),

-- ---------- 3. Persamaan & pertidaksamaan eksponen ----------
('eksponen-logaritma', 'persamaan-eksponen',
 'Nilai $x$ yang memenuhi $2^{x+1}=8$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$1$'),
   jsonb_build_object('key','B','teks','$2$'),
   jsonb_build_object('key','C','teks','$3$'),
   jsonb_build_object('key','D','teks','$4$'),
   jsonb_build_object('key','E','teks','$0$')
 ),
 'B',
 'Samakan basis: $8=2^3$, sehingga $x+1=3 \Rightarrow x=2$.',
 'sedang'),

('eksponen-logaritma', 'persamaan-eksponen',
 'Himpunan penyelesaian dari $3^{2x-1} > 27$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$x>2$'),
   jsonb_build_object('key','B','teks','$x>1$'),
   jsonb_build_object('key','C','teks','$x<2$'),
   jsonb_build_object('key','D','teks','$x>\frac{3}{2}$'),
   jsonb_build_object('key','E','teks','$x>3$')
 ),
 'A',
 'Karena $27=3^3$ dan basis $3>1$ (fungsi naik), arah tanda tetap: $2x-1>3 \Rightarrow x>2$.',
 'sulit'),

-- ---------- 4. Definisi logaritma ----------
('eksponen-logaritma', 'definisi-logaritma',
 'Nilai dari $\log_2 8$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$2$'),
   jsonb_build_object('key','B','teks','$3$'),
   jsonb_build_object('key','C','teks','$4$'),
   jsonb_build_object('key','D','teks','$\frac{1}{3}$'),
   jsonb_build_object('key','E','teks','$8$')
 ),
 'B',
 'Definisi: $\log_a b = x \iff a^x=b$. Karena $2^3=8$, maka $\log_2 8 = 3$.',
 'mudah'),

('eksponen-logaritma', 'definisi-logaritma',
 'Jika $\log_5 x = 3$, maka nilai $x$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$15$'),
   jsonb_build_object('key','B','teks','$25$'),
   jsonb_build_object('key','C','teks','$125$'),
   jsonb_build_object('key','D','teks','$8$'),
   jsonb_build_object('key','E','teks','$243$')
 ),
 'C',
 'Dari definisi $\log_5 x = 3 \iff x = 5^3 = 125$.',
 'sedang'),

-- ---------- 5. Sifat logaritma ----------
('eksponen-logaritma', 'sifat-logaritma',
 'Nilai dari $\log_2 4 + \log_2 8$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$5$'),
   jsonb_build_object('key','B','teks','$6$'),
   jsonb_build_object('key','C','teks','$32$'),
   jsonb_build_object('key','D','teks','$12$'),
   jsonb_build_object('key','E','teks','$7$')
 ),
 'A',
 'Gunakan $\log_a x + \log_a y = \log_a(xy)$: $\log_2(4\cdot 8)=\log_2 32 = 5$.',
 'sedang'),

('eksponen-logaritma', 'sifat-logaritma',
 'Nilai dari $\dfrac{\log 8}{\log 2}$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$2$'),
   jsonb_build_object('key','B','teks','$3$'),
   jsonb_build_object('key','C','teks','$4$'),
   jsonb_build_object('key','D','teks','$\log 4$'),
   jsonb_build_object('key','E','teks','$\log 6$')
 ),
 'B',
 'Sifat ganti basis: $\dfrac{\log_c b}{\log_c a}=\log_a b$. Maka $\dfrac{\log 8}{\log 2}=\log_2 8 = 3$.',
 'sedang'),

-- ---------- 6. Persamaan & pertidaksamaan logaritma ----------
('eksponen-logaritma', 'persamaan-logaritma',
 'Penyelesaian dari $\log_3 (2x-1) = 2$ adalah ...',
 jsonb_build_array(
   jsonb_build_object('key','A','teks','$4$'),
   jsonb_build_object('key','B','teks','$5$'),
   jsonb_build_object('key','C','teks','$9$'),
   jsonb_build_object('key','D','teks','$\frac{9}{2}$'),
   jsonb_build_object('key','E','teks','$3$')
 ),
 'B',
 'Syarat numerus $2x-1>0$. Dari $\log_3(2x-1)=2 \iff 2x-1=3^2=9 \Rightarrow x=5$ (memenuhi syarat).',
 'sedang');
