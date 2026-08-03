# 📋 Panduan Pembekalan KKN UII Reguler Angkatan 73 (Wedomartani)

Website interaktif **tanpa database** yang dirancang khusus untuk mahasiswa KKN Universitas Islam Indonesia (UII) Reguler Angkatan 73 di wilayah **Wedomartani**. 

Website ini berfungsi sebagai acuan cepat dan ringkas untuk mengecek keperluan pembekalan, aturan beban jam, tahapan mingguan, tata tertib posko, serta 20 template/dokumen resmi tanpa perlu membuka buku panduan manual satu per satu.

---

## ✨ Keunggulan & Fitur Utama

- **Murni HTML/CSS/JS (Tanpa Database & Tanpa Framework Heavy)**: Siap dijalankan langsung di browser mana pun tanpa butuh instalasi server atau `npm`.
- **Desain UII Classic Clean & Minimalist**: Menggunakan palet warna khas UII (Navy `#0B2545` & Gold Accent `#D4AF37`) dan ikon vektor SVG modern yang bersih tanpa emoji.
- **20 Galeri & Lightbox Preview Dokumen**: Klik pada kartu atau tabel acuan untuk memperbesar sampel dokumen/form resmi (Plang Posko, Stempel, Kop Amplop, Matriks Program, Surat Izin, dll.) lengkap dengan aturan pengisiannya.
- **Pencarian Instan (Live Search)**: Cari nama form, tag dokumen, atau aturan pembekalan secara langsung saat mengetik.
- **Tabel Beban Jam & Timeline Mingguan**: Rincian syarat minimal 100 jam program pokok + 50 jam program bantu serta alokasi Minggu 1 s.d. Minggu 4.
- **Tata Tertib & Larangan Administrasi**: Checklist kewajiban posko serta peringatan penting (penggunaan pulpen, larangan Tipp-Ex, dan larangan pemalsuan data/TTD).

---

## 📂 Struktur Direktori Proyek

```text
panduanpembekalan-webapp/
├── index.html                  # Struktur utama website (HTML5 semantic)
├── README.md                   # Dokumentasi proyek
├── .gitignore                  # Berkas pengecualian Git
├── css/
│   └── styles.css              # Stylesheet UII Classic Clean & Minimalist
├── js/
│   ├── data.js                 # Dataset terstruktur 20 dokumen acuan & beban jam
│   └── app.js                  # Logika interaktif, live search, & lightbox modal
├── dokumen/
│   └── pembekalan.md           # Teks sumber asli panduan pembekalan
└── image/                      # Aset gambar sampel & template dokumen acuan
    └── bukupedoman/            # Sampel halaman buku pedoman (cover, pengesahan, dll.)
```

---

## 🚀 Cara Menjalankan Project

1. **Langsung di Browser (Sangat Mudah)**:
   - Buka folder `panduanpembekalan-webapp`.
   - Klik 2x pada file **`index.html`**.
   - Website akan langsung terbuka sempurna di Google Chrome, Microsoft Edge, Firefox, atau Safari HP/Laptop.

2. **Menggunakan Local Server (Opsional)**:
   - Menggunakan VS Code Extension **Live Server**.
   - Atau jalankan dengan Node.js:
     ```bash
     npx serve .
     ```
   - Akses melalui `http://localhost:3000` (atau port tertera).

3. **Deploy Gratis (Opsional)**:
   - Dapat di-host secara gratis di **GitHub Pages**, **Vercel**, atau **Netlify** dengan hanya mengunggah seluruh isi folder ini.

---

## 🛠️ Teknologi Yang Digunakan

- **HTML5**: Struktur halaman semantik & bebas aksesibilitas.
- **Vanilla CSS3**: CSS custom properties, grid layout responsif, & backdrop blur modal.
- **Vanilla JavaScript (ES6+)**: Manipulation DOM tanpa pustaka pihak ketiga.
- **Google Fonts**: *Plus Jakarta Sans*.

---

## 📜 Lisensi & Penggunaan

Proyek ini dibuat untuk membantu kegiatan operasional dan administrasi **Mahasiswa KKN UII Reguler Angkatan 73 Wedomartani**.
