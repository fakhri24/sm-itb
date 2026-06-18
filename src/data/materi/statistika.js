// ============================================================
// Materi statis: Statistika (topik #5)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "statistika",
  judul: "Statistika",
  urutan: 5,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "pemusatan-data",
      judul: "Ukuran Pemusatan Data (Mean, Median, Modus)",
      konsep: [
        {
          tipe: "teks",
          isi: "Ukuran pemusatan data digunakan untuk mencari nilai perwakilan yang menunjukkan pusat distribusi data.",
        },
        {
          tipe: "teks",
          isi: "1. **Rata-rata (Mean)** $\\bar{x}$: Jumlah seluruh nilai data dibagi banyaknya data."
        },
        {
          tipe: "rumus",
          isi: "\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} \\qquad \\text{Rata-rata Gabungan: } \\bar{x}_{\\text{gab}} = \\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}"
        },
        {
          tipe: "teks",
          isi: "2. **Median (Me)**: Nilai tengah setelah data diurutkan dari terkecil ke terbesar. Jika jumlah data ganjil, median berada tepat di tengah. Jika genap, rata-rata dari dua data di tengah."
        },
        {
          tipe: "teks",
          isi: "3. **Modus (Mo)**: Nilai data yang paling sering muncul (frekuensi tertinggi)."
        },
        {
          tipe: "rumus",
          isi: "\\text{Modus Data Kelompok: } Mo = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) p"
        },
        {
          tipe: "teks",
          isi: "Di mana $T_b$ adalah tepi bawah kelas modus, $d_1$ selisih frekuensi kelas modus dengan sebelumnya, $d_2$ selisih frekuensi kelas modus dengan setelahnya, dan $p$ panjang kelas."
        },
        {
          tipe: "catatan",
          isi: "Untuk rata-rata gabungan dari beberapa kelompok, rumusnya dapat dikembangkan menjadi: $\\bar{x}_{\\text{gab}} = \\dfrac{\\sum n_i \\bar{x}_i}{\\sum n_i}$."
        },
        {
          tipe: "contoh",
          isi: "Nilai rata-rata ujian matematika 10 siswa laki-laki adalah 75, sedangkan rata-rata 15 siswa perempuan adalah 80. Tentukan rata-rata gabungan kelas tersebut.<br>Jawab:<br>$\\bar{x}_{\\text{gab}} = \\dfrac{n_L\\bar{x}_L + n_P\\bar{x}_P}{n_L + n_P} = \\dfrac{10(75) + 15(80)}{10 + 15} = \\dfrac{750 + 1200}{25} = \\dfrac{1950}{25} = 78$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "letak-data",
      judul: "Ukuran Letak Data (Kuartil & Desil)",
      konsep: [
        {
          tipe: "teks",
          isi: "Ukuran letak membagi data terurut menjadi beberapa bagian yang sama besar.",
        },
        {
          tipe: "teks",
          isi: "1. **Kuartil ($Q_i$)**: Membagi data menjadi 4 bagian sama besar. Terdapat tiga kuartil yaitu $Q_1$ (kuartil bawah), $Q_2$ (kuartil tengah/median), dan $Q_3$ (kuartil atas)."
        },
        {
          tipe: "rumus",
          isi: "\\text{Kuartil Data Kelompok: } Q_i = T_b + \\left(\\frac{\\frac{i}{4}n - f_{ks}}{f_i}\\right) p"
        },
        {
          tipe: "teks",
          isi: "Di mana $f_{ks}$ adalah frekuensi kumulatif sebelum kelas kuartil, $f_i$ frekuensi kelas kuartil, dan $n$ adalah ukuran total data."
        },
        {
          tipe: "teks",
          isi: "2. **Desil ($D_i$)**: Membagi data menjadi 10 bagian sama besar (rumusnya serupa dengan kuartil, tetapi pembaginya menjadi 10)."
        },
        {
          tipe: "rumus",
          isi: "\\text{Desil Data Kelompok: } D_i = T_b + \\left(\\frac{\\frac{i}{10}n - f_{ks}}{f_i}\\right) p"
        },
        {
          tipe: "catatan",
          isi: "Untuk mencari letak kuartil data tunggal secara cepat setelah diurutkan:<br>- Letak $Q_1$: data ke-$\\frac{1}{4}(n+1)$<br>- Letak $Q_2$: data ke-$\\frac{2}{4}(n+1)$<br>- Letak $Q_3$: data ke-$\\frac{3}{4}(n+1)$"
        },
        {
          tipe: "contoh",
          isi: "Diberikan data terurut: $3, 4, 5, 6, 7, 8, 9$ ($n=7$). Tentukan kuartil bawah ($Q_1$).<br>Jawab: Letak $Q_1$ = data ke-$\\frac{1}{4}(7+1)$ = data ke-2. Jadi nilai $Q_1 = 4$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "penyebaran-data",
      judul: "Ukuran Penyebaran Data (Simpangan & Ragam)",
      konsep: [
        {
          tipe: "teks",
          isi: "Ukuran penyebaran mengukur seberapa jauh nilai-nilai data menyebar dari rata-ratanya.",
        },
        {
          tipe: "teks",
          isi: "1. **Jangkauan (Range)**: Selisih nilai data terbesar dengan terkecil ($x_{\\text{max}} - x_{\\text{min}}$).<br>2. **Jangkauan Antarkuartil (Hamparan)**: $H = Q_3 - Q_1$.<br>3. **Simpangan Kuartil**: $Q_d = \\frac{1}{2}(Q_3 - Q_1)$."
        },
        {
          tipe: "teks",
          isi: "4. **Simpangan Rata-rata ($SR$)**: Rata-rata jarak mutlak tiap data ke rata-rata kelas."
        },
        {
          tipe: "rumus",
          isi: "SR = \\frac{\\sum |x_i - \\bar{x}|}{n}"
        },
        {
          tipe: "teks",
          isi: "5. **Ragam/Varians ($s^2$)** dan **Simpangan Baku/Standar Deviasi ($s$)**:"
        },
        {
          tipe: "rumus",
          isi: "s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} \\qquad s = \\sqrt{s^2} = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}"
        },
        {
          tipe: "catatan",
          isi: "Varians ($s^2$) mengukur penyebaran kuadratik. Satuan simpangan baku ($s$) sama dengan satuan data asli sehingga lebih sering digunakan untuk interpretasi langsung."
        },
        {
          tipe: "contoh",
          isi: "Tentukan simpangan baku dari data: $2, 3, 6, 8, 11$ ($n=5$).<br>Jawab: Rata-rata $\\bar{x} = \\dfrac{2+3+6+8+11}{5} = \\dfrac{30}{5} = 6$.<br>Varians $s^2 = \\dfrac{(2-6)^2 + (3-6)^2 + (6-6)^2 + (8-6)^2 + (11-6)^2}{5}$<br>$s^2 = \\dfrac{16 + 9 + 0 + 4 + 25}{5} = \\dfrac{54}{5} = 10,8$.<br>Simpangan baku $s = \\sqrt{10,8}$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "modifikasi-data",
      judul: "Efek Perubahan/Modifikasi Data",
      konsep: [
        {
          tipe: "teks",
          isi: "Soal SM-ITB sering menanyakan efek pada nilai statistik jika semua data dimodifikasi secara seragam (misal: dikali $a$ lalu ditambah/dikurang $b$).",
        },
        {
          tipe: "teks",
          isi: "Aturan perubahan nilai statistik saat setiap nilai data $x_i$ diubah menjadi $y_i = a \\cdot x_i + b$ adalah:"
        },
        {
          tipe: "teks",
          isi: "1. **Ukuran Pemusatan & Letak** (Mean, Median, Modus, Kuartil, Desil) terpengaruh oleh **perkalian maupun penjumlahan**:"
        },
        {
          tipe: "rumus",
          isi: "\\text{Nilai Baru} = a \\cdot (\\text{Nilai Lama}) + b"
        },
        {
          tipe: "teks",
          isi: "2. **Ukuran Penyebaran** (Jangkauan, Simpangan Kuartil, Simpangan Baku) **hanya terpengaruh oleh perkalian** (dalam tanda mutlak), dan **sama sekali tidak terpengaruh** oleh operasi penjumlahan/pengurangan:"
        },
        {
          tipe: "rumus",
          isi: "\\text{Penyebaran Baru} = |a| \\cdot (\\text{Penyebaran Lama})"
        },
        {
          tipe: "teks",
          isi: "3. **Varians/Ragam** (karena merupakan kuadrat dari simpangan baku) terpengaruh secara kuadratik oleh perkalian, dan tidak terpengaruh oleh penjumlahan:"
        },
        {
          tipe: "rumus",
          isi: "\\text{Ragam Baru} = a^2 \\cdot (\\text{Ragam Lama})"
        },
        {
          tipe: "catatan",
          isi: "Konstanta penjumlahan $b$ hanya menggeser lokasi seluruh data pada garis bilangan tanpa mengubah tingkat kerenggangan (penyebaran) data tersebut."
        },
        {
          tipe: "contoh",
          isi: "Kumpulan data memiliki rata-rata 12 dan simpangan baku 3. Jika setiap data dikalikan 2 lalu dikurangi 5, tentukan rata-rata dan simpangan baku yang baru.<br>Jawab:<br>- Rata-rata baru: $2 \\times 12 - 5 = 24 - 5 = 19$.<br>- Simpangan baku baru: $|2| \\times 3 = 6$ (tidak terpengaruh oleh pengurangan 5)."
        }
      ]
    }
  ]
};
