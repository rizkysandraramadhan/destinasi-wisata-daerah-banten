# BantenTrip — Destinasi Wisata Daerah Banten

Website sederhana bertema wisata Banten.

## Struktur
- `index.html` = struktur halaman
- `style.css` = desain/tampilan
- `script.js` = data wisata dan JavaScript

## Cara mengganti isi wisata
Buka `script.js`, lalu cari:

const wisata = [...]

Setiap objek memiliki:
- `nama`
- `lokasi`
- `gambar`
- `deskripsi`

Contoh:
{
  nama: "Nama Wisata Baru",
  lokasi: "Lokasi Wisata",
  gambar: "URL gambar",
  deskripsi: "Deskripsi wisata..."
}

Setelah diubah, simpan lalu buka ulang `index.html`.

## Catatan
Gambar pada contoh menggunakan URL Unsplash sehingga membutuhkan internet saat halaman dibuka.
