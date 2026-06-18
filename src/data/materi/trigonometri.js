// ============================================================
// Materi statis: Trigonometri (topik #3)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "trigonometri",
  judul: "Trigonometri",
  urutan: 3,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "perbandingan-dasar-relasi",
      judul: "Perbandingan Dasar & Sudut Berelasi",
      konsep: [
        {
          tipe: "teks",
          isi: "Trigonometri berfokus pada hubungan antara sudut dan panjang sisi segitiga. Pada segitiga siku-siku dengan sudut $\\theta$, perbandingan dasarnya adalah:",
        },
        {
          tipe: "rumus",
          isi: "\\sin \\theta = \\frac{\\text{depan}}{\\text{miring}} \\qquad \\cos \\theta = \\frac{\\text{samping}}{\\text{miring}} \\qquad \\tan \\theta = \\frac{\\text{depan}}{\\text{samping}}"
        },
        {
          tipe: "rumus",
          isi: "\\csc \\theta = \\frac{1}{\\sin \\theta} \\qquad \\sec \\theta = \\frac{1}{\\cos \\theta} \\qquad \\cot \\theta = \\frac{1}{\\tan \\theta}"
        },
        {
          tipe: "teks",
          isi: "Nilai perbandingan sudut berelasi di keempat kuadran (lingkaran satuan):",
        },
        {
          tipe: "teks",
          isi: "- **Kuadran I** ($0^\\circ < \\theta < 90^\\circ$): Semua perbandingan bernilai **positif**.<br>- **Kuadran II** ($90^\\circ < \\theta < 180^\\circ$): Hanya $\\sin$ dan $\\csc$ yang bernilai **positif**.<br>- **Kuadran III** ($180^\\circ < \\theta < 270^\\circ$): Hanya $\\tan$ and $\\cot$ yang bernilai **positif**.<br>- **Kuadran IV** ($270^\\circ < \\theta < 360^\\circ$): Hanya $\\cos$ dan $\\sec$ yang bernilai **positif**."
        },
        {
          tipe: "teks",
          isi: "Rumus relasi sudut penting (menggunakan aturan genap/ganjil):",
        },
        {
          tipe: "rumus",
          isi: "\\sin(180^\\circ - x) = \\sin x \\qquad \\cos(180^\\circ - x) = -\\cos x \\qquad \\sin(90^\\circ - x) = \\cos x"
        },
        {
          tipe: "rumus",
          isi: "\\sin(-x) = -\\sin x \\qquad \\cos(-x) = \\cos x \\qquad \\tan(-x) = -\\tan x"
        },
        {
          tipe: "catatan",
          isi: "Ingat rumus praktis kuadran: **\"Semua SIn-TA COs\"** (Semua Positif di K-I, SInus di K-II, TAngen di K-III, COsinus di K-IV)."
        },
        {
          tipe: "contoh",
          isi: "Hitunglah nilai dari $\\cos 120^\\circ$.<br>Jawab: Sudut $120^\\circ$ berada di Kuadran II (nilai cosinus negatif).<br>$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\dfrac{1}{2}$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "identitas-rumus-sudut",
      judul: "Identitas & Rumus Jumlah/Selisih Sudut",
      konsep: [
        {
          tipe: "teks",
          isi: "**Identitas Trigonometri Dasar** yang diturunkan dari teorema Pythagoras:",
        },
        {
          tipe: "rumus",
          isi: "\\sin^2 x + \\cos^2 x = 1 \\qquad 1 + \\tan^2 x = \\sec^2 x \\qquad 1 + \\cot^2 x = \\csc^2 x"
        },
        {
          tipe: "teks",
          isi: "Rumus untuk **Jumlah dan Selisih Dua Sudut** ($A$ dan $B$):",
        },
        {
          tipe: "rumus",
          isi: "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B"
        },
        {
          tipe: "rumus",
          isi: "\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B"
        },
        {
          tipe: "rumus",
          isi: "\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}"
        },
        {
          tipe: "catatan",
          isi: "Perhatikan tanda operasi pada rumus kosinus: jika jumlah ($A+B$) maka pengurangannya negatif ($\\mp$), dan sebaliknya. Untuk rumus tangen, pastikan penyebut tidak bernilai nol."
        },
        {
          tipe: "contoh",
          isi: "Hitung nilai $\\sin 15^\\circ$ tanpa kalkulator.<br>Jawab: Gunakan selisih sudut $45^\\circ - 30^\\circ$:<br>$\\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ$<br>$= \\left(\\dfrac{1}{2}\\sqrt{2}\\right)\\left(\\dfrac{1}{2}\\sqrt{3}\\right) - \\left(\\dfrac{1}{2}\\sqrt{2}\\right)\\left(\\dfrac{1}{2}\right) = \\dfrac{1}{4}(\\sqrt{6} - \\sqrt{2})$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "sudut-ganda-perkalian",
      judul: "Rumus Sudut Ganda & Jumlah/Perkalian",
      konsep: [
        {
          tipe: "teks",
          isi: "Rumus **Sudut Ganda (Duplikasi)** diturunkan langsung dari rumus jumlah sudut dengan $A=B$:",
        },
        {
          tipe: "rumus",
          isi: "\\sin 2x = 2 \\sin x \\cos x"
        },
        {
          tipe: "rumus",
          isi: "\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x"
        },
        {
          tipe: "rumus",
          isi: "\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}"
        },
        {
          tipe: "teks",
          isi: "Rumus konversi **Perkalian ke Jumlah/Selisih** sinus dan kosinus:",
        },
        {
          tipe: "rumus",
          isi: "2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B) \\qquad 2\\cos A \\sin B = \\sin(A+B) - \\sin(A-B)"
        },
        {
          tipe: "rumus",
          isi: "2\\cos A \\cos B = \\cos(A+B) + \\cos(A-B) \\qquad -2\\sin A \\sin B = \\cos(A+B) - \\cos(A-B)"
        },
        {
          tipe: "teks",
          isi: "Rumus konversi **Jumlah/Selisih ke Perkalian** (kebalikannya):",
        },
        {
          tipe: "rumus",
          isi: "\\sin A + \\sin B = 2 \\sin\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right)"
        },
        {
          tipe: "rumus",
          isi: "\\cos A + \\cos B = 2 \\cos\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right)"
        },
        {
          tipe: "catatan",
          isi: "Rumus $\\cos 2x = 1 - 2\\sin^2 x$ sangat sering digunakan untuk menyederhanakan bentuk limit fungsi trigonometri atau mengintegralkan fungsi trigonometri kuadrat."
        },
        {
          tipe: "contoh",
          isi: "Jika $\\sin x = \\dfrac{3}{5}$ dengan $x$ sudut lancip, hitunglah $\\cos 2x$.<br>Jawab: Gunakan rumus $\\cos 2x = 1 - 2\\sin^2 x$:<br>$\\cos 2x = 1 - 2\\left(\\dfrac{3}{5}\\right)^2 = 1 - 2\\left(\\dfrac{9}{25}\\right) = 1 - \\dfrac{18}{25} = \\dfrac{7}{25}$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "persamaan-aturan-segitiga",
      judul: "Persamaan Trigonometri & Aturan Segitiga",
      konsep: [
        {
          tipe: "teks",
          isi: "Persamaan dasar trigonometri untuk mencari himpunan penyelesaian sudut (dengan konstanta integer $k \\in \\mathbb{Z}$):",
        },
        {
          tipe: "teks",
          isi: "1. **Sinus**: $\\sin x = \\sin \\alpha \\iff x = \\alpha + k \\cdot 360^\\circ$ atau $x = (180^\\circ - \\alpha) + k \\cdot 360^\\circ$.<br>2. **Kosinus**: $\\cos x = \\cos \\alpha \\iff x = \\pm \\alpha + k \\cdot 360^\\circ$.<br>3. **Tangen**: $\\tan x = \\tan \\alpha \\iff x = \\alpha + k \\cdot 180^\\circ$."
        },
        {
          tipe: "teks",
          isi: "Pada sembarang segitiga $ABC$ dengan sisi-sisi berhadapan $a, b, c$ berlaku aturan penting berikut:",
        },
        {
          tipe: "rumus",
          isi: "\\text{Aturan Sinus: } \\quad \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}"
        },
        {
          tipe: "rumus",
          isi: "\\text{Aturan Kosinus: } \\quad a^2 = b^2 + c^2 - 2bc \\cos A"
        },
        {
          tipe: "rumus",
          isi: "\\text{Luas Segitiga: } \\quad L = \\frac{1}{2} ab \\sin C"
        },
        {
          tipe: "catatan",
          isi: "Persamaan berbentuk $a\\cos x + b\\sin x = c$ dapat diselesaikan dengan mengubahnya menjadi bentuk $k\\cos(x-\\alpha) = c$, dengan syarat $c^2 \\le a^2 + b^2$ di mana $k = \\sqrt{a^2+b^2}$ dan $\\tan \\alpha = \\frac{b}{a}$."
        },
        {
          tipe: "contoh",
          isi: "Pada segitiga $ABC$ diketahui sisi $b = 4$, $c = 6$, dan sudut $A = 60^\\circ$. Tentukan panjang sisi $a$.<br>Jawab: Gunakan aturan kosinus:<br>$a^2 = b^2 + c^2 - 2bc \\cos A$<br>$a^2 = 4^2 + 6^2 - 2(4)(6) \\cos 60^\\circ$<br>$a^2 = 16 + 36 - 48\\left(\\dfrac{1}{2}\\right) = 52 - 24 = 28$. Jadi $a = \\sqrt{28} = 2\\sqrt{7}$."
        }
      ]
    }
  ]
};
