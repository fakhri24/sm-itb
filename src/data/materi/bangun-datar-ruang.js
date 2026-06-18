// ============================================================
// Materi statis: Bangun Datar dan Bangun Ruang (topik #4)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "bangun-datar-ruang",
  judul: "Bangun Datar dan Bangun Ruang",
  urutan: 4,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "geometri-datar",
      judul: "Geometri Datar: Luas, Keliling, & Kesebangunan",
      konsep: [
        {
          tipe: "teks",
          isi: "Geometri datar membahas sifat, luas, dan keliling bangun dua dimensi. Beberapa rumus luas ($L$) dan keliling ($K$) penting:",
        },
        {
          tipe: "teks",
          isi: "- **Segitiga**: $L = \\frac{1}{2} \\times a \\times t$ atau rumus Heron $L = \\sqrt{s(s-a)(s-b)(s-c)}$ dengan $s = \\frac{1}{2}(a+b+c)$.<br>- **Lingkaran**: $L = \\pi r^2$ dan $K = 2\\pi r$.<br>- **Trapesium**: $L = \\frac{1}{2} \\times (a+b) \\times t$.<br>- **Jajar Genjang**: $L = a \\times t$."
        },
        {
          tipe: "teks",
          isi: "Konsep **Kesebangunan** (bentuk sama, ukuran sebanding) dan **Kekongruenan** (bentuk dan ukuran sama persis) sering digunakan untuk mencari panjang sisi tersembunyi pada segitiga:",
        },
        {
          tipe: "rumus",
          isi: "\\Delta ABC \\sim \\Delta PQR \\iff \\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR}"
        },
        {
          tipe: "catatan",
          isi: "Pada dua bangun datar yang sebangun dengan rasio panjang sisi $k$, perbandingan luas kedua bangun tersebut adalah $k^2$."
        },
        {
          tipe: "contoh",
          isi: "Sebuah segitiga siku-siku memiliki sisi tegak 5 cm dan sisi miring 13 cm. Tentukan luas segitiga tersebut.<br>Jawab: Cari panjang alas ($a$) menggunakan teorema Pythagoras:<br>$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm.<br>Luas segitiga: $L = \\dfrac{1}{2} \\times a \\times t = \\dfrac{1}{2} \\times 12 \\times 5 = 30\\text{ cm}^2$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "geometri-ruang",
      judul: "Geometri Ruang: Volume & Luas Permukaan",
      konsep: [
        {
          tipe: "teks",
          isi: "Geometri ruang membahas bangun tiga dimensi yang memiliki isi/volume ($V$) dan luas permukaan ($L$). Rumus utama bangun ruang:",
        },
        {
          tipe: "teks",
          isi: "- **Prisma** (termasuk Kubus & Balok): $V = L_{\\text{alas}} \\times t$ dan $L = 2 \\times L_{\\text{alas}} + K_{\\text{alas}} \\times t$.<br>- **Limas**: $V = \\frac{1}{3} \\times L_{\\text{alas}} \\times t$ dan $L = L_{\\text{alas}} + \\sum L_{\\text{sisi tegak}}$.<br>- **Tabung**: $V = \\pi r^2 t$ dan $L = 2\\pi r(r + t)$.<br>- **Kerucut**: $V = \\frac{1}{3} \\pi r^2 t$ dan $L = \\pi r(r + s)$ dengan garis pelukis $s = \\sqrt{r^2 + t^2}$.<br>- **Bola**: $V = \\frac{4}{3} \\pi r^3$ dan $L = 4\\pi r^2$."
        },
        {
          tipe: "catatan",
          isi: "Jika dimensi suatu bangun ruang dikalikan dengan faktor $k$, maka volume bangun ruang tersebut akan berubah menjadi $k^3$ kali volume semula."
        },
        {
          tipe: "contoh",
          isi: "Sebuah limas persegi memiliki panjang rusuk alas 10 cm dan tinggi limas 12 cm. Hitunglah volume limas tersebut.<br>Jawab: Luas alas (persegi) $L_{\\text{alas}} = 10 \\times 10 = 100\\text{ cm}^2$.<br>Volume limas: $V = \\dfrac{1}{3} \\times L_{\\text{alas}} \\times t = \\dfrac{1}{3} \\times 100 \\times 12 = 400\\text{ cm}^3$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "jarak-dimensi-tiga",
      judul: "Jarak dalam Ruang (Dimensi Tiga)",
      konsep: [
        {
          tipe: "teks",
          isi: "Perhitungan jarak pada dimensi tiga didasarkan pada konsep proyeksi tegak lurus (ortogonal):",
        },
        {
          tipe: "teks",
          isi: "1. **Jarak Titik ke Titik**: Panjang garis lurus terpendek yang menghubungkan kedua titik tersebut. Pada kubus dengan rusuk $a$, berlaku:<br>- Diagonal bidang = $a\\sqrt{2}$<br>- Diagonal ruang = $a\\sqrt{3}$"
        },
        {
          tipe: "teks",
          isi: "2. **Jarak Titik ke Garis**: Panjang ruas garis tegak lurus dari titik ke garis tersebut. Biasanya diselesaikan dengan membuat segitiga yang menghubungkan titik dengan ujung-ujung garis, lalu menggunakan rumus luas segitiga:"
        },
        {
          tipe: "rumus",
          isi: "L = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi}"
        },
        {
          tipe: "teks",
          isi: "3. **Jarak Titik ke Bidang**: Panjang ruas garis tegak lurus dari titik ke bidang tersebut. Proyeksikan titik ke garis perwakilan pada bidang, lalu cari jarak titik ke garis proyeksi tersebut."
        },
        {
          tipe: "catatan",
          isi: "Pada kubus $ABCD.EFGH$, jarak titik sudut ke diagonal ruang terdekat yang tidak melewatinya adalah $\\frac{1}{3}a\\sqrt{6}$, sedangkan jarak ke bidang diagonal terjauh adalah $\\frac{2}{3}a\\sqrt{3}$."
        },
        {
          tipe: "contoh",
          isi: "Pada kubus $ABCD.EFGH$ dengan rusuk 6 cm, tentukan jarak titik $C$ ke garis $AG$ (diagonal ruang).<br>Jawab: Buat segitiga $ACG$. Segitiga ini siku-siku di $C$ dengan sisi $AC = 6\\sqrt{2}$ cm (diagonal bidang), $CG = 6$ cm, dan $AG = 6\\sqrt{3}$ cm (diagonal ruang).<br>Gunakan perbandingan luas segitiga $ACG$:<br>$\\dfrac{1}{2} \\times AC \\times CG = \\dfrac{1}{2} \\times AG \\times d$ (dengan $d$ jarak $C$ ke $AG$).<br>$6\\sqrt{2} \\times 6 = 6\\sqrt{3} \\times d \\Rightarrow d = \\dfrac{6\\sqrt{2}}{\\sqrt{3}} = 2\\sqrt{6}$ cm."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "sudut-dimensi-tiga",
      judul: "Sudut dalam Ruang (Dimensi Tiga)",
      konsep: [
        {
          tipe: "teks",
          isi: "Sudut $\\theta$ ($0^\\circ \\le \\theta \\le 90^\\circ$) dalam dimensi tiga didefinisikan sebagai:",
        },
        {
          tipe: "teks",
          isi: "1. **Sudut Antara Dua Garis**: Jika berpotongan, langsung hitung sudutnya. Jika bersilangan, geser salah satu garis sejajar hingga memotong garis lainnya, lalu hitung sudut di titik potong baru menggunakan aturan kosinus."
        },
        {
          tipe: "teks",
          isi: "2. **Sudut Antara Garis dan Bidang**: Sudut antara garis tersebut dengan proyeksi garis pada bidang."
        },
        {
          tipe: "teks",
          isi: "3. **Sudut Antara Dua Bidang**: Sudut antara dua garis perwakilan yang masing-masing berada pada bidang pertama dan kedua, di mana kedua garis tersebut tegak lurus terhadap garis potong kedua bidang di titik yang sama."
        },
        {
          tipe: "catatan",
          isi: "Aturan Kosinus sangat berguna untuk mencari sudut pada segitiga sembarang yang dibentuk oleh elemen sudut dimensi tiga:"
        },
        {
          tipe: "rumus",
          isi: "\\cos \\theta = \\frac{a^2 + b^2 - c^2}{2ab}"
        },
        {
          tipe: "contoh",
          isi: "Pada kubus $ABCD.EFGH$, tentukan nilai kosinus sudut antara garis $AH$ dan bidang alas $ABCD$.<br>Jawab: Proyeksi garis $AH$ pada bidang alas adalah garis $AD$.<br>Sudut antara $AH$ dan bidang $ABCD$ sama dengan sudut antara $AH$ dan $AD$, yaitu $\\angle HAD$.<br>Karena segitiga $HAD$ siku-siku sama kaki di $D$ (karena $HD = AD$), sudut $\\angle HAD = 45^\\circ$.<br>Maka $\\cos 45^\\circ = \\dfrac{1}{2}\\sqrt{2}$."
        }
      ]
    }
  ]
};
