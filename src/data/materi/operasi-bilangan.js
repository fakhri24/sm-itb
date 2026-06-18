// ============================================================
// Materi statis: Operasi Bilangan (topik #1)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "operasi-bilangan",
  judul: "Operasi Bilangan",
  urutan: 1,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "sifat-urutan-operasi",
      judul: "Sifat & Urutan Operasi Campuran",
      konsep: [
        {
          tipe: "teks",
          isi: "Operasi aritmetika dasar pada bilangan real mengikuti sifat-sifat aljabar penting berikut:",
        },
        {
          tipe: "teks",
          isi: "1. **Sifat Komutatif** (pertukaran): $a + b = b + a$ dan $a \\times b = b \\times a$."
        },
        {
          tipe: "teks",
          isi: "2. **Sifat Asosiatif** (pengelompokan): $(a + b) + c = a + (b + c)$ dan $(a \\times b) \\times c = a \\times (b \\times c)$."
        },
        {
          tipe: "teks",
          isi: "3. **Sifat Distributif** (penyebaran): $a \\times (b + c) = a \\times b + a \\times c$."
        },
        {
          tipe: "teks",
          isi: "Saat melakukan perhitungan campuran, urutan operasi (KABATAKU / PEMDAS) wajib dipatuhi:",
        },
        {
          tipe: "rumus",
          isi: "\\text{Kurung ()} \\quad \\longrightarrow \\quad \\text{Pangkat/Eksponen} \\quad \\longrightarrow \\quad \\text{Perkalian/Pembagian} \\quad \\longrightarrow \\quad \\text{Penjumlahan/Pengurangan}"
        },
        {
          tipe: "teks",
          isi: "Perkalian dan pembagian memiliki tingkat prioritas yang sama, sehingga dihitung berurutan dari kiri ke kanan. Hal yang sama berlaku untuk penjumlahan dan pengurangan."
        },
        {
          tipe: "catatan",
          isi: "Pembagian oleh bilangan nol ($a : 0$) **tidak terdefinisi** dalam sistem bilangan real. Hati-hati dengan tanda negatif: $-3^2 = -(3 \\times 3) = -9$, sedangkan $(-3)^2 = (-3) \\times (-3) = 9$."
        },
        {
          tipe: "contoh",
          isi: "Hitunglah hasil dari $12 - 3 \\times 2 + 8 : 4$. <br>Langkah: perkalian dan pembagian dilakukan terlebih dahulu: $12 - 6 + 2$. Kemudian lakukan pengurangan dan penjumlahan dari kiri ke kanan: $6 + 2 = 8$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "pecahan-desimal-persen",
      judul: "Pecahan, Desimal, & Persentase",
      konsep: [
        {
          tipe: "teks",
          isi: "Pecahan biasa dinyatakan sebagai $\\frac{a}{b}$ dengan $a$ sebagai pembilang dan $b \\neq 0$ sebagai penyebut.",
        },
        {
          tipe: "teks",
          isi: "Sifat operasi hitung pecahan pecahan:",
        },
        {
          tipe: "rumus",
          isi: "\\text{Penjumlahan/Pengurangan (samakan penyebut):} \\quad \\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}"
        },
        {
          tipe: "rumus",
          isi: "\\text{Perkalian:} \\quad \\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} \\qquad \\text{Pembagian:} \\quad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}"
        },
        {
          tipe: "teks",
          isi: "**Persentase** adalah pecahan dengan penyebut 100, dilambangkan dengan $\\%$. Sedangkan **Desimal** adalah representasi nilai pecahan dalam basis 10 menggunakan koma desimal.",
        },
        {
          tipe: "rumus",
          isi: "p\\% = \\frac{p}{100} \\qquad 0,25 = \\frac{25}{100} = \\frac{1}{4} \\qquad 12,5\\% = 0,125 = \\frac{1}{8}"
        },
        {
          tipe: "catatan",
          isi: "Untuk mempermudah perhitungan operasi campuran, biasanya lebih cepat mengubah semua bentuk bilangan (desimal/persen) menjadi pecahan biasa terlebih dahulu."
        },
        {
          tipe: "contoh",
          isi: "Hitunglah hasil dari $\\dfrac{1}{2} + 0,25 \\times 4$. <br>Ubah desimal menjadi pecahan: $\\dfrac{1}{2} + \\left(\\dfrac{1}{4} \\times 4\\right) = \\dfrac{1}{2} + 1 = 1\\dfrac{1}{2}$ atau $1,5$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "faktorisasi-kpk-fpb",
      judul: "Faktorisasi & KPK/FPB",
      konsep: [
        {
          tipe: "teks",
          isi: "**Faktorisasi Prima** adalah menyatakan bilangan sebagai hasil perkalian dari faktor-faktor primanya.",
        },
        {
          tipe: "teks",
          isi: "Misalnya faktorisasi dari $12$ dan $18$ adalah:",
        },
        {
          tipe: "rumus",
          isi: "12 = 2^2 \\times 3 \\qquad 18 = 2 \\times 3^2"
        },
        {
          tipe: "teks",
          isi: "1. **FPB (Faktor Persekutuan Terbesar)** diperoleh dari perkalian faktor-faktor prima yang sama dengan mengambil **pangkat terkecil**."
        },
        {
          tipe: "rumus",
          isi: "\\text{FPB}(12, 18) = 2^1 \\times 3^1 = 6"
        },
        {
          tipe: "teks",
          isi: "2. **KPK (Kelipatan Persekutuan Terkecil)** diperoleh dari perkalian seluruh faktor prima (yang sama maupun beda) dengan mengambil **pangkat terbesar**."
        },
        {
          tipe: "rumus",
          isi: "\\text{KPK}(12, 18) = 2^2 \\times 3^2 = 4 \\times 9 = 36"
        },
        {
          tipe: "teks",
          isi: "Hubungan penting antara KPK dan FPB untuk dua bilangan bulat $a$ dan $b$ adalah:",
        },
        {
          tipe: "rumus",
          isi: "\\text{KPK}(a, b) \\times \\text{FPB}(a, b) = a \\times b"
        },
        {
          tipe: "catatan",
          isi: "Soal cerita FPB biasanya menanyakan tentang pembagian benda menjadi beberapa kelompok secara merata (kata kunci: *sama banyak*, *jumlah maksimal*). Soal cerita KPK biasanya menanyakan tentang kejadian berulang secara bersamaan (kata kunci: *bersama-sama lagi*, *setiap... sekali*)."
        },
        {
          tipe: "contoh",
          isi: "Lampu A menyala setiap 8 detik, lampu B setiap 12 detik. Jika menyala bersama pada detik ke-0, kapan mereka menyala bersama lagi?<br>Jawab: Cari KPK dari 8 ($2^3$) dan 12 ($2^2 \\times 3$). KPK = $2^3 \\times 3 = 24$. Jadi mereka menyala bersama setiap 24 detik sekali."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "pola-bilangan",
      judul: "Pola Bilangan Sederhana",
      konsep: [
        {
          tipe: "teks",
          isi: "Pola bilangan adalah susunan angka yang memiliki aturan pembentukan tertentu. Pola dasar yang sering diujikan antara lain:",
        },
        {
          tipe: "teks",
          isi: "1. **Pola Aritmetika** (selisih antar suku selalu sama/tetap $d$):"
        },
        {
          tipe: "rumus",
          isi: "U_n = a + (n-1)d \\qquad \\text{Contoh: } 3, 7, 11, 15, \\dots \\quad (d = 4)"
        },
        {
          tipe: "teks",
          isi: "2. **Pola Geometri** (perbandingan/rasio antar suku selalu tetap $r$):"
        },
        {
          tipe: "rumus",
          isi: "U_n = a \\cdot r^{n-1} \\qquad \\text{Contoh: } 2, 6, 18, 54, \\dots \\quad (r = 3)"
        },
        {
          tipe: "teks",
          isi: "3. **Pola Khusus Lainnya**:"
        },
        {
          tipe: "teks",
          isi: "- Pola kuadrat/pangkat: $1, 4, 9, 16, 25, \\dots$ ($n^2$)<br>- Pola Fibonacci (suku berikutnya adalah jumlah dua suku sebelumnya): $1, 1, 2, 3, 5, 8, 13, \\dots$"
        },
        {
          tipe: "catatan",
          isi: "Pada tes potensi akademik / logika angka, jika selisih antar suku tidak konstan, cobalah periksa selisih tingkat kedua (aritmetika bertingkat), pola selang-seling (loncat suku), atau pola operasi matematika berulang (misal: $+2, \\times 3, +2, \\times 3$)."
        },
        {
          tipe: "contoh",
          isi: "Tentukan suku berikutnya dari pola: $2, 5, 10, 17, 26, \\dots$<br>Jawab: Perhatikan selisih antar sukunya: $+3, +5, +7, +9$. Selisihnya membentuk barisan ganjil, sehingga selisih berikutnya adalah $+11$. Suku berikutnya adalah $26 + 11 = 37$. (Pola ini juga setara dengan $n^2 + 1$)."
        }
      ]
    }
  ]
};
