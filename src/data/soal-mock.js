// ============================================================
// Data MOCK soal — bentuknya SAMA PERSIS dengan baris tabel `soal` di Supabase.
// Dipakai di Fase 4 supaya logika latihan matang tanpa koneksi DB.
// Di Fase 5 sumber ini diganti fetch Supabase (lewat lib/soal.js), logika tak berubah.
//
// Catatan escaping: ini file JS, jadi setiap backslash LaTeX ditulis GANDA (\\frac).
// ============================================================

export const soalMock = [
  // ---------- bentuk-pangkat ----------
  {
    id: "mock-1", materi_id: "eksponen-logaritma", sub_materi_id: "bentuk-pangkat",
    pertanyaan: "Nilai dari $2^{-3}$ adalah ...",
    pilihan: [
      { key: "A", teks: "$-8$" }, { key: "B", teks: "$-6$" },
      { key: "C", teks: "$\\frac{1}{8}$" }, { key: "D", teks: "$\\frac{1}{6}$" },
      { key: "E", teks: "$8$" },
    ],
    jawaban: "C",
    pembahasan: "Karena $a^{-n}=\\frac{1}{a^n}$, maka $2^{-3}=\\frac{1}{2^3}=\\frac{1}{8}$.",
    tingkat: "mudah",
  },
  {
    id: "mock-2", materi_id: "eksponen-logaritma", sub_materi_id: "bentuk-pangkat",
    pertanyaan: "Bentuk sederhana dari $\\dfrac{a^5 \\cdot a^3}{a^2}$ dengan $a\\neq 0$ adalah ...",
    pilihan: [
      { key: "A", teks: "$a^6$" }, { key: "B", teks: "$a^4$" },
      { key: "C", teks: "$a^{10}$" }, { key: "D", teks: "$a^{16}$" },
      { key: "E", teks: "$a^{2}$" },
    ],
    jawaban: "A",
    pembahasan: "Gunakan $a^m\\cdot a^n=a^{m+n}$ lalu $\\dfrac{a^m}{a^n}=a^{m-n}$: $\\dfrac{a^{5+3}}{a^2}=a^{8-2}=a^6$.",
    tingkat: "sedang",
  },

  // ---------- bentuk-akar ----------
  {
    id: "mock-3", materi_id: "eksponen-logaritma", sub_materi_id: "bentuk-akar",
    pertanyaan: "Bentuk $\\sqrt[3]{a^2}$ setara dengan ...",
    pilihan: [
      { key: "A", teks: "$a^{3/2}$" }, { key: "B", teks: "$a^{2/3}$" },
      { key: "C", teks: "$a^{6}$" }, { key: "D", teks: "$a^{1/6}$" },
      { key: "E", teks: "$a^{1/3}$" },
    ],
    jawaban: "B",
    pembahasan: "Gunakan $\\sqrt[n]{a^m}=a^{m/n}$, sehingga $\\sqrt[3]{a^2}=a^{2/3}$.",
    tingkat: "sedang",
  },
  {
    id: "mock-4", materi_id: "eksponen-logaritma", sub_materi_id: "bentuk-akar",
    pertanyaan: "Hasil merasionalkan penyebut dari $\\dfrac{6}{\\sqrt{3}}$ adalah ...",
    pilihan: [
      { key: "A", teks: "$2\\sqrt{3}$" }, { key: "B", teks: "$6\\sqrt{3}$" },
      { key: "C", teks: "$3\\sqrt{3}$" }, { key: "D", teks: "$\\frac{\\sqrt{3}}{2}$" },
      { key: "E", teks: "$\\sqrt{3}$" },
    ],
    jawaban: "A",
    pembahasan: "Kalikan dengan $\\dfrac{\\sqrt{3}}{\\sqrt{3}}$: $\\dfrac{6}{\\sqrt{3}}\\cdot\\dfrac{\\sqrt{3}}{\\sqrt{3}}=\\dfrac{6\\sqrt{3}}{3}=2\\sqrt{3}$.",
    tingkat: "sedang",
  },

  // ---------- persamaan-eksponen ----------
  {
    id: "mock-5", materi_id: "eksponen-logaritma", sub_materi_id: "persamaan-eksponen",
    pertanyaan: "Nilai $x$ yang memenuhi $2^{x+1}=8$ adalah ...",
    pilihan: [
      { key: "A", teks: "$1$" }, { key: "B", teks: "$2$" },
      { key: "C", teks: "$3$" }, { key: "D", teks: "$4$" }, { key: "E", teks: "$0$" },
    ],
    jawaban: "B",
    pembahasan: "Samakan basis: $8=2^3$, sehingga $x+1=3 \\Rightarrow x=2$.",
    tingkat: "sedang",
  },
  {
    id: "mock-6", materi_id: "eksponen-logaritma", sub_materi_id: "persamaan-eksponen",
    pertanyaan: "Himpunan penyelesaian dari $3^{2x-1} > 27$ adalah ...",
    pilihan: [
      { key: "A", teks: "$x > 2$" }, { key: "B", teks: "$x > 1$" },
      { key: "C", teks: "$x < 2$" }, { key: "D", teks: "$x > \\frac{3}{2}$" },
      { key: "E", teks: "$x > 3$" },
    ],
    jawaban: "A",
    pembahasan: "Karena $27=3^3$ dan basis $3 > 1$ (fungsi naik), arah tanda tetap: $2x-1 > 3 \\Rightarrow x > 2$.",
    tingkat: "sulit",
  },

  // ---------- definisi-logaritma ----------
  {
    id: "mock-7", materi_id: "eksponen-logaritma", sub_materi_id: "definisi-logaritma",
    pertanyaan: "Nilai dari $\\log_2 8$ adalah ...",
    pilihan: [
      { key: "A", teks: "$2$" }, { key: "B", teks: "$3$" },
      { key: "C", teks: "$4$" }, { key: "D", teks: "$\\frac{1}{3}$" }, { key: "E", teks: "$8$" },
    ],
    jawaban: "B",
    pembahasan: "Definisi: $\\log_a b = x \\iff a^x=b$. Karena $2^3=8$, maka $\\log_2 8 = 3$.",
    tingkat: "mudah",
  },
  {
    id: "mock-8", materi_id: "eksponen-logaritma", sub_materi_id: "definisi-logaritma",
    pertanyaan: "Jika $\\log_5 x = 3$, maka nilai $x$ adalah ...",
    pilihan: [
      { key: "A", teks: "$15$" }, { key: "B", teks: "$25$" },
      { key: "C", teks: "$125$" }, { key: "D", teks: "$8$" }, { key: "E", teks: "$243$" },
    ],
    jawaban: "C",
    pembahasan: "Dari definisi $\\log_5 x = 3 \\iff x = 5^3 = 125$.",
    tingkat: "sedang",
  },

  // ---------- sifat-logaritma ----------
  {
    id: "mock-9", materi_id: "eksponen-logaritma", sub_materi_id: "sifat-logaritma",
    pertanyaan: "Nilai dari $\\log_2 4 + \\log_2 8$ adalah ...",
    pilihan: [
      { key: "A", teks: "$5$" }, { key: "B", teks: "$6$" },
      { key: "C", teks: "$32$" }, { key: "D", teks: "$12$" }, { key: "E", teks: "$7$" },
    ],
    jawaban: "A",
    pembahasan: "Gunakan $\\log_a x + \\log_a y = \\log_a(xy)$: $\\log_2(4\\cdot 8)=\\log_2 32 = 5$.",
    tingkat: "sedang",
  },
  {
    id: "mock-10", materi_id: "eksponen-logaritma", sub_materi_id: "sifat-logaritma",
    pertanyaan: "Nilai dari $\\dfrac{\\log 8}{\\log 2}$ adalah ...",
    pilihan: [
      { key: "A", teks: "$2$" }, { key: "B", teks: "$3$" },
      { key: "C", teks: "$4$" }, { key: "D", teks: "$\\log 4$" }, { key: "E", teks: "$\\log 6$" },
    ],
    jawaban: "B",
    pembahasan: "Sifat ganti basis: $\\dfrac{\\log_c b}{\\log_c a}=\\log_a b$. Maka $\\dfrac{\\log 8}{\\log 2}=\\log_2 8 = 3$.",
    tingkat: "sedang",
  },

  // ---------- persamaan-logaritma ----------
  {
    id: "mock-11", materi_id: "eksponen-logaritma", sub_materi_id: "persamaan-logaritma",
    pertanyaan: "Penyelesaian dari $\\log_3 (2x-1) = 2$ adalah ...",
    pilihan: [
      { key: "A", teks: "$4$" }, { key: "B", teks: "$5$" },
      { key: "C", teks: "$9$" }, { key: "D", teks: "$\\frac{9}{2}$" }, { key: "E", teks: "$3$" },
    ],
    jawaban: "B",
    pembahasan: "Syarat numerus $2x-1 > 0$. Dari $\\log_3(2x-1)=2 \\iff 2x-1=3^2=9 \\Rightarrow x=5$ (memenuhi syarat).",
    tingkat: "sedang",
  },
];
