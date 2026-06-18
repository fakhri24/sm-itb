// ============================================================
// Materi statis: Fungsi, Invers, Komposisi (topik #9)
// Lapisan data "materi rangkuman" — di repo, BUKAN di Supabase. (CLAUDE.md §6)
//
// Struktur:
//   topik { id, judul, urutan, subMateri[] }
//   subMateri { id, judul, konsep[] }
//   konsep (blok) { tipe, isi }
// ============================================================

export default {
  id: "fungsi-invers-komposisi",
  judul: "Fungsi, Invers, & Komposisi",
  urutan: 9,
  subMateri: [
    // ---------------------------------------------------------
    {
      id: "konsep-fungsi-domain",
      judul: "Konsep Fungsi, Domain, & Range",
      konsep: [
        {
          tipe: "teks",
          isi: "Fungsi (pemetaan) adalah relasi khusus yang menghubungkan setiap anggota himpunan daerah asal (Domain / $D_f$) dengan tepat satu anggota daerah kawan (Kodomain). Himpunan nilai yang dihasilkan disebut daerah hasil (Range / $R_f$).",
        },
        {
          tipe: "teks",
          isi: "Agar suatu fungsi terdefinisi pada bilangan real, nilai di dalam Domain harus memenuhi syarat-syarat khusus berikut:"
        },
        {
          tipe: "teks",
          isi: "1. **Fungsi Pecahan** $f(x) = \\frac{p(x)}{q(x)}$: Penyebut tidak boleh bernilai nol ($q(x) \\neq 0$).<br>2. **Fungsi Bentuk Akar** $f(x) = \\sqrt{g(x)}$: Nilai di dalam akar harus non-negatif ($g(x) \\ge 0$).<br>3. **Fungsi Logaritma** $f(x) = \\log_{a} g(x)$: Nilai numerus harus positif ($g(x) > 0$)."
        },
        {
          tipe: "catatan",
          isi: "Jika suatu fungsi memiliki bentuk gabungan (misal pecahan bentuk akar di penyebut), gabungkan semua syarat domain dengan irisan himpunan (operasi AND)."
        },
        {
          tipe: "contoh",
          isi: "Tentukan domain dari fungsi $f(x) = \\dfrac{2}{\\sqrt{x - 3}}$.<br>Jawab: Karena bentuk akar berada di penyebut, syaratnya adalah:<br>$x - 3 > 0 \\Rightarrow x > 3$.<br>Jadi Domain fungsi tersebut adalah $D_f = \\{x \\mid x > 3, \\ x \\in \\mathbb{R}\\}$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "fungsi-komposisi",
      judul: "Fungsi Komposisi",
      konsep: [
        {
          tipe: "teks",
          isi: "Fungsi komposisi menggabungkan dua fungsi secara berurutan, di mana luaran (output) fungsi pertama menjadi masukan (input) bagi fungsi kedua.",
        },
        {
          tipe: "rumus",
          isi: "(f \\circ g)(x) = f(g(x)) \\qquad (g \\circ f)(x) = g(f(x))"
        },
        {
          tipe: "teks",
          isi: "Sifat-sifat operasi fungsi komposisi:<br>- **Tidak Komutatif**: $(f \\circ g)(x) \\neq (g \\circ f)(x)$ (urutan penggabungan sangat berpengaruh).<br>- **Asosiatif**: $(f \\circ (g \\circ h))(x) = ((f \\circ g) \\circ h)(x)$."
        },
        {
          tipe: "teks",
          isi: "Mencari komponen fungsi penyusun komposisi:<br>1. Mencari fungsi luar $f(x)$ jika diketahui $(f \\circ g)(x)$ dan $g(x)$: Gunakan pemisalan $y = g(x)$ lalu ubah variabel ke $x$.<br>2. Mencari fungsi dalam $g(x)$ jika diketahui $(f \\circ g)(x)$ dan $f(x)$: Substitusikan langsung $g(x)$ ke bentuk aljabar $f(x)$."
        },
        {
          tipe: "catatan",
          isi: "Nilai dari $(f \\circ g)(a)$ dapat dihitung langsung dari belakang ke depan: cari nilai $b = g(a)$ terlebih dahulu, baru kemudian hitung nilai $f(b)$."
        },
        {
          tipe: "contoh",
          isi: "Diketahui $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 2x^2 - 3$. Tentukan fungsi $g(x)$.<br>Jawab: Sesuai definisi komposisi:<br>$f(g(x)) = 2x^2 - 3 \\Rightarrow 2g(x) + 1 = 2x^2 - 3$<br>$2g(x) = 2x^2 - 4 \\Rightarrow g(x) = x^2 - 2$."
        }
      ]
    },
    // ---------------------------------------------------------
    {
      id: "fungsi-invers",
      judul: "Fungsi Invers",
      konsep: [
        {
          tipe: "teks",
          isi: "Fungsi invers ($f^{-1}$) adalah operasi kebalikan dari suatu fungsi. Jika fungsi memetakan $x \\rightarrow y$, maka fungsi invers memetakan kembali $y \\rightarrow x$.",
        },
        {
          tipe: "rumus",
          isi: "f(x) = y \\iff f^{-1}(y) = x"
        },
        {
          tipe: "teks",
          isi: "Rumus cepat (*shortcut*) fungsi invers populer:"
        },
        {
          tipe: "rumus",
          isi: "f(x) = ax + b \\quad \\longrightarrow \\quad f^{-1}(x) = \\frac{x - b}{a}"
        },
        {
          tipe: "rumus",
          isi: "f(x) = \\frac{ax + b}{cx + d} \\quad \\longrightarrow \\quad f^{-1}(x) = \\frac{-dx + b}{cx - a} \\qquad \\left(x \\neq \\frac{a}{c}\\right)"
        },
        {
          tipe: "rumus",
          isi: "f(x) = a^x \\quad \\longrightarrow \\quad f^{-1}(x) = \\log_a x \\qquad f(x) = \\log_a x \\quad \\longrightarrow \\quad f^{-1}(x) = a^x"
        },
        {
          tipe: "teks",
          isi: "Sifat aljabar fungsi invers majemuk:"
        },
        {
          tipe: "rumus",
          isi: "(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x) \\qquad (f \\circ g)(a) = b \\iff g(a) = f^{-1}(b)"
        },
        {
          tipe: "catatan",
          isi: "Untuk mencari invers fungsi kuadrat $f(x) = ax^2 + bx + c$, manipulasi persamaannya menjadi bentuk kuadrat sempurna terlebih dahulu sebelum menarik akar."
        },
        {
          tipe: "contoh",
          isi: "Tentukan invers dari fungsi rasional $f(x) = \\dfrac{2x + 1}{3x - 4}$.<br>Jawab: Gunakan rumus cepat dengan $a=2, b=1, c=3, d=-4$:<br>$f^{-1}(x) = \\dfrac{-(-4)x + 1}{3x - 2} = \\dfrac{4x + 1}{3x - 2}$."
        }
      ]
    }
  ]
};
