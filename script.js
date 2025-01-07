// Tambahkan kode untuk menampilkan pesan
function showMessage() {
  const pesan = document.getElementById("pesan");
  pesan.innerText = "Selamat ulang tahun!";
}

// Tambahkan kode untuk menampilkan pesan
function tampilkanMotivasi() {
  const motivasi = [
    "Usia 21 adalah awal dari perjalanan yang lebih dewasa. Teruslah bermimpi dan berusaha!",
    "Jadilah versi terbaik dari dirimu. Setiap langkah kecil membawa kita lebih dekat ke tujuan.",
    "Hidup adalah tentang mengambil risiko. Jangan takut untuk mencoba hal-hal baru!",
    "Ingat, setiap kegagalan adalah pelajaran berharga. Jangan pernah menyerah!",
    "Selamat datang di dunia dewasa! Jadikan setiap hari berarti.",
  ];

  const randomIndex = Math.floor(Math.random() * motivasi.length);
  const pesan = document.getElementById("pesan");
  pesan.innerText = motivasi[randomIndex];
}
