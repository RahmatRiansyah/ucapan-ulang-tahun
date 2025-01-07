let index = 0;
const motivasi = [
  "Usia 21 adalah awal dari perjalanan yang lebih dewasa. Teruslah bermimpi dan berusaha!",
  "Jadilah versi terbaik dari dirimu. Setiap langkah kecil membawa kita lebih dekat ke tujuan.",
  "Hidup adalah tentang mengambil risiko. Jangan takut untuk mencoba hal-hal baru!",
  "Ingat, setiap kegagalan adalah pelajaran berharga. Jangan pernah menyerah!",
  "Selamat datang di dunia dewasa! Jadikan setiap hari berarti.",
];

function tampilkanMotivasi() {
  const pesan1 = document.getElementById("pesan1");
  const pesan2 = document.getElementById("pesan2");
  const pesan3 = document.getElementById("pesan3");
  const pesan4 = document.getElementById("pesan4");
  const pesan5 = document.getElementById("pesan5");

  pesan1.innerText = motivasi[index];
  pesan2.innerText = motivasi[(index + 1) % motivasi.length];
  pesan3.innerText = motivasi[(index + 2) % motivasi.length];
  pesan4.innerText = motivasi[(index + 3) % motivasi.length];
  pesan5.innerText = motivasi[(index + 4) % motivasi.length];

  index++;
  if (index >= motivasi.length) {
    index = 0;
  }
}

setInterval(tampilkanMotivasi, 3000); // Tampilkan pesan setiap 3 detik
