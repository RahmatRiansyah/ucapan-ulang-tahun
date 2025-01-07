const motivasi = [
  "Usia 21 adalah awal dari perjalanan yang lebih dewasa.",
  "Teruslah bermimpi dan berusaha!",
  "Jadilah versi terbaik dari dirimu.",
  "Setiap langkah kecil membawa kita lebih dekat ke tujuan.",
  "Hidup adalah tentang mengambil risiko.",
  "Jangan takut untuk mencoba hal-hal baru!",
  "Ingat, setiap kegagalan adalah pelajaran berharga.",
  "Jangan pernah menyerah!",
  "Selamat datang di dunia dewasa!",
  "Jadikan setiap hari berarti.",
];

function tampilkanMotivasi() {
  let index = 0;
  const pesan = document.getElementById("pesan");
  function tampilkanPesan() {
    pesan.innerText = motivasi[index];
    index++;
    if (index >= motivasi.length) {
      index = 0;
    }
  }
  setInterval(tampilkanPesan, 2000); // Tampilkan pesan setiap 2 detik
}

tampilkanMotivasi();
