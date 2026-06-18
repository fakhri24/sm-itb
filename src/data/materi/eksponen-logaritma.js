// ============================================================
// Materi statis: Eksponen dan Logaritma (topik #12)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
//     tipe:
//       "teks"    -> paragraf; boleh berisi rumus inline KaTeX dgn delimiter $...$
//       "rumus"   -> rumus display (satu baris tengah); isi = LaTeX MENTAH (tanpa $)
//       "catatan" -> kotak catatan/peringatan; boleh inline $...$
//       "contoh"  -> contoh soal singkat + penyelesaian; boleh inline $...$
//
// PENTING: `id` sub-materi WAJIB sama dengan `sub_materi_id` di tabel `soal`.
//   bentuk-pangkat | bentuk-akar | persamaan-eksponen
//   definisi-logaritma | sifat-logaritma | persamaan-logaritma
// ============================================================

export default {
  id: "eksponen-logaritma",
  judul: "Eksponen dan Logaritma",
  urutan: 12,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "bentuk-pangkat",
      judul: "Bentuk Pangkat (Eksponen)",
      konsep: [
        {
          tipe: "teks",
          isi: "Pangkat (eksponen) adalah perkalian berulang sebuah bilangan pokok (basis) $a$ sebanyak $n$ kali.",
        },
        { tipe: "rumus", isi: "a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ faktor}}" },
        {
          tipe: "teks",
          isi: "Untuk $a \\neq 0$ berlaku pangkat nol dan pangkat bulat negatif:",
        },
        { tipe: "rumus", isi: "a^0 = 1 \\qquad a^{-n} = \\frac{1}{a^n}" },
        {
          tipe: "teks",
          isi: "Sifat-sifat operasi pangkat (untuk basis yang valid):",
        },
        { tipe: "rumus", isi: "a^m \\cdot a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n}" },
        { tipe: "rumus", isi: "(a^m)^n = a^{mn} \\qquad (ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}" },
        {
          tipe: "catatan",
          isi: "Pangkat negatif dan nol hanya terdefinisi untuk $a \\neq 0$. Jangan tertukar: $-a^2 = -(a^2)$, sedangkan $(-a)^2 = a^2$.",
        },
        {
          tipe: "contoh",
          isi: "$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$, dan $\\dfrac{a^5 \\cdot a^3}{a^2} = a^{5+3-2} = a^6$.",
        },
      ],
    },
    // ---------------------------------------------------------
    {
      id: "bentuk-akar",
      judul: "Bentuk Akar & Pangkat Pecahan",
      konsep: [
        {
          tipe: "teks",
          isi: "Akar adalah pangkat berbentuk pecahan. Penyebut pecahan menjadi indeks akar, pembilang menjadi pangkat numerus.",
        },
        { tipe: "rumus", isi: "a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m" },
        {
          tipe: "teks",
          isi: "Merasionalkan penyebut: menghilangkan bentuk akar di penyebut dengan mengalikan bentuk sekawan.",
        },
        { tipe: "rumus", isi: "\\frac{c}{\\sqrt{a}} = \\frac{c}{\\sqrt{a}} \\cdot \\frac{\\sqrt{a}}{\\sqrt{a}} = \\frac{c\\sqrt{a}}{a}" },
        { tipe: "rumus", isi: "\\frac{c}{\\sqrt{a} + \\sqrt{b}} \\cdot \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{c(\\sqrt{a} - \\sqrt{b})}{a - b}" },
        {
          tipe: "catatan",
          isi: "Untuk penyebut berbentuk $\\sqrt{a} \\pm \\sqrt{b}$, kalikan dengan sekawannya ($\\sqrt{a} \\mp \\sqrt{b}$) agar memanfaatkan $(x+y)(x-y)=x^2-y^2$.",
        },
        {
          tipe: "contoh",
          isi: "$\\sqrt[3]{a^2} = a^{2/3}$, dan $\\dfrac{6}{\\sqrt{3}} = \\dfrac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.",
        },
      ],
    },
    // ---------------------------------------------------------
    {
      id: "persamaan-eksponen",
      judul: "Persamaan & Pertidaksamaan Eksponen",
      konsep: [
        {
          tipe: "teks",
          isi: "Jika basis kedua ruas sama (dengan $a > 0,\\ a \\neq 1$), maka eksponennya dapat disamakan.",
        },
        { tipe: "rumus", isi: "a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)" },
        {
          tipe: "teks",
          isi: "Pada pertidaksamaan, arah tanda bergantung pada nilai basis:",
        },
        { tipe: "rumus", isi: "a > 1:\\quad a^{f(x)} > a^{g(x)} \\iff f(x) > g(x)" },
        { tipe: "rumus", isi: "0 < a < 1:\\quad a^{f(x)} > a^{g(x)} \\iff f(x) < g(x)" },
        {
          tipe: "catatan",
          isi: "Basis $0 < a < 1$ membuat fungsi turun, sehingga arah tanda pertidaksamaan DIBALIK. Ini jebakan paling sering.",
        },
        {
          tipe: "contoh",
          isi: "$2^{x+1} = 8 = 2^3 \\Rightarrow x+1 = 3 \\Rightarrow x = 2$. Untuk $3^{2x-1} > 27 = 3^3$ (basis $>1$): $2x-1 > 3 \\Rightarrow x > 2$.",
        },
      ],
    },
    // ---------------------------------------------------------
    {
      id: "definisi-logaritma",
      judul: "Definisi Logaritma",
      konsep: [
        {
          tipe: "teks",
          isi: "Logaritma adalah operasi kebalikan (invers) dari perpangkatan: menjawab \"pangkat berapa\".",
        },
        { tipe: "rumus", isi: "\\log_a b = x \\iff a^x = b" },
        {
          tipe: "teks",
          isi: "Syarat: basis $a > 0,\\ a \\neq 1$, dan numerus $b > 0$.",
        },
        {
          tipe: "teks",
          isi: "Nilai-nilai dasar yang langsung dari definisi:",
        },
        { tipe: "rumus", isi: "\\log_a 1 = 0 \\qquad \\log_a a = 1 \\qquad \\log_a a^n = n \\qquad a^{\\log_a b} = b" },
        {
          tipe: "catatan",
          isi: "Numerus harus positif: $\\log_a b$ tidak terdefinisi untuk $b \\le 0$. Selalu cek syarat ini pada soal.",
        },
        {
          tipe: "contoh",
          isi: "$\\log_2 8 = 3$ karena $2^3 = 8$. Jika $\\log_5 x = 3$ maka $x = 5^3 = 125$.",
        },
      ],
    },
    // ---------------------------------------------------------
    {
      id: "sifat-logaritma",
      judul: "Sifat-sifat Logaritma",
      konsep: [
        {
          tipe: "teks",
          isi: "Sifat operasi (untuk basis valid dan numerus positif):",
        },
        { tipe: "rumus", isi: "\\log_a(xy) = \\log_a x + \\log_a y" },
        { tipe: "rumus", isi: "\\log_a\\frac{x}{y} = \\log_a x - \\log_a y" },
        { tipe: "rumus", isi: "\\log_a x^n = n \\log_a x" },
        {
          tipe: "teks",
          isi: "Mengubah basis logaritma (ganti basis ke $c$ apa pun):",
        },
        { tipe: "rumus", isi: "\\log_a b = \\frac{\\log_c b}{\\log_c a} \\qquad \\log_a b = \\frac{1}{\\log_b a}" },
        { tipe: "rumus", isi: "\\log_a b \\cdot \\log_b c = \\log_a c" },
        {
          tipe: "catatan",
          isi: "Sifat $\\log_a x^n = n\\log_a x$ hanya untuk pangkat pada numerus. Pangkat pada basis berbeda: $\\log_{a^n} b = \\frac{1}{n}\\log_a b$.",
        },
        {
          tipe: "contoh",
          isi: "$\\log_2 4 + \\log_2 8 = \\log_2 32 = 5$, dan $\\dfrac{\\log 8}{\\log 2} = \\log_2 8 = 3$.",
        },
      ],
    },
    // ---------------------------------------------------------
    {
      id: "persamaan-logaritma",
      judul: "Persamaan & Pertidaksamaan Logaritma",
      konsep: [
        {
          tipe: "teks",
          isi: "Jika basis sama, numerus dapat disamakan — DENGAN syarat semua numerus positif.",
        },
        { tipe: "rumus", isi: "\\log_a f(x) = \\log_a g(x) \\iff f(x) = g(x), \\quad f(x), g(x) > 0" },
        {
          tipe: "teks",
          isi: "Pada pertidaksamaan, arah tanda bergantung basis (sama seperti eksponen):",
        },
        { tipe: "rumus", isi: "a > 1:\\quad \\log_a f(x) > \\log_a g(x) \\iff f(x) > g(x) > 0" },
        { tipe: "rumus", isi: "0 < a < 1:\\quad \\log_a f(x) > \\log_a g(x) \\iff 0 < f(x) < g(x)" },
        {
          tipe: "catatan",
          isi: "Selalu uji syarat numerus ($>0$) di akhir; solusi yang melanggar syarat harus dibuang.",
        },
        {
          tipe: "contoh",
          isi: "$\\log_3(2x-1) = 2 \\Rightarrow 2x-1 = 3^2 = 9 \\Rightarrow x = 5$ (numerus $2x-1 = 9 > 0$, memenuhi).",
        },
      ],
    },
  ],
};
