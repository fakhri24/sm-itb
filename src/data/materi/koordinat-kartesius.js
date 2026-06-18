// ============================================================
// Materi statis: Sistem Koordinat Kartesius (topik #6)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "koordinat-kartesius",
  judul: "Sistem Koordinat Kartesius",
  urutan: 6,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "titik-jarak-kartesius",
      judul: "Titik & Jarak dalam Koordinat Kartesius",
      konsep: [
        {
          tipe: "teks",
          isi: "Sistem koordinat Kartesius menentukan letak suatu titik pada bidang menggunakan pasangan bilangan $(x, y)$. Bidang Kartesius terbagi menjadi empat kuadran.",
        },
        {
          tipe: "teks",
          isi: "1. **Jarak Dua Titik**: Jarak terpendek antara titik $A(x_1, y_1)$ dan $B(x_2, y_2)$ diturunkan dari teorema Pythagoras:"
        },
        {
          tipe: "rumus",
          isi: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
        },
        {
          tipe: "teks",
          isi: "2. **Titik Tengah (Midpoint)**: Titik tengah $M$ dari segmen garis yang menghubungkan titik $A$ dan $B$:"
        },
        {
          tipe: "rumus",
          isi: "M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)"
        },
        {
          tipe: "teks",
          isi: "3. **Titik Pembagi Segmen Garis**: Titik $P(x_p, y_p)$ yang membagi ruas garis $AB$ dengan perbandingan $AP : PB = m : n$:"
        },
        {
          tipe: "rumus",
          isi: "x_p = \\frac{m x_2 + n x_1}{m+n} \\qquad y_p = \\frac{m y_2 + n y_1}{m+n}"
        },
        {
          tipe: "catatan",
          isi: "Perhatikan arah perbandingan segmen garis. Jika titik $P$ membagi di luar ruas garis $AB$, salah satu nilai perbandingan ($m$ atau $n$) bernilai negatif."
        },
        {
          tipe: "contoh",
          isi: "Tentukan jarak antara titik $A(2, -1)$ dan $B(5, 3)$.<br>Jawab: Gunakan rumus jarak dua titik:<br>$d = \\sqrt{(5 - 2)^2 + (3 - (-1))^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "garis-gradien",
      judul: "Garis Lurus & Gradien",
      konsep: [
        {
          tipe: "teks",
          isi: "**Gradien (kemiringan)** garis $m$ menyatakan tingkat kecuraman garis. Gradien yang melalui titik $(x_1, y_1)$ dan $(x_2, y_2)$ adalah:",
        },
        {
          tipe: "rumus",
          isi: "m = \\frac{y_2 - y_1}{x_2 - x_1} \\qquad \\text{atau } m = \\tan \\theta \\text{ (}\\theta \\text{ sudut terhadap sumbu } x\\text{ positif)}"
        },
        {
          tipe: "teks",
          isi: "Bentuk persamaan garis lurus:<br>1. **Bentuk Kemiringan-Titik**: Melalui $(x_1, y_1)$ dengan gradien $m$: $y - y_1 = m(x - x_1)$.<br>2. **Bentuk Gradien-Intercept**: $y = mx + c$.<br>3. **Bentuk Umum**: $Ax + By + C = 0$ (memiliki gradien $m = -\\frac{A}{B}$)."
        },
        {
          tipe: "teks",
          isi: "Kedudukan hubungan antara dua garis $g_1$ (gradien $m_1$) dan $g_2$ (gradien $m_2$):"
        },
        {
          tipe: "rumus",
          isi: "\\text{Sejajar: } m_1 = m_2 \\qquad \\text{Tegak Lurus: } m_1 \\cdot m_2 = -1"
        },
        {
          tipe: "catatan",
          isi: "Jika dua garis sejajar, koefisien variabel $x$ dan $y$ pada persamaan bentuk umumnya dapat dibuat sama (misal $Ax + By + C_1 = 0$ dan $Ax + By + C_2 = 0$)."
        },
        {
          tipe: "contoh",
          isi: "Tentukan persamaan garis yang melalui titik $(1, 3)$ dan tegak lurus dengan garis $2x - y + 4 = 0$.<br>Jawab:<br>- Gradien garis asal: $2x - y + 4 = 0 \\Rightarrow y = 2x + 4 \\Rightarrow m_1 = 2$.<br>- Gradien garis tegak lurus: $m_2 = -\\dfrac{1}{m_1} = -\\dfrac{1}{2}$.<br>- Persamaan garis baru: $y - 3 = -\\dfrac{1}{2}(x - 1) \\Rightarrow 2y - 6 = -x + 1 \\Rightarrow x + 2y - 7 = 0$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "jarak-titik-garis",
      judul: "Jarak Titik ke Garis & Garis Sejajar",
      konsep: [
        {
          tipe: "teks",
          isi: "Jarak antara elemen geometri diukur menggunakan garis proyeksi terpendek (tegak lurus).",
        },
        {
          tipe: "teks",
          isi: "1. **Jarak Titik ke Garis**: Jarak tegak lurus dari titik $P(x_1, y_1)$ ke garis dengan persamaan umum $Ax + By + C = 0$:"
        },
        {
          tipe: "rumus",
          isi: "d = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}"
        },
        {
          tipe: "teks",
          isi: "2. **Jarak Dua Garis Sejajar**: Jarak antara dua garis sejajar $g_1 \\equiv Ax + By + C_1 = 0$ dan $g_2 \\equiv Ax + By + C_2 = 0$:"
        },
        {
          tipe: "rumus",
          isi: "d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}"
        },
        {
          tipe: "catatan",
          isi: "Tanda mutlak $|\\dots|$ sangat penting karena jarak secara fisik selalu bernilai positif."
        },
        {
          tipe: "contoh",
          isi: "Hitunglah jarak dari titik $(2, 3)$ ke garis $3x - 4y + 1 = 0$.<br>Jawab: $A=3, B=-4, C=1$, dan titik $(x_1, y_1) = (2, 3)$.<br>$d = \\dfrac{|3(2) - 4(3) + 1|}{\\sqrt{3^2 + (-4)^2}} = \\dfrac{|6 - 12 + 1|}{\\sqrt{25}} = \\dfrac{|-5|}{5} = 1$ satuan."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "transformasi-koordinat",
      judul: "Transformasi Geometri Dasar",
      konsep: [
        {
          tipe: "teks",
          isi: "Transformasi geometri memetakan koordinat titik asal $(x, y)$ ke koordinat bayangan $(x', y')$.",
        },
        {
          tipe: "teks",
          isi: "1. **Translasi (Pergeseran)** oleh vektor $T\\begin{pmatrix} a \\\\ b \\end{pmatrix}$:"
        },
        {
          tipe: "rumus",
          isi: "(x', y') = (x + a, y + b)"
        },
        {
          tipe: "teks",
          isi: "2. **Refleksi (Pencerminan)** terhadap sumbu/garis tertentu:<br>- Terhadap sumbu $x$: $(x, -y)$<br>- Terhadap sumbu $y$: $(-x, y)$<br>- Terhadap garis $y = x$: $(y, x)$<br>- Terhadap garis $y = -x$: $(-y, -x)$"
        },
        {
          tipe: "teks",
          isi: "3. **Rotasi (Perputaran)** sebesar sudut $\\theta$ berlawanan arah jarum jam dengan pusat $(0,0)$:"
        },
        {
          tipe: "rumus",
          isi: "\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}"
        },
        {
          tipe: "teks",
          isi: "4. **Dilatasi (Perbesaran)** dengan faktor skala $k$ dan pusat $(0,0)$:"
        },
        {
          tipe: "rumus",
          isi: "(x', y') = (kx, ky)"
        },
        {
          tipe: "catatan",
          isi: "Untuk rotasi searah jarum jam, sudut rotasinya bernilai negatif ($\\theta < 0$), sehingga nilai sinus akan berubah tanda sesuai sifat $\\sin(-\\theta) = -\\sin \\theta$."
        },
        {
          tipe: "contoh",
          isi: "Tentukan bayangan titik $P(3, 4)$ jika direfleksikan terhadap garis $y = -x$ lalu ditranslasikan oleh $T\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.<br>Jawab:<br>- Refleksi terhadap $y = -x$: $P'( -4, -3 )$.<br>- Translasi oleh $T$: $P''( -4+2, -3+(-1) ) = P''( -2, -4 )$."
        }
      ]
    }
  ]
};
