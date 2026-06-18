// ============================================================
// Materi statis: Aljabar (topik #2)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "aljabar",
  judul: "Aljabar",
  urutan: 2,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "persamaan-pertidaksamaan-kuadrat",
      judul: "Persamaan & Pertidaksamaan Kuadrat",
      konsep: [
        {
          tipe: "teks",
          isi: "Persamaan kuadrat memiliki bentuk umum $ax^2 + bx + c = 0$ dengan $a \\neq 0$. Akar-akarnya ($x_1$ dan $x_2$) dapat dicari menggunakan rumus ABC:",
        },
        {
          tipe: "rumus",
          isi: "x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a} \\qquad \\text{dengan } D = b^2 - 4ac \\text{ (Diskriminan)}"
        },
        {
          tipe: "teks",
          isi: "Sifat akar-akar persamaan kuadrat (**Teorema Vieta**):",
        },
        {
          tipe: "rumus",
          isi: "x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a} \\qquad |x_1 - x_2| = \\frac{\\sqrt{D}}{|a|}"
        },
        {
          tipe: "teks",
          isi: "Karakteristik akar berdasarkan nilai Diskriminan ($D$):",
        },
        {
          tipe: "teks",
          isi: "- Jika $D > 0$, persamaan memiliki **dua akar real yang berbeda**.<br>- Jika $D = 0$, persamaan memiliki **dua akar real yang kembar (sama)**.<br>- Jika $D < 0$, persamaan **tidak memiliki akar real** (akar imajiner/konjugat kompleks)."
        },
        {
          tipe: "teks",
          isi: "Untuk menyelesaikan pertidaksamaan kuadrat $ax^2 + bx + c > 0$, cari pembuat nol ($x_1$ dan $x_2$), gambar garis bilangan, lakukan uji titik untuk menentukan daerah positif/negatif, lalu ambil daerah yang sesuai."
        },
        {
          tipe: "catatan",
          isi: "Akar-akar baru yang dibentuk dari operasi akar lama (misal: $x_1+2$ dan $x_2+2$) dapat disusun langsung menggunakan substitusi invers operasi ke persamaan awal. Misal untuk akar $y = x+2$, substitusikan $x = y-2$ ke persamaan asal."
        },
        {
          tipe: "contoh",
          isi: "Tentukan batas nilai $m$ agar persamaan $x^2 - 4x + m = 0$ memiliki akar kembar.<br>Jawab: Syarat akar kembar adalah $D = 0$.<br>$D = (-4)^2 - 4(1)(m) = 0 \\Rightarrow 16 - 4m = 0 \\Rightarrow m = 4$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "fungsi-kuadrat",
      judul: "Fungsi Kuadrat & Parabola",
      konsep: [
        {
          tipe: "teks",
          isi: "Fungsi kuadrat memiliki bentuk umum $f(x) = ax^2 + bx + c$ dengan $a \\neq 0$. Grafiknya berbentuk parabola dengan titik puncak $(x_p, y_p)$:",
        },
        {
          tipe: "rumus",
          isi: "x_p = -\\frac{b}{2a} \\text{ (Sumbu Simetri)} \\qquad y_p = -\\frac{D}{4a} \\text{ (Nilai Ekstrem)}"
        },
        {
          tipe: "teks",
          isi: "Arah membuka parabola ditentukan oleh nilai $a$:<br>- Jika $a > 0$, parabola **membuka ke atas** (memiliki nilai minimum $y_p$).<br>- Jika $a < 0$, parabola **membuka ke bawah** (memiliki nilai maksimum $y_p$)."
        },
        {
          tipe: "teks",
          isi: "Kondisi definit pada fungsi kuadrat (tidak pernah memotong sumbu $x$):",
        },
        {
          tipe: "rumus",
          isi: "\\text{Definit Positif (selalu } > 0\\text{): } a > 0 \\text{ dan } D < 0"
        },
        {
          tipe: "rumus",
          isi: "\\text{Definit Negatif (selalu } < 0\\text{): } a < 0 \\text{ dan } D < 0"
        },
        {
          tipe: "teks",
          isi: "Cara menyusun persamaan fungsi kuadrat baru:",
        },
        {
          tipe: "teks",
          isi: "1. Jika diketahui titik puncak $(x_p, y_p)$ dan satu titik lainnya: $y = a(x - x_p)^2 + y_p$.<br>2. Jika diketahui titik potong sumbu $x$ di $(x_1, 0)$ & $(x_2, 0)$: $y = a(x - x_1)(x - x_2)$."
        },
        {
          tipe: "catatan",
          isi: "Parabola menyinggung sumbu $x$ jika $D = 0$, memotong sumbu $x$ di dua titik jika $D > 0$, dan berada sepenuhnya di atas/bawah sumbu $x$ jika $D < 0$."
        },
        {
          tipe: "contoh",
          isi: "Tentukan titik puncak dari fungsi kuadrat $f(x) = x^2 - 2x - 3$.<br>Jawab: $a=1, b=-2, c=-3$.<br>Sumbu simetri: $x_p = -\\dfrac{-2}{2(1)} = 1$.<br>Nilai puncak: $y_p = f(1) = 1^2 - 2(1) - 3 = -4$.<br>Jadi titik puncaknya adalah $(1, -4)$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "sistem-persamaan-linear",
      judul: "Sistem Persamaan Linear (SPLDV & SPLTV)",
      konsep: [
        {
          tipe: "teks",
          isi: "Sistem Persamaan Linear Dua Variabel (SPLDV) dan Tiga Variabel (SPLTV) digunakan untuk mencari nilai variabel yang memenuhi beberapa persamaan sekaligus.",
        },
        {
          tipe: "teks",
          isi: "Metode penyelesaian utama meliputi **Substitusi** (memasukkan nilai satu variabel ke persamaan lain), **Eliminasi** (menghilangkan salah satu variabel), atau metode **Campuran** (eliminasi dilanjutkan substitusi)."
        },
        {
          tipe: "teks",
          isi: "Untuk SPLDV berbentuk:",
        },
        {
          tipe: "rumus",
          isi: "\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}"
        },
        {
          tipe: "teks",
          isi: "Karakteristik hubungan kedua garis pembentuk persamaan:<br>1. **Tepat satu solusi**: jika $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$ (garis saling berpotongan).<br>2. **Solusi tak berhingga**: jika $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ (garis saling berimpit).<br>3. **Tidak ada solusi**: jika $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ (garis saling sejajar, tidak pernah bertemu)."
        },
        {
          tipe: "catatan",
          isi: "Pada SPLTV, langkah terbaik biasanya mengeliminasi satu variabel tertentu dari dua pasang persamaan berbeda untuk menghasilkan SPLDV baru dengan dua variabel yang sama."
        },
        {
          tipe: "contoh",
          isi: "Cari solusi dari $2x + y = 5$ dan $x - y = 1$.<br>Jawab: Jumlahkan kedua persamaan untuk mengeliminasi $y$:<br>$(2x + y) + (x - y) = 5 + 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2$.<br>Substitusi $x=2$ ke persamaan kedua: $2 - y = 1 \\Rightarrow y = 1$.<br>Solusi tunggalnya adalah $(2, 1)$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "nilai-mutlak",
      judul: "Persamaan & Pertidaksamaan Nilai Mutlak",
      konsep: [
        {
          tipe: "teks",
          isi: "Nilai mutlak menyatakan jarak suatu bilangan dari angka nol pada garis bilangan, sehingga nilainya selalu non-negatif. Secara aljabar didefinisikan sebagai:",
        },
        {
          tipe: "rumus",
          isi: "|x| = \\begin{cases} x & \\text{jika } x \\ge 0 \\\\ -x & \\text{jika } x < 0 \\end{cases}"
        },
        {
          tipe: "teks",
          isi: "Sifat-sifat penting nilai mutlak:<br>- $|x| = \\sqrt{x^2}$ dan $|x|^2 = x^2$<br>- $|a \\cdot b| = |a| \\cdot |b|$"
        },
        {
          tipe: "teks",
          isi: "Sifat penyelesaian pertidaksamaan nilai mutlak (untuk konstanta $a > 0$):",
        },
        {
          tipe: "rumus",
          isi: "|f(x)| < a \\iff -a < f(x) < a"
        },
        {
          tipe: "rumus",
          isi: "|f(x)| > a \\iff f(x) < -a \\text{ atau } f(x) > a"
        },
        {
          tipe: "teks",
          isi: "Untuk pertidaksamaan yang kedua ruasnya memuat nilai mutlak, selesaikan dengan mengkuadratkan kedua ruas memanfaatkan sifat $|a|^2 > |b|^2 \\iff (a+b)(a-b) > 0$."
        },
        {
          tipe: "catatan",
          isi: "Untuk persamaan $|f(x)| = g(x)$, pastikan Anda selalu menguji syarat numerus/hasil $g(x) \\ge 0$ untuk setiap nilai $x$ yang ditemukan."
        },
        {
          tipe: "contoh",
          isi: "Selesaikan pertidaksamaan $|2x - 3| < 5$.<br>Jawab: Sesuai sifat pertidaksamaan mutlak:<br>$-5 < 2x - 3 < 5$<br>Tambahkan 3 ke semua ruas: $-2 < 2x < 8$<br>Bagi dengan 2: $-1 < x < 4$."
        }
      ]
    }
  ]
};
