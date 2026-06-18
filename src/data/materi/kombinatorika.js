// ============================================================
// Materi statis: Kombinatorika (topik #7)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "kombinatorika",
  judul: "Kombinatorika",
  urutan: 7,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "kaidah-pencacahan",
      judul: "Aturan Perkalian, Penjumlahan, & Faktorial",
      konsep: [
        {
          tipe: "teks",
          isi: "Kaidah pencacahan membantu menghitung banyaknya cara yang mungkin terjadi dari sebuah percobaan tanpa mendaftar satu per satu.",
        },
        {
          tipe: "teks",
          isi: "1. **Aturan Penjumlahan**: Digunakan untuk kejadian-kejadian yang bersifat **saling lepas** (pilihan alternatif, tidak dapat terjadi bersamaan).<br>Jika kejadian $A$ memiliki $m$ cara dan kejadian $B$ memiliki $n$ cara alternatif, total cara adalah $m + n$."
        },
        {
          tipe: "teks",
          isi: "2. **Aturan Perkalian (Filling Slots)**: Digunakan untuk kejadian-kejadian yang terjadi **secara bersamaan** atau berurutan.<br>Jika langkah pertama ada $m$ cara dan langkah kedua ada $n$ cara, total cara adalah $m \\times n$."
        },
        {
          tipe: "teks",
          isi: "3. **Notasi Faktorial**: Hasil perkalian bilangan bulat positif berurutan dari $n$ sampai 1:"
        },
        {
          tipe: "rumus",
          isi: "n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 3 \\times 2 \\times 1 \\qquad \\text{Definisi khusus: } 0! = 1"
        },
        {
          tipe: "catatan",
          isi: "Aturan perkalian sering diterapkan pada soal penyusunan angka/huruf dengan syarat \"tidak boleh berulang\" atau \"berulang\"."
        },
        {
          tipe: "contoh",
          isi: "Berapa banyak bilangan ratusan ganjil yang dapat disusun dari angka-angka 1, 2, 3, 4, 5 tanpa pengulangan?<br>Jawab: Buat 3 slot [Ratusan][Puluhan][Satuan].<br>- Mulai dari syarat khusus (ganjil): slot Satuan hanya bisa diisi angka ganjil (1, 3, 5) $\\rightarrow$ 3 pilihan.<br>- Slot Ratusan: tersisa 4 angka $\\rightarrow$ 4 pilihan.<br>- Slot Puluhan: tersisa 3 angka $\\rightarrow$ 3 pilihan.<br>Total susunan = $4 \\times 3 \\times 3 = 36$ bilangan."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "permutasi",
      judul: "Permutasi (Urutan Diperhatikan)",
      konsep: [
        {
          tipe: "teks",
          isi: "**Permutasi** digunakan untuk menghitung susunan objek di mana **urutan posisi sangat diperhatikan** ($AB \\neq BA$, contoh: susunan pengurus kelas, susunan duduk).",
        },
        {
          tipe: "teks",
          isi: "1. **Permutasi $r$ unsur dari $n$ unsur berbeda**:"
        },
        {
          tipe: "rumus",
          isi: "P(n, r) = P_r^n = \\frac{n!}{(n - r)!}"
        },
        {
          tipe: "teks",
          isi: "2. **Permutasi Siklik** (susunan melingkar, misal duduk mengelilingi meja bundar):"
        },
        {
          tipe: "rumus",
          isi: "P_{\\text{siklik}} = (n - 1)!"
        },
        {
          tipe: "teks",
          isi: "3. **Permutasi Unsur yang Sama**: Menyusun susunan huruf dari kata yang mengandung huruf kembar:"
        },
        {
          tipe: "rumus",
          isi: "P = \\frac{n!}{k_1! \\cdot k_2! \\cdot \\dots \\cdot k_m!} \\qquad (k_i \\text{ adalah jumlah unsur kembar tipe } i)"
        },
        {
          tipe: "catatan",
          isi: "Pada permutasi siklik, jika ada kelompok objek yang harus selalu berdampingan/duduk bersama, anggap kelompok tersebut sebagai 1 objek besar, lalu kalikan hasil akhir dengan jumlah permutasi di dalam kelompok itu."
        },
        {
          tipe: "contoh",
          isi: "Berapa banyak kata baru yang dapat dibentuk dari huruf-huruf pada kata \"KATAK\"?<br>Jawab: Total huruf $n=5$. Unsur kembar: K ada 2 ($k_1=2$), A ada 2 ($k_2=2$).<br>$P = \\dfrac{5!}{2! \\cdot 2!} = \\dfrac{120}{2 \\cdot 2} = 30$ kata."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "kombinasi-binomial",
      judul: "Kombinasi & Teorema Binomial",
      konsep: [
        {
          tipe: "teks",
          isi: "**Kombinasi** digunakan untuk menghitung pemilihan objek di mana **urutan tidak diperhatikan** ($AB = BA$, contoh: memilih anggota tim, mengambil bola dari kotak).",
        },
        {
          tipe: "teks",
          isi: "Rumus kombinasi $r$ unsur dari $n$ unsur berbeda:"
        },
        {
          tipe: "rumus",
          isi: "C(n, r) = C_r^n = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}"
        },
        {
          tipe: "teks",
          isi: "**Teorema Binomial Newton** menggunakan kombinasi sebagai koefisien ekspansi aljabar pangkat $n$:"
        },
        {
          tipe: "rumus",
          isi: "(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r"
        },
        {
          tipe: "teks",
          isi: "Suku ke-$(r+1)$ dari ekspansi tersebut adalah $\\binom{n}{r} a^{n-r} b^r$."
        },
        {
          tipe: "catatan",
          isi: "Ingat sifat simetri kombinasi yang mempercepat perhitungan: $\\binom{n}{r} = \\binom{n}{n-r}$, contoh: $\\binom{10}{8} = \\binom{10}{2}$."
        },
        {
          tipe: "contoh",
          isi: "Dari 8 orang siswa, akan dipilih 3 orang untuk mengikuti seminar. Berapa banyak cara pemilihannya?<br>Jawab: Pemilihan tim tidak membedakan urutan jabatan, gunakan kombinasi:<br>$\\binom{8}{3} = \\dfrac{8!}{3!(8-3)!} = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$ cara."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "peluang-kejadian",
      judul: "Peluang Kejadian Majemuk",
      konsep: [
        {
          tipe: "teks",
          isi: "Peluang suatu kejadian $A$ pada ruang sampel $S$ didefinisikan sebagai rasio jumlah titik sampel terhadap total anggota ruang sampel. Kisaran nilai peluang adalah $0 \\le P(A) \\le 1$.",
        },
        {
          tipe: "rumus",
          isi: "P(A) = \\frac{n(A)}{n(S)} \\qquad \\text{Komplemen: } P(A') = 1 - P(A)"
        },
        {
          tipe: "teks",
          isi: "Aturan operasi peluang kejadian majemuk:"
        },
        {
          tipe: "teks",
          isi: "1. **Peluang Gabungan Dua Kejadian** (secara umum):"
        },
        {
          tipe: "rumus",
          isi: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
        },
        {
          tipe: "teks",
          isi: "Jika $A$ dan $B$ **saling lepas** (tidak bisa terjadi bersamaan), maka $P(A \\cap B) = 0$ sehingga $P(A \\cup B) = P(A) + P(B)$."
        },
        {
          tipe: "teks",
          isi: "2. **Kejadian Saling Bebas (Independen)**: Terjadinya $A$ tidak mempengaruhi peluang terjadinya $B$:"
        },
        {
          tipe: "rumus",
          isi: "P(A \\cap B) = P(A) \\times P(B)"
        },
        {
          tipe: "teks",
          isi: "3. **Kejadian Bersyarat (Kondisional)**: Peluang terjadinya $A$ setelah kejadian $B$ terjadi terlebih dahulu:"
        },
        {
          tipe: "rumus",
          isi: "P(A | B) = \\frac{P(A \\cap B)}{P(B)}"
        },
        {
          tipe: "catatan",
          isi: "Frekuensi Harapan ($F_h$) dari suatu kejadian yang diulang sebanyak $N$ kali percobaan adalah: $F_h = P(A) \\times N$."
        },
        {
          tipe: "contoh",
          isi: "Sebuah dadu dilempar sekali. Tentukan peluang munculnya angka prima ganjil.<br>Jawab: Ruang sampel $S=\\{1, 2, 3, 4, 5, 6\\} \\rightarrow n(S) = 6$.<br>Kejadian prima ganjil $A=\\{3, 5\\} \\rightarrow n(A) = 2$.<br>Peluang $P(A) = \\dfrac{2}{6} = \\dfrac{1}{3}$."
        }
      ]
    }
  ]
};
