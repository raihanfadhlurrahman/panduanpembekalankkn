/**
 * Data Acuan Panduan Pembekalan KKN UII Reguler Angkatan 73
 */

const DOC_ACUAN = [
  {
    id: 1,
    tag: "kartuidentitaskkn",
    file: "image/kartuidentitaskkn.jpeg",
    title: "Kartu Identitas KKN Mahasiswa",
    category: "Dokumen Utama",
    desc: "Format Kartu Identitas KKN Mahasiswa. Wajib menempelkan pas foto, tanda tangan, dan selalu dibawa selama KKN.",
    rules: ["Wajib tempel pas foto & tanda tangan.", "Wajib dibawa setiap kali berkegiatan KKN."]
  },
  {
    id: 2,
    tag: "cover",
    file: "image/bukupedoman/cover.png",
    title: "Format Sampul (Cover) Laporan",
    category: "Format Laporan",
    desc: "Format Sampul / Cover Resmi Laporan Program KKN UII.",
    rules: ["Font Times New Roman 12pt, 1.5 spasi.", "Dicetak di kertas A4 Portrait."]
  },
  {
    id: 3,
    tag: "halamanpengesahan",
    file: "image/bukupedoman/halamanpengesahan.png",
    title: "Halaman Pengesahan Laporan KKN",
    category: "Format Laporan",
    desc: "Format Lembar Pengesahan Laporan KKN oleh Dosen Pembimbing Lapangan (DPL).",
    rules: ["Wajib disahkan dan ditandatangani DPL."]
  },
  {
    id: 4,
    tag: "suratselesaiunit",
    file: "image/bukupedoman/suratselesaiunit.png",
    title: "Surat Keterangan Selesai Tugas Unit",
    category: "Format Laporan",
    desc: "Surat pernyataan resmi bahwa seluruh tugas Unit KKN telah diselesaikan di wilayah lokasi.",
    rules: ["Menjadi lampiran utama Laporan KKN Unit."]
  },
  {
    id: 5,
    tag: "potensiwilayah1",
    file: "image/bukupedoman/potensiwilayah1.png",
    title: "Profil Potensi Wilayah - Hal. 1",
    category: "Profil Wilayah",
    desc: "Format Profil Potensi Wilayah Halaman 1.",
    rules: ["Spesifikasi wajib: Buku ukuran 30 x 30 cm.", "Softfile diunggah ke Google Drive & DPPM UII."]
  },
  {
    id: 6,
    tag: "potensiwilayah2",
    file: "image/bukupedoman/potensiwilayah2.png",
    title: "Profil Potensi Wilayah - Hal. 2",
    category: "Profil Wilayah",
    desc: "Format Profil Potensi Wilayah Halaman 2.",
    rules: ["Buku fisik 30 x 30 cm diserahkan ke Kepala Desa/Kelurahan."]
  },
  {
    id: 7,
    tag: "potensiwilayah3",
    file: "image/bukupedoman/potensiwilayah3.png",
    title: "Profil Potensi Wilayah - Hal. 3",
    category: "Profil Wilayah",
    desc: "Format Profil Potensi Wilayah Halaman 3.",
    rules: ["Buku fisik 30 x 30 cm diserahkan ke Kepala Desa/Kelurahan."]
  },
  {
    id: 8,
    tag: "pengesahanpotensiwilayah",
    file: "image/bukupedoman/pengesahanpotensiwilayah.png",
    title: "Pengesahan Profil Potensi Wilayah",
    category: "Profil Wilayah",
    desc: "Lembar Pengesahan Resmi Profil Potensi Wilayah oleh DPL & Pihak Desa.",
    rules: ["Ditandatangani oleh DPL dan Kepala Desa."]
  },
  {
    id: 9,
    tag: "serahterimapotensikedesa",
    file: "image/bukupedoman/serahterimapotensikedesa.png",
    title: "Serah Terima Potensi Wilayah (Desa)",
    category: "Profil Wilayah",
    desc: "Bukti tanda serah terima Dokumen Profil Potensi Wilayah untuk Pemerintah Desa / Kelurahan.",
    rules: ["Menjadi bukti sah penyerahan luaran desa."]
  },
  {
    id: 10,
    tag: "serahterimapotensikekecamatan",
    file: "image/bukupedoman/serahterimapotensikekecamatan.png",
    title: "Serah Terima Potensi Wilayah (Kecamatan)",
    category: "Profil Wilayah",
    desc: "Bukti tanda serah terima Dokumen Profil Potensi Wilayah untuk Kantor Kecamatan.",
    rules: ["Menjadi bukti sah penyerahan luaran kecamatan."]
  },
  {
    id: 11,
    tag: "sampulcatatankegiatanharian",
    file: "image/sampulcatatankegiatanharian.jpeg",
    title: "Sampul Buku Catatan Kegiatan Harian",
    category: "Form Individu",
    desc: "Cover/Sampul Buku Catatan Kegiatan Harian Mahasiswa KKN.",
    rules: ["Isi identitas cover secara lengkap dan benar.", "Wajib dibawa saat berkegiatan."]
  },
  {
    id: 12,
    tag: "isicatatankegiatanharian",
    file: "image/isicatatankegiatanharian.jpeg",
    title: "Isi Catatan Kegiatan Harian",
    category: "Form Individu",
    desc: "Form Isian Kegiatan Harian & Tanda Tangan Tokoh Masyarakat secara langsung.",
    rules: [
      "Wajib menggunakan PULPEN. Jika salah, CUKUP DICORET.",
      "DILARANG KERAS menggunakan Tipp-Ex / cairan penghapus.",
      "DILARANG KERAS memalsukan data & tanda tangan."
    ]
  },
  {
    id: 13,
    tag: "daftarhadirharian",
    file: "image/daftarhadirharian.jpeg",
    title: "Daftar Hadir Harian Posko",
    category: "Form Posko",
    desc: "Presensi kehadiran harian mahasiswa KKN di Posko (Piket Pagi/Malam).",
    rules: [
      "WAJIB DITEMPEL di Papan Pengumuman Posko.",
      "Presensi TIDAK BOLEH DIWAKILKAN.",
      "Disahkan oleh Kades/Kadus, DPL, dan Ketua Unit."
    ]
  },
  {
    id: 14,
    tag: "suratizinmeninggalkanlokasi",
    file: "image/suratizinmeninggalkanlokasi.jpeg",
    title: "Surat Izin Meninggalkan Lokasi",
    category: "Form Posko",
    desc: "Form izin resmi saat mahasiswa terpaksa meninggalkan lokasi KKN.",
    rules: [
      "Dibuat 2 RANGKAP (1 tinggal di Posko, 1 dibawa mahasiswa).",
      "Wajib ditandatangani tokoh masyarakat & dilaporkan ke DPL."
    ]
  },
  {
    id: 15,
    tag: "formatamplopdankop",
    file: "image/formatamplopdankop.jpeg",
    title: "Format Amplop & Kop Surat Unit",
    category: "Kit Posko",
    desc: "Format Sablon Amplop Resmi (110mm x 230mm) & Kertas Kop Surat Unit (HVS Folio 70g).",
    rules: [
      "Menggunakan Logo Resmi UII Berwarna.",
      "Kop Atas & Bawah batas 15mm dari tepi kertas."
    ]
  },
  {
    id: 16,
    tag: "formatplangdanstempel",
    file: "image/formatplangdanstempel.jpeg",
    title: "Format Plang Posko & Stempel Unit",
    category: "Kit Posko",
    desc: "Format Desain Papan Nama Posko (Dasar Biru, Tulisan Putih) & Cap Stempel Oval.",
    rules: [
      "Format Plang: POSKO UNIT [Kode Wilayah]-[Nomor Unit].",
      "Stempel bentuk Oval warna tinta Biru/Ungu."
    ]
  },
  {
    id: 17,
    tag: "matriksprogramunit",
    file: "image/matriksprogramunit.jpeg",
    title: "Matriks Program Unit KKN",
    category: "Form Posko",
    desc: "Matriks rencana & realisasi seluruh program kerja kelompok Unit.",
    rules: [
      "WAJIB DITEMPEL di Papan Pengumuman Posko.",
      "Arsir Merah = Perencanaan | Arsir Biru = Realisasi."
    ]
  },
  {
    id: 18,
    tag: "matriksprogramindividu",
    file: "image/matriksprogramindividu.jpeg",
    title: "Matriks Program Individu KKN",
    category: "Form Individu",
    desc: "Matriks rencana & realisasi program kerja perorangan mahasiswa.",
    rules: [
      "WAJIB DITEMPEL di Papan Pengumuman Posko.",
      "Arsir Merah = Perencanaan | Arsir Biru = Realisasi."
    ]
  },
  {
    id: 19,
    tag: "jadwalaktivitasdanbimbingan",
    file: "image/jadwalaktivitasdanbimbingan.jpeg",
    title: "Jadwal Aktivitas & Pembimbingan",
    category: "Form Individu",
    desc: "Format jadwal seluruh aktivitas mahasiswa dan bimbingan bersama DPL.",
    rules: ["Sebagai panduan timeline bimbingan DPL."]
  },
  {
    id: 20,
    tag: "daftarhadirpeserta",
    file: "image/daftarhadirpeserta.jpeg",
    title: "Presensi Peserta / Masyarakat",
    category: "Form Kegiatan",
    desc: "Daftar hadir peserta/masyarakat pada acara sosialisasi, pelatihan, atau penyuluhan.",
    rules: [
      "Digunakan setiap kali ada kegiatan yang melibatkan warga.",
      "Melampirkan tanda tangan pemateri & penanggung jawab kegiatan.",
      "Menjadi bukti sah laporan kegiatan KKN."
    ]
  }
];

