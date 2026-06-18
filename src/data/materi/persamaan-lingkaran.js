// ============================================================
// Materi statis: Persamaan Lingkaran (topik #10)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "persamaan-lingkaran",
  judul: "Persamaan Lingkaran",
  urutan: 10,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "persamaan-dasar-lingkaran",
      judul: "Persamaan Dasar Lingkaran",
      konsep: [
        {
          tipe: "teks",
          isi: "Lingkaran adalah himpunan semua titik yang memiliki jarak (jari-jari $r$) yang sama terhadap satu titik tertentu (pusat). Persamaan lingkaran ditentukan oleh letak pusatnya:",
        },
        {
          tipe: "teks",
          isi: "1. **Pusat di $(0,0)$ dan Jari-jari $r$**:"
        },
        {
          tipe: "rumus",
          isi: "x^2 + y^2 = r^2"
        },
        {
          tipe: "teks",
          isi: "2. **Pusat di $(a,b)$ dan Jari-jari $r$** (Bentuk Baku):"
        },
        {
          tipe: "rumus",
          isi: "(x - a)^2 + (y - b)^2 = r^2"
        },
        {
          tipe: "teks",
          isi: "3. **Bentuk Umum Persamaan Lingkaran**:"
        },
        {
          tipe: "rumus",
          isi: "x^2 + y^2 + Ax + By + C = 0"
        },
        {
          tipe: "teks",
          isi: "Dari bentuk umum ini, koordinat pusat $P(a, b)$ dan jari-jari $r$ dapat ditentukan dengan rumus:"
        },
        {
          tipe: "rumus",
          isi: "P(a,b) = \\left(-\\frac{A}{2}, -\\frac{B}{2}\\right) \\qquad r = \\sqrt{a^2 + b^2 - C} = \\sqrt{\\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 - C}"
        },
        {
          tipe: "catatan",
          isi: "Jika lingkaran menyinggung sumbu $x$, maka jari-jarinya adalah $r = |b|$. Jika lingkaran menyinggung sumbu $y$, maka jari-jarinya adalah $r = |a|$."
        },
        {
          tipe: "contoh",
          isi: "Tentukan pusat dan jari-jari dari persamaan lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$.<br>Jawab: $A=-4, B=6, C=-12$.<br>Pusat: $(a,b) = \\left(-\\dfrac{-4}{2}, -\\dfrac{6}{2}\\right) = (2, -3)$.<br>Jari-jari: $r = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "kedudukan-titik-garis",
      judul: "Kedudukan Titik & Garis terhadap Lingkaran",
      konsep: [
        {
          tipe: "teks",
          isi: "Analisis kedudukan titik dan garis membantu menentukan letak relatif mereka terhadap batas lingkaran.",
        },
        {
          tipe: "teks",
          isi: "1. **Kedudukan Titik $T(x_1, y_1)$** terhadap lingkaran $(x-a)^2 + (y-b)^2 = r^2$ ditentukan dengan menghitung nilai Kuasa Titik $K = (x_1-a)^2 + (y_1-b)^2$:<br>- Jika $K < r^2$, titik berada **di dalam** lingkaran.<br>- Jika $K = r^2$, titik berada **pada** (membentuk) lingkaran.<br>- Jika $K > r^2$, titik berada **di luar** lingkaran."
        },
        {
          tipe: "teks",
          isi: "2. **Kedudukan Garis $y = mx + n$** terhadap lingkaran:<br>Substitusikan persamaan garis ke persamaan lingkaran hingga terbentuk persamaan kuadrat satu variabel $ax^2 + bx + c = 0$. Hitung nilai Diskriminan ($D = b^2 - 4ac$):"
        },
        {
          tipe: "teks",
          isi: "- Jika $D > 0$, garis **memotong** lingkaran di dua titik berbeda.<br>- Jika $D = 0$, garis **menyinggung** lingkaran di satu titik (garis singgung).<br>- Jika $D < 0$, garis **tidak memotong maupun menyinggung** lingkaran."
        },
        {
          tipe: "catatan",
          isi: "Cara alternatif mencari kedudukan garis terhadap lingkaran adalah dengan membandingkan jari-jari $r$ dengan jarak pusat lingkaran $P$ ke garis tersebut ($d$):<br>- Memotong jika $d < r$.<br>- Menyinggung jika $d = r$.<br>- Lepas jika $d > r$."
        },
        {
          tipe: "contoh",
          isi: "Tentukan kedudukan titik $T(1, 2)$ terhadap lingkaran $x^2 + y^2 = 9$.<br>Jawab: Substitusi koordinat titik ke persamaan lingkaran (ruas kiri):<br>$K = 1^2 + 2^2 = 1 + 4 = 5$.<br>Bandingkan dengan jari-jari kuadrat ($r^2 = 9$). Karena $5 < 9$, maka titik $T$ berada di **dalam** lingkaran."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "garis-singgung-lingkaran",
      judul: "Persamaan Garis Singgung Lingkaran (PGSL)",
      konsep: [
        {
          tipe: "teks",
          isi: "Persamaan Garis Singgung Lingkaran (PGSL) dapat disusun berdasarkan kondisi informasi yang diberikan:",
        },
        {
          tipe: "teks",
          isi: "1. **PGSL Melalui Titik $T(x_1, y_1)$ pada Lingkaran** (Metode Bagi Adil):"
        },
        {
          tipe: "rumus",
          isi: "x^2 + y^2 = r^2 \\quad \\longrightarrow \\quad x_1x + y_1y = r^2"
        },
        {
          tipe: "rumus",
          isi: "(x - a)^2 + (y - b)^2 = r^2 \\quad \\longrightarrow \\quad (x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2"
        },
        {
          tipe: "rumus",
          isi: "x^2 + y^2 + Ax + By + C = 0 \\quad \\longrightarrow \\quad x_1x + y_1y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0"
        },
        {
          tipe: "teks",
          isi: "2. **PGSL dengan Gradien $m$**:"
        },
        {
          tipe: "rumus",
          isi: "\\text{Pusat } (0,0): \\quad y = mx \\pm r\\sqrt{m^2 + 1}"
        },
        {
          tipe: "rumus",
          isi: "\\text{Pusat } (a,b): \\quad y - b = m(x - a) \\pm r\\sqrt{m^2 + 1}"
        },
        {
          tipe: "catatan",
          isi: "Jika garis singgung tegak lurus dengan garis $y = px + q$, maka gradien garis singgungnya adalah $m = -\\frac{1}{p}$. Jika sejajar, gradiennya sama ($m = p$)."
        },
        {
          tipe: "contoh",
          isi: "Tentukan persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ di titik $(3, -4)$.<br>Jawab: Karena $3^2 + (-4)^2 = 25$, titik berada pada lingkaran. Gunakan bagi adil:<br>$x_1x + y_1y = r^2 \\Rightarrow 3x - 4y = 25$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "hubungan-dua-lingkaran",
      judul: "Hubungan Kedudukan Dua Lingkaran",
      konsep: [
        {
          tipe: "teks",
          isi: "Kedudukan dua lingkaran ditentukan dengan membandingkan jarak kedua pusat lingkaran $d = |P_1P_2|$ dengan jari-jari $R$ (lingkaran besar) dan $r$ (lingkaran kecil):",
        },
        {
          tipe: "teks",
          isi: "1. **Saling Lepas di Luar**: Jarak pusat lebih besar dari jumlah kedua jari-jari:"
        },
        {
          tipe: "rumus",
          isi: "d > R + r"
        },
        {
          tipe: "teks",
          isi: "2. **Bersentuhan di Luar** (Menyinggung Luar):"
        },
        {
          tipe: "rumus",
          isi: "d = R + r"
        },
        {
          tipe: "teks",
          isi: "3. **Memotong di Dua Titik**: Jarak kedua pusat berada di antara selisih dan jumlah jari-jari:"
        },
        {
          tipe: "rumus",
          isi: "R - r < d < R + r"
        },
        {
          tipe: "teks",
          isi: "4. **Bersentuhan di Dalam** (Menyinggung Dalam):"
        },
        {
          tipe: "rumus",
          isi: "d = R - r"
        },
        {
          tipe: "teks",
          isi: "5. **Saling Lepas di Dalam** (Satu di dalam yang lain, tidak konsentris):"
        },
        {
          tipe: "rumus",
          isi: "d < R - r"
        },
        {
          tipe: "catatan",
          isi: "Jika jarak kedua pusat lingkaran adalah nol ($d = 0$), maka kedua lingkaran tersebut disebut **Sepusat (Konsentris)**."
        },
        {
          tipe: "contoh",
          isi: "Dua lingkaran masing-masing memiliki persamaan $x^2 + y^2 = 4$ ($R=2$, pusat $(0,0)$) dan $(x-6)^2 + y^2 = 9$ ($r=3$, pusat $(6,0)$). Tentukan hubungan keduanya.<br>Jawab: Jarak kedua pusat $d = \\sqrt{(6-0)^2 + (0-0)^2} = 6$.<br>Bandingkan dengan jumlah jari-jari: $R + r = 2 + 3 = 5$.<br>Karena $d > R + r$ ($6 > 5$), kedua lingkaran tersebut **saling lepas di luar**."
        }
      ]
    }
  ]
};
