// ============================================================
// Materi statis: Limit, Turunan, Integral (topik #11)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "limit-turunan-integral",
  judul: "Limit, Turunan, & Integral (Kalkulus)",
  urutan: 11,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "limit-aljabar-trigonometri",
      judul: "Limit Aljabar & Trigonometri",
      konsep: [
        {
          tipe: "teks",
          isi: "Limit menyatakan nilai pendekatan suatu fungsi saat variabelnya mendekati nilai tertentu. Secara umum ditulis $\\lim_{x \\to c} f(x) = L$.",
        },
        {
          tipe: "teks",
          isi: "Untuk menyelesaikan limit bentuk tak tentu $\\frac{0}{0}$:<br>1. **Pemfaktoran**: Mengeliminasi pembuat nol pada pembilang dan penyebut.<br>2. **Perkalian Sekawan**: Untuk limit yang memuat bentuk akar.<br>3. **Aturan L'Hopital** (Turunan): Jika $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{0}{0}$, nilainya sama dengan $\\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$."
        },
        {
          tipe: "teks",
          isi: "Limit Trigonometri dasar mendekati nol (dengan $\\sin$ dan $\\tan$ dapat langsung disederhanakan/dicoret):"
        },
        {
          tipe: "rumus",
          isi: "\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b} \\qquad \\lim_{x \\to 0} \\frac{\\tan ax}{\\sin bx} = \\frac{a}{b} \\qquad \\lim_{x \\to 0} \\frac{1 - \\cos ax}{x^2} = \\frac{1}{2}a^2"
        },
        {
          tipe: "catatan",
          isi: "Hati-hati: Aturan L'Hopital hanya boleh digunakan apabila hasil substitusi langsung menghasilkan bentuk tak tentu $\\frac{0}{0}$ atau $\\frac{\\infty}{\\infty}$."
        },
        {
          tipe: "contoh",
          isi: "Hitung nilai dari $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$.<br>Jawab: Substitusi menghasilkan $\\frac{0}{0}$. Faktorkan pembilang:<br>$\\lim_{x \\to 3} \\dfrac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "limit-tak-hingga-asimtot",
      judul: "Limit Tak Hingga & Asimtot",
      konsep: [
        {
          tipe: "teks",
          isi: "Limit tak hingga menganalisis perilaku fungsi saat nilai variabelnya membesar tanpa batas ($x \\to \\infty$).",
        },
        {
          tipe: "teks",
          isi: "1. **Limit Pecahan Rasional**: Membandingkan pangkat tertinggi pembilang ($m$) dan penyebut ($n$):"
        },
        {
          tipe: "rumus",
          isi: "\\lim_{x \\to \\infty} \\frac{a x^m + \\dots}{p x^n + \\dots} = \\begin{cases} \\frac{a}{p} & \\text{jika } m = n \\\\ 0 & \\text{jika } m < n \\\\ \\infty & \\text{jika } m > n \\end{cases}"
        },
        {
          tipe: "teks",
          isi: "2. **Limit Selisih Bentuk Akar Kuadrat**:"
        },
        {
          tipe: "rumus",
          isi: "\\lim_{x \\to \\infty} \\left(\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q}\\right) = \\frac{b - p}{2\\sqrt{a}}"
        },
        {
          tipe: "teks",
          isi: "**Asimtot** adalah garis lurus yang didekati oleh grafik fungsi tetapi tidak pernah menyentuhnya:<br>- **Asimtot Tegak**: Diperoleh dari pembuat nol penyebut ($x = c$).<br>- **Asimtot Datar**: Diperoleh dari hasil limit tak hingga fungsi ($y = L$)."
        },
        {
          tipe: "catatan",
          isi: "Pada rumus selisih akar, jika koefisien kuadrat ruas kiri ($a$) lebih besar dari kanan ($p$), hasil limit adalah $\\infty$. Jika $a < p$, hasil limit adalah $-\\infty$."
        },
        {
          tipe: "contoh",
          isi: "Hitung nilai dari $\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + 5x} - \\sqrt{4x^2 - 3x + 1}\\right)$.<br>Jawab: Gunakan rumus cepat dengan $a=4, b=5, p=-3$:<br>$S = \\dfrac{b - p}{2\\sqrt{a}} = \\dfrac{5 - (-3)}{2\\sqrt{4}} = \\dfrac{8}{4} = 2$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "turunan-dasar",
      judul: "Turunan Fungsi Aljabar & Trigonometri",
      konsep: [
        {
          tipe: "teks",
          isi: "Turunan menyatakan laju perubahan sesaat nilai fungsi. Secara formal diturunkan dari konsep limit selisih fungsi.",
        },
        {
          tipe: "teks",
          isi: "Rumus turunan fungsi aljabar dasar:"
        },
        {
          tipe: "rumus",
          isi: "f(x) = a x^n \\quad \\longrightarrow \\quad f'(x) = a \\cdot n \\cdot x^{n-1}"
        },
        {
          tipe: "teks",
          isi: "Aturan operasi turunan (untuk perkalian, pembagian, dan komposisi/aturan rantai):"
        },
        {
          tipe: "rumus",
          isi: "y = u \\cdot v \\ \\rightarrow \\ y' = u'v + uv' \\qquad y = \\frac{u}{v} \\ \\rightarrow \\ y' = \\frac{u'v - uv'}{v^2}"
        },
        {
          tipe: "rumus",
          isi: "y = f(u(x)) \\ \\longrightarrow \\ y' = f'(u) \\cdot u'(x) \\quad \\text{ (Aturan Rantai)}"
        },
        {
          tipe: "teks",
          isi: "Turunan dasar fungsi trigonometri:"
        },
        {
          tipe: "rumus",
          isi: "y = \\sin x \\ \\rightarrow \\ y' = \\cos x \\qquad y = \\cos x \\ \\rightarrow \\ y' = -\\sin x \\qquad y = \\tan x \\ \\rightarrow \\ y' = \\sec^2 x"
        },
        {
          tipe: "catatan",
          isi: "Jangan lupa untuk mengalikan turunan fungsi luar dengan turunan fungsi di dalam (*aturan rantai*) pada komposisi rumit, misalnya: $\\sin^3(2x) \\rightarrow 3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2$."
        },
        {
          tipe: "contoh",
          isi: "Tentukan turunan dari $f(x) = (3x^2 - 1)^5$.<br>Jawab: Gunakan aturan rantai. Misal $u = 3x^2 - 1 \\Rightarrow u' = 6x$.<br>$f'(x) = 5(3x^2 - 1)^4 \\cdot (6x) = 30x(3x^2 - 1)^4$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "aplikasi-turunan",
      judul: "Aplikasi Turunan (Garis Singgung & Titik Stasioner)",
      konsep: [
        {
          tipe: "teks",
          isi: "Turunan pertama ($f'(x)$) memuat informasi geometris penting mengenai grafik fungsi.",
        },
        {
          tipe: "teks",
          isi: "1. **Garis Singgung Kurva**: Gradien garis singgung kurva $y = f(x)$ di titik $(x_1, y_1)$ adalah nilai turunan di titik tersebut: $m = f'(x_1)$.<br>Persamaan garis singgungnya: $y - y_1 = m(x - x_1)$."
        },
        {
          tipe: "teks",
          isi: "2. **Fungsi Naik dan Fungsi Turun**:"
        },
        {
          tipe: "rumus",
          isi: "\\text{Fungsi Naik: } f'(x) > 0 \\qquad \\text{Fungsi Turun: } f'(x) < 0"
        },
        {
          tipe: "teks",
          isi: "3. **Titik Stasioner & Nilai Ekstrem**: Tercapai saat $f'(x) = 0$. Jenis titik ditentukan oleh nilai turunan kedua ($f''(x)$):"
        },
        {
          tipe: "rumus",
          isi: "f''(x_s) < 0 \\ \\rightarrow \\ \\text{Titik Maksimum Lokal} \\qquad f''(x_s) > 0 \\ \\rightarrow \\ \\text{Titik Minimum Lokal}"
        },
        {
          tipe: "catatan",
          isi: "Jika $f''(x_s) = 0$, titik tersebut kemungkinan merupakan titik belok. Uji nilai turunan pertama di sekitar titik stasioner untuk memastikannya."
        },
        {
          tipe: "contoh",
          isi: "Tentukan gradien garis singgung kurva $y = x^3 - 2x + 5$ di titik berabsis $x = 2$.<br>Jawab: Gradien adalah $y'$ pada $x=2$.<br>$y' = 3x^2 - 2 \\Rightarrow m = 3(2)^2 - 2 = 12 - 2 = 10$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "integral-dasar",
      judul: "Integral Tak Tentu & Tentu",
      konsep: [
        {
          tipe: "teks",
          isi: "Integral merupakan anti-turunan (invers dari operasi turunan). Terbagi menjadi integral tak tentu (menghasilkan fungsi) dan tentu (menghasilkan nilai/luas).",
        },
        {
          tipe: "teks",
          isi: "1. **Integral Tak Tentu Aljabar**:"
        },
        {
          tipe: "rumus",
          isi: "\\int a x^n \\, dx = \\frac{a}{n+1} x^{n+1} + C \\qquad \\text{untuk } n \\neq -1"
        },
        {
          tipe: "teks",
          isi: "2. **Integral Tentu**: Memiliki batas integrasi bawah ($a$) dan atas ($b$):"
        },
        {
          tipe: "rumus",
          isi: "\\int_{a}^{b} f(x) \\, dx = [F(x)]_{a}^{b} = F(b) - F(a) \\qquad \\text{dengan } F'(x) = f(x)"
        },
        {
          tipe: "teks",
          isi: "3. **Metode Integrasi Substitusi**: Digunakan untuk menyederhanakan perkalian fungsi yang memuat turunan komponen lainnya: $\\int f(g(x)) \\cdot g'(x) \\, dx = \\int f(u) \\, du$."
        },
        {
          tipe: "catatan",
          isi: "Jangan lupa untuk menambahkan konstanta $+ C$ pada hasil perhitungan integral tak tentu karena merupakan rumpun fungsi (banyak kemungkinan konstanta awal)."
        },
        {
          tipe: "contoh",
          isi: "Hitunglah nilai dari $\\int_{1}^{3} (3x^2 - 2x) \\, dx$.<br>Jawab:<br>$\\int_{1}^{3} (3x^2 - 2x) \\, dx = [x^3 - x^2]_{1}^{3} = (3^3 - 3^2) - (1^3 - 1^2)$<br>$= (27 - 9) - (1 - 1) = 18 - 0 = 18$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "aplikasi-integral",
      judul: "Aplikasi Integral: Luas Daerah",
      konsep: [
        {
          tipe: "teks",
          isi: "Integral tentu digunakan secara luas untuk menghitung luas daerah yang dibatasi oleh kurva aljabar.",
        },
        {
          tipe: "teks",
          isi: "1. **Luas Daerah antara Kurva dan Sumbu $x$** pada interval $[a, b]$:"
        },
        {
          tipe: "rumus",
          isi: "L = \\int_{a}^{b} f(x) \\, dx \\qquad \\text{(Ambil nilai mutlak } |L| \\text{ jika daerah di bawah sumbu } x\\text{)}"
        },
        {
          tipe: "teks",
          isi: "2. **Luas Daerah di Antara Dua Kurva** pada interval $[a, b]$:"
        },
        {
          tipe: "rumus",
          isi: "L = \\int_{a}^{b} (y_{\\text{atas}} - y_{\\text{bawah}}) \\, dx"
        },
        {
          tipe: "teks",
          isi: "3. **Rumus Cepat Luas Batas Parabola**: Untuk luas daerah yang dibatasi parabola dan garis lurus (atau sesama parabola) setelah disamakan $y_1=y_2$ hingga berbentuk $ax^2+bx+c=0$:"
        },
        {
          tipe: "rumus",
          isi: "L = \\frac{D\\sqrt{D}}{6a^2} \\qquad \\text{dengan } D = b^2 - 4ac"
        },
        {
          tipe: "catatan",
          isi: "Sebelum menghitung luas, selalu buat sketsa kasar grafik kedua kurva untuk menentukan kurva mana yang bertindak sebagai batas atas ($y_{\\text{atas}}$) dan batas bawah ($y_{\\text{bawah}}$)."
        },
        {
          tipe: "contoh",
          isi: "Tentukan luas daerah yang dibatasi oleh parabola $y = -x^2 + 4x$ dan sumbu $x$.<br>Jawab: Pembuat nol kurva: $-x^2 + 4x = 0 \\Rightarrow x(4-x) = 0 \\Rightarrow x=0$ dan $x=4$. Ini menjadi batas integrasi.<br>Gunakan rumus cepat $D\\sqrt{D}/6a^2$ dengan $a=-1, b=4, c=0 \\Rightarrow D = 4^2 - 0 = 16$.<br>$L = \\dfrac{16\\sqrt{16}}{6(-1)^2} = \\dfrac{16 \\times 4}{6} = \\dfrac{64}{6} = \\dfrac{32}{3}$ satuan luas."
        }
      ]
    }
  ]
};
