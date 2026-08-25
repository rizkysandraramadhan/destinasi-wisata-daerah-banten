/* Tempat wisata */

const wisata = [
  {
    nama: "Bukit Waruwangi",
    lokasi: "📍Padarincang, Kabupaten Serang, Banten",
    gambar: "images.jpeg",
    deskripsi: "Bukit Waruwangi adalah destinasi wisata alam berkonsep agro-edukasi dan bukit hijau yang terletak di Banten. Tempat ini menawarkan pemandangan perbukitan luas menyerupai padang rumput di Selandia Baru (New Zealand)"
  },
  {
    nama: "Pantai Carita",
    lokasi: "📍Kecamatan Carita, Kabupaten Pandeglang, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.21.52.jpeg",
    deskripsi: "Pantai Carita adalah salah satu destinasi wisata bahari paling populer di Banten yang terkenal dengan hamparan pasir putih yang landai dan ombak yang relatif tenang. Pantai ini menyajikan pemandangan langsung ke arah Selat Sunda serta latar panorama Gunung Anak Krakatau."
  },
  {
    nama: "Taman Nasional Ujung Kulon",
    lokasi: "📍Kecamatan Sumur dan Cimanggu, Kabupaten Pandeglang, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.38.09.jpeg",
    deskripsi: "Taman Nasional Ujung Kulon (TNUK) adalah kawasan konservasi alam terpelihara dan Situs Warisan Dunia UNESCO yang terletak di ujung paling barat pulau Jawa. Taman nasional ini terkenal sebagai habitat alami terakhir bagi satwa langka yang dilindungi di dunia, yaitu Badak Jawa (Rhinoceros sondaicus)."
  },
  {
    nama: "Pantai Sawarna",
    lokasi: "📍Desa Sawarna, Kecamatan Baya, Kabupaten Lebak, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.21.51.jpeg",
    deskripsi: "Pantai Sawarna adalah kawasan wisata pesisir ikonik di Banten yang terkenal dengan perpaduan bentang alam spektakuler, mulai dari lautan lepas Samudra Hindia, jajaran karang menjulang, hingga ombak besar yang menjadi surga bagi para peselancar."
  },
  {
    nama: "Negri di atas awan Citorek",
    lokasi: "📍Kecamatan Cibeber, Kabupaten Lebak, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.45.54.jpeg",
    deskripsi: "Negeri di Atas Awan Citorek (Gunung Luhur) adalah destinasi wisata dataran tinggi populer di Banten yang menyajikan pemandangan lautan awan putih tebal menyelimuti lembah pada pagi hari, memberikan sensasi berdiri di atas awan."
  },
  {
    nama: "Curug Putri",
    lokasi: "📍Desa Sukarame, Kecamatan Carita, Kabupaten Pandeglang, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.47.34.jpeg",
    deskripsi: "Curug Putri Tahura adalah destinasi wisata alam unik berupa aliran sungai jernih yang mengapit tebing-tebing batu tinggi dan megah."
  },
  {
    nama: "Curug Ciajeng",
    lokasi: "📍Desa Cikolelet, Kecamatan Cinangka, Kabupaten Serang, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.51.17.jpeg",
    deskripsi: "Curug Ciajeng adalah salah satu tersembunyi (hidden gem) wisata air terjun di Banten yang menawarkan suasana alami, asri, dan relatif belum banyak terjamah oleh keramaian wisatawan."
  },
  {
    nama: "Pulau Merak Besar",
    lokasi: "📍Kelurahan Taman Sari, Kecamatan Pulomerak, Kota Cilegon, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.53.08.jpeg",
    deskripsi: "Pulau Merak Besar adalah destinasi wisata bahari dan hutan lindung terdekat dari Pelabuhan Merak yang menawarkan perpaduan pemandangan pesisir, pepohonan rindang, serta lintasan kapal-kapal besar yang melintas di Selat Sunda."
  },
  {
    nama: "Museum Situs Kepurbakalaan Banten Lama",
    lokasi: "📍Komplek Cagar Budaya Banten Lama, Kecamatan Kasemen, Kota serang, Banten",
    gambar: "WhatsApp Image 2026-08-22 at 15.17.49.jpeg",
    deskripsi: "Museum Situs Kepurbakalaan Banten Lama adalah museum sejarah yang menyimpan berbagai benda cagar budaya dan artefak peninggalan masa kejayaan Kesultanan Banten serta peradaban purbakala di wilayah Banten."
  }
];

const grid = document.getElementById("wisataGrid");

grid.innerHTML = wisata.map(item => `
  <article class="card">
    <img class="card-image" src="${item.gambar}" alt="${item.nama}">
    <div class="card-body">
      <div class="card-location">${item.lokasi}</div>
      <h3>${item.nama}</h3>
      <p>${item.deskripsi}</p>
    </div>
  </article>
`).join("");
