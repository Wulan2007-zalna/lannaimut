// daftar gunung versi kamu (TIDAK DIUBAH)
const mountains = [
  { name: "Semeru", area: "Malang / Lumajang", elev: 3676, desc: "Gunung berapi stratovolcano aktif dengan puncak Mahameru dan kawah Jonggring Saloko.", fact: "Mengalami erupsi strombolian kecil tiap 10–20 menit.", difficulty: "Sulit" },
  { name: "Arjuno", area: "Pasuruan / Malang / Batu", elev: 3339, desc: "Gunung besar berselimut hutan dan sabana.", fact: "Memiliki banyak situs sejarah seperti Candi Sepilar.", difficulty: "Menengah – Sulit" },
  { name: "Welirang", area: "Mojokerto / Batu / Pasuruan", elev: 3156, desc: "Gunung vulkanik aktif dengan tambang belerang tradisional.", fact: "Namanya berarti Gunung Belerang.", difficulty: "Menengah" },
  { name: "Raung", area: "Banyuwangi / Bondowoso / Jember", elev: 3344, desc: "Gunung aktif dengan kaldera cincin terdalam di Indonesia.", fact: "Jalur puncaknya termasuk tersulit di Indonesia.", difficulty: "Sangat Sulit" },
  { name: "Argopuro", area: "Situbondo / Probolinggo", elev: 3088, desc: "Gunung dengan jalur pendakian terpanjang di Pulau Jawa.", fact: "Terkenal dengan Danau Taman Hidup.", difficulty: "Menengah – Sulit" },
  { name: "Lawu", area: "Magetan", elev: 3265, desc: "Gunung penuh situs sejarah dan ramah pemula.", fact: "Ada warung tertinggi di Indonesia milik Mbok Yem.", difficulty: "Mudah – Menengah" },
  { name: "Ijen", area: "Banyuwangi", elev: 2799, desc: "Gunung aktif dengan danau kawah asam terbesar di dunia.", fact: "Memiliki fenomena blue fire yang langka.", difficulty: "Mudah – Menengah" },
  { name: "Bromo", area: "Probolinggo / Pasuruan / Lumajang", elev: 2329, desc: "Ikon wisata dengan kaldera Tengger yang luas.", fact: "Salah satu gunung paling banyak difoto di dunia.", difficulty: "Mudah" },
  { name: "Kawi", area: "Malang / Blitar", elev: 2551, desc: "Gunung berhutan lebat dengan aura mistis.", fact: "Dikenal sebagai tempat ziarah.", difficulty: "Menengah" },
  { name: "Kelud", area: "Kediri / Blitar / Malang", elev: 1731, desc: "Gunung berapi sangat aktif.", fact: "Letusan 1919 memicu banjir lahar besar.", difficulty: "Mudah – Menengah" },
  { name: "Penanggungan", area: "Mojokerto", elev: 1653, desc: "Gunung kecil namun terjal.", fact: "Banyak situs candi era Majapahit.", difficulty: "Menengah" },
  { name: "Lamongan", area: "Lumajang", elev: 1663, desc: "Gunung berapi kecil dikelilingi ratusan maar.", fact: "Memiliki maar terbanyak di Indonesia.", difficulty: "Mudah – Menengah" },
  { name: "Anjasmoro", area: "Mojokerto / Jombang", elev: 2277, desc: "Gunung dengan banyak puncak dan jalur sepi.", fact: "Puncaknya panjang seperti bukit besar.", difficulty: "Menengah – Sulit" },
  { name: "Butak", area: "Malang / Blitar", elev: 2868, desc: "Gunung dengan sabana luas dan jalur tenang.", fact: "Bisa via jalur Panderman.", difficulty: "Menengah" },
  { name: "Panderman", area: "Kota Batu", elev: 2045, desc: "Gunung kecil favorit pemula.", fact: "Nama berasal dari tokoh Belanda Van der Man.", difficulty: "Mudah" },
  { name: "Wilis", area: "Kediri / Madiun / Nganjuk", elev: 2169, desc: "Gunung non-vulkanik luas.", fact: "Memiliki lebih dari 20 air terjun.", difficulty: "Menengah" },
  { name: "Wlingi", area: "Blitar", elev: 1200, desc: "Bukit vulkanik dekat Gunung Kelud.", fact: "Sering berubah karena letusan Kelud.", difficulty: "Mudah" },
  { name: "Klotok", area: "Kediri", elev: 536, desc: "Bukit kapur dengan jalur santai.", fact: "Spot sunset terkenal di Kediri.", difficulty: "Mudah" },
  { name: "Butak (Trenggalek)", area: "Trenggalek", elev: 1300, desc: "Gunung hijau kecil yang jarang diketahui.", fact: "Pendakinya sangat sedikit.", difficulty: "Mudah – Menengah" },
  { name: "Sadeng", area: "Kediri", elev: 1100, desc: "Gunung kapur bagian pegunungan selatan.", fact: "Dipakai untuk pengamatan satwa.", difficulty: "Mudah" },
  { name: "Ringgit", area: "Banyuwangi", elev: 1200, desc: "Gunung kecil berhutan lebat.", fact: "Jalurnya sangat sepi.", difficulty: "Menengah" },
  { name: "Rante", area: "Bondowoso", elev: 1194, desc: "Perbukitan hijau mengelilingi Bondowoso.", fact: "Populer untuk trail motor.", difficulty: "Mudah – Menengah" },
  { name: "Banyak", area: "Kota Batu", elev: 1315, desc: "Bukit paralayang terkenal.", fact: "Salah satu lokasi paralayang terbaik di Indonesia.", difficulty: "Mudah" },
  { name: "Bonggol", area: "Situbondo", elev: 1200, desc: "Perbukitan savana panas.", fact: "Jalurnya sangat terbuka dan panas.", difficulty: "Menengah" },
  { name: "Gumitir", area: "Jember / Banyuwangi", elev: 1200, desc: "Pegunungan yang memisahkan Jember dan Banyuwangi.", fact: "Dikenal dengan kisah mistis lokal.", difficulty: "Mudah – Menengah" },
  { name: "Betiri", area: "Jember / Banyuwangi", elev: 1223, desc: "Bagian dari Taman Nasional Meru Betiri.", fact: "Dulu habitat harimau Jawa.", difficulty: "Menengah" },
  { name: "Tumpak", area: "Tulungagung / Trenggalek", elev: 1500, desc: "Pegunungan kapur terjal dan berhutan.", fact: "Sangat jarang didaki.", difficulty: "Menengah – Sulit" },
  { name: "Mahameru Kecil", area: "Sekitar Semeru", elev: 2500, desc: "Punggungan dan bukit kecil di jalur Semeru.", fact: "Sering menjadi area pos bayangan.", difficulty: "Menengah" },
  { name: "Suket", area: "Bondowoso / Ijen", elev: 2950, desc: "Gunung kembar Ijen dengan padang rumput luas.", fact: "Puncaknya sangat lapang.", difficulty: "Menengah – Sulit" },
  { name: "Sumbing (Bondowoso)", area: "Bondowoso", elev: 2000, desc: "Bagian dari kompleks vulkanik Ijen.", fact: "Tidak punya jalur resmi.", difficulty: "Sulit" },
  { name: "Sigogor", area: "Nganjuk / Madiun", elev: 1300, desc: "Bagian dari pegunungan Wilis.", fact: "Populer untuk latihan pendakian.", difficulty: "Mudah – Menengah" },
  { name: "Bendo", area: "Magetan", elev: 1200, desc: "Bukit di dekat Telaga Sarangan.", fact: "Lokasi alternatif paralayang.", difficulty: "Mudah" },
  { name: "Gunung Kapur Lamongan", area: "Lamongan / Tuban", elev: 400, desc: "Rangkaian bukit karst.", fact: "Memiliki gua populer seperti Maharani.", difficulty: "Mudah" },
  { name: "Gresik Hills", area: "Gresik", elev: 300, desc: "Deretan bukit kapur pesisir utara Jawa.", fact: "Banyak ditambang batu kapur.", difficulty: "Mudah" },
  { name: "Watangan", area: "Lumajang", elev: 2600, desc: "Pegunungan penyangga Semeru.", fact: "Tidak memiliki jalur pendakian resmi.", difficulty: "Sulit" },
  { name: "Ayek-Ayek", area: "Jember", elev: 1000, desc: "Gunung berhutan rapat.", fact: "Populer untuk latihan pendaki lokal.", difficulty: "Menengah – Sulit" },
  { name: "Manggar", area: "Tuban", elev: 300, desc: "Bukit karst pesisir utara.", fact: "Penuh celah batu dan gua kecil.", difficulty: "Mudah" },
  { name: "Beji", area: "Kediri", elev: 900, desc: "Bukit hutan dengan jalur alternatif.", fact: "Dinamai dari sumber air Beji.", difficulty: "Mudah – Menengah" },
  { name: "Gending", area: "Lumajang", elev: 1200, desc: "Perbukitan vulkanik sekitar Semeru.", fact: "Area favorit pengamatan satwa.", difficulty: "Menengah" },
  { name: "Lingga", area: "Situbondo", elev: 900, desc: "Pegunungan kecil dengan savana.", fact: "Pemandangannya bisa sampai ke laut.", difficulty: "Mudah" },
  { name: "Tunggangan", area: "Bondowoso", elev: 1100, desc: "Pegunungan yang menghubungkan Bondowoso dan Ijen.", fact: "Sering dipakai jalur jeep offroad.", difficulty: "Mudah – Menengah" },
  { name: "Kombang", area: "Pasuruan", elev: 1400, desc: "Sub-puncak kompleks Arjuno–Welirang.", fact: "Puncaknya sangat sepi.", difficulty: "Menengah" },
  { name: "Kokop", area: "Bangkalan (Madura)", elev: 200, desc: "Bukit karst kecil.", fact: "Dipakai untuk tambang batu kapur.", difficulty: "Mudah" },
  { name: "Wates", area: "Lumajang", elev: 1400, desc: "Pegunungan dekat jalur Ranupani.", fact: "Merupakan buffer zone Semeru.", difficulty: "Menengah" },
  { name: "Sidoramping", area: "Malang", elev: 1200, desc: "Perbukitan di sisi Arjuno–Welirang.", fact: "Sering dilewati warga mencari hasil hutan.", difficulty: "Mudah – Menengah" },
];


// render card lucu
const list = document.getElementById("mountainList");

mountains.forEach((m) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${m.name} 🌸</h3>
    <p><strong>Area:</strong> ${m.area}</p>
    <p><strong>Kesulitan:</strong> ${m.difficulty}</p>
    <p class="elev-tag">🌄 ${m.elev} mdpl</p>
  `;

  // 🔥 Tambahkan aksi klik
  card.addEventListener("click", () => showPopup(m));

  list.appendChild(card);
});
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

function showPopup(m) {
  document.getElementById("popupTitle").textContent = m.name + " 🌸";
  document.getElementById("popupArea").textContent = "📍 Area: " + m.area;
  document.getElementById("popupElev").textContent = "🌄 Ketinggian: " + m.elev + " mdpl";
  document.getElementById("popupDesc").textContent = "📘 Deskripsi: " + m.desc;
  document.getElementById("popupFact").textContent = "✨ Fun Fact: " + m.fact;
  document.getElementById("popupDiff").textContent = "🎒 Kesulitan: " + m.difficulty;

  popup.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// klik luar popup untuk menutup
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});

