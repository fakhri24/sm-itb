// ============================================================
// Materi statis: Polinomial (topik #8)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "polinomial",
  judul: "Polinomial (Suku Banyak)",
  urutan: 8,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "operasi-kesamaan-polinomial",
      judul: "Definisi, Operasi, & Kesamaan Polinomial",
      konsep: [
        {
          tipe: "teks",
          isi: "Polinomial (suku banyak) adalah ekspresi aljabar berderajat $n$ yang memuat satu variabel dengan pangkat bulat non-negatif. Bentuk umumnya adalah:",
        },
        {
          tipe: "rumus",
          isi: "P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\qquad \\text{dengan } a_n \\neq 0"
        },
        {
          tipe: "teks",
          isi: "Di mana $n$ adalah **derajat** (pangkat tertinggi), $a_n$ koefisien utama, dan $a_0$ konstanta."
        },
        {
          tipe: "teks",
          isi: "Aturan derajat hasil operasi dua polinomial $P(x)$ berderajat $m$ dan $Q(x)$ berderajat $n$:<br>- **Penjumlahan/Pengurangan**: Derajat maksimal adalah $\\max(m, n)$.<br>- **Perkalian**: Derajatnya adalah $m + n$."
        },
        {
          tipe: "teks",
          isi: "**Kesamaan Polinomial (Identitas)**: Dua polinomial bernilai sama ($P(x) \\equiv Q(x)$) untuk semua nilai $x$ jika dan hanya jika koefisien dari suku-suku yang sejenis bernilai sama."
        },
        {
          tipe: "catatan",
          isi: "Kesamaan polinomial ditandai dengan notasi tiga garis sejajar $\\equiv$. Selesaikan dengan menjabarkan kedua ruas hingga formatnya sejenis, lalu samakan koefisiennya."
        },
        {
          tipe: "contoh",
          isi: "Jika $x^2 - 3x + 2 \\equiv (x-1)(ax+b)$, tentukan nilai $a$ dan $b$.<br>Jawab: Jabarkan ruas kanan:<br>$(x-1)(ax+b) = ax^2 + (b-a)x - b$.<br>Samakan koefisien kedua ruas:<br>- Koefisien $x^2$: $a = 1$.<br>- Konstanta: $-b = 2 \\Rightarrow b = -2$.<br>- Uji koefisien $x$: $b-a = -2-1 = -3$ (cocok)."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "pembagian-teorema-sisa",
      judul: "Pembagian Polinomial & Teorema Sisa",
      konsep: [
        {
          tipe: "teks",
          isi: "Hubungan dasar pembagian polinomial $P(x)$ oleh pembagi $H(x)$ yang menghasilkan hasil bagi $B(x)$ dan sisa $S(x)$ adalah:",
        },
        {
          tipe: "rumus",
          isi: "P(x) = H(x) \\cdot B(x) + S(x)"
        },
        {
          tipe: "teks",
          isi: "Derajat sisa pembagian $S(x)$ selalu **lebih kecil** daripada derajat pembagi $H(x)$. Jika derajat pembagi adalah $d$, maka derajat maksimal sisa adalah $d-1$."
        },
        {
          tipe: "teks",
          isi: "**Teorema Sisa**:<br>1. Jika $P(x)$ dibagi oleh $(x-k)$, maka sisanya adalah $S = P(k)$.<br>2. Jika $P(x)$ dibagi oleh $(ax-b)$, maka sisanya adalah $S = P\\left(\\frac{b}{a}\\right)$.<br>3. Jika $P(x)$ dibagi oleh $(x-a)(x-b)$, maka sisanya berbentuk $S(x) = px + q$, dengan sistem persamaan: $\\begin{cases} P(a) = pa + q \\\\ P(b) = pb + q \\end{cases}$."
        },
        {
          tipe: "teks",
          isi: "Pembagian secara sintetis dapat dihitung menggunakan **Metode Horner** untuk pembagi linear, dan dikembangkan menjadi **Horner Kino** jika pembaginya berderajat 2 atau lebih."
        },
        {
          tipe: "catatan",
          isi: "Jika membagi menggunakan metode Horner dengan pembagi berbentuk $(ax-b)$, hasil bagi yang diperoleh dari baris bawah Horner **wajib dibagi dengan $a$** untuk mendapatkan hasil bagi $B(x)$ yang sebenarnya."
        },
        {
          tipe: "contoh",
          isi: "Tentukan sisa pembagian $P(x) = x^3 - 2x^2 + 5x - 4$ oleh $(x-2)$.<br>Jawab: Berdasarkan Teorema Sisa, sisa pembagian adalah $P(2)$:<br>$S = P(2) = 2^3 - 2(2)^2 + 5(2) - 4$<br>$S = 8 - 8 + 10 - 4 = 6$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "teorema-faktor-vieta",
      judul: "Teorema Faktor & Teorema Vieta",
      konsep: [
        {
          tipe: "teks",
          isi: "**Teorema Faktor**: $(x-k)$ merupakan faktor dari polinomial $P(x)$ jika dan hanya jika sisa pembagiannya adalah nol ($P(k) = 0$).",
        },
        {
          tipe: "teks",
          isi: "Untuk mencari akar-akar persamaan $P(x) = 0$, cari calon akar dari faktor konstanta $a_0$ dibagi faktor koefisien utama $a_n$, lalu uji menggunakan skema Horner hingga sisa $=0$."
        },
        {
          tipe: "teks",
          isi: "**Teorema Vieta** menghubungkan akar-akar polinomial dengan koefisiennya:"
        },
        {
          tipe: "teks",
          isi: "1. Untuk persamaan derajat 3: $ax^3 + bx^2 + cx + d = 0$ dengan akar-akar $x_1, x_2, x_3$:"
        },
        {
          tipe: "rumus",
          isi: "x_1 + x_2 + x_3 = -\\frac{b}{a} \\qquad x_1x_2 + x_1x_3 + x_2x_3 = \\frac{c}{a} \\qquad x_1x_2x_3 = -\\frac{d}{a}"
        },
        {
          tipe: "teks",
          isi: "2. Untuk persamaan derajat 4: $ax^4 + bx^3 + cx^2 + dx + e = 0$ dengan akar-akar $x_1, x_2, x_3, x_4$:"
        },
        {
          tipe: "rumus",
          isi: "\\sum x_i = -\\frac{b}{a} \\qquad \\sum x_ix_j = \\frac{c}{a} \\qquad \\sum x_ix_jx_k = -\\frac{d}{a} \\qquad x_1x_2x_3x_4 = \\frac{e}{a}"
        },
        {
          tipe: "catatan",
          isi: "Tanda dari rumus Vieta selalu bergantian/berselang-seling dimulai dari negatif: $-\\frac{b}{a}$, lalu $+\\frac{c}{a}$, kemudian $-\\frac{d}{a}$, dan $+\\frac{e}{a}$."
        },
        {
          tipe: "contoh",
          isi: "Jika akar-akar persamaan $x^3 - 6x^2 + 11x - 6 = 0$ adalah $x_1, x_2$, dan $x_3$, hitunglah $x_1^2 + x_2^2 + x_3^2$.<br>Jawab: Sesuai rumus Vieta: $x_1+x_2+x_3 = -(-6)/1 = 6$ dan $x_1x_2+x_1x_3+x_2x_3 = 11/1 = 11$.<br>Gunakan manipulasi aljabar:<br>$x_1^2 + x_2^2 + x_3^2 = (x_1+x_2+x_3)^2 - 2(x_1x_2+x_1x_3+x_2x_3)$<br>$= (6)^2 - 2(11) = 36 - 22 = 14$."
        }
      ]
    }
  ]
};
