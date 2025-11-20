// daftar gunung versi kamu (TIDAK DIUBAH)
const mountains = [ 
  { name: "Semeru", area: "Malang / Lumajang", elev: 3676, desc: "Gunung berapi stratovolcano aktif dengan puncak Mahameru dan kawah Jonggring Saloko.", fact: "Mengalami erupsi strombolian kecil tiap 10–20 menit.", difficulty: "Sulit" },
  { name: "Arjuno", area: "Pasuruan / Malang / Batu", elev: 3339, desc: "Gunung besar berselimut hutan dan sabana.", fact: "Memiliki banyak situs sejarah seperti Candi Sepilar.", difficulty: "Menengah – Sulit" },
  { name: "Welirang", area: "Mojokerto / Batu / Pasuruan", elev: 3156, desc: "Gunung vulkanik aktif dengan tambang belerang tradisional.", fact: "Namanya berarti Gunung Belerang.", difficulty: "Menengah" },
  { name: "Raung", area: "Banyuwangi / Bondowoso / Jember", elev: 3344, desc: "Gunung aktif dengan kaldera cincin terdalam di Indonesia.", fact: "Jalur puncaknya termasuk tersulit di Indonesia.", difficulty: "Sangat Sulit" },
  { name: "Argopuro", area: "Situbondo / Probolinggo", elev: 3088, desc: "Gunung dengan jalur pendakian terpanjang di Pulau Jawa.", fact: "Terkenal dengan Danau Taman Hidup.", difficulty: "Menengah – Sulit" },
  { name: "Lawu", area: "Magetan", elev: 3265, desc: "Gunung penuh situs sejarah dan ramah pemula.", fact: "Ada warung tertinggi di Indonesia milik Mbok Yem.", difficulty: "Mudah – Menengah" },
  // ... (seluruh daftar kamu tetap)
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

  list.appendChild(card);
});