const BEBAN_JAM = [
  {
    jenis: "Program Pokok Individu",
    pj: "Individu (disiplin ilmu)",
    minJam: 37,
    kategori: "Pokok",
    luaran: "Laporan kegiatan pengabdian masyarakat individu"
  },
  {
    jenis: "Program Pokok Unit",
    pj: "Unit (min. RT, 1 dakwah & 1 pemberdayaan)",
    minJam: 38,
    kategori: "Pokok",
    luaran: "Laporan kegiatan pengabdian unit"
  },
  {
    jenis: "Program Pokok Desa",
    pj: "Kesepakatan Lintas Unit",
    minJam: 25,
    kategori: "Pokok",
    luaran: "Masterplan, video, profil potensi desa, prototype unggulan"
  },
  {
    jenis: "Program Bantu Teman",
    pj: "Lintas Mahasiswa",
    minJam: 25,
    kategori: "Bantu",
    luaran: "Partisipasi membantu program rekan sejawat"
  },
  {
    jenis: "Program Bantu Masyarakat",
    pj: "Lintas Masyarakat",
    minJam: 25,
    kategori: "Bantu",
    luaran: "Partisipasi aktif kegiatan kemasyarakatan"
  }
];

const KODE_WILAYAH = [
  { kode: "SL", nama: "Kab. Sleman" },
  { kode: "BT", nama: "Kab. Bantul" },
  { kode: "GK", nama: "Kab. Gunung Kidul" },
  { kode: "KP", nama: "Kab. Kulon Progo" },
  { kode: "YK", nama: "Kota Yogyakarta" },
  { kode: "KL", nama: "Kab. Klaten" },
  { kode: "BY", nama: "Kab. Boyolali" },
  { kode: "MG", nama: "Kab. Magelang" },
  { kode: "PW", nama: "Kab. Purworejo" }
];
