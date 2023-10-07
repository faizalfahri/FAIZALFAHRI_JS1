// Menggunakan prompt jadi perlu run di html
// if else Statement
var nama = prompt("Masukkan Nama : ");
if (nama == "faizal") {
  document.write(nama + " Itu Benar Namaku <br>");
} else {
  document.write("Namaku faizal, bukan " + nama + "<br>");
}

// nested if Statement
var nilai = prompt("Masukkan Nilai Ujian : ");
if (nilai >= 90) {
  document.write("Nilai Ujian A <br>");
} else if (nilai >= 80) {
  document.write("Nilai Ujian B <br>");
} else if (nilai >= 70) {
  document.write("Nilai Ujian C <br>");
} else if (nilai >= 60) {
  document.write("Nilai Ujian D <br>");
} else {
  document.write("Kamu Gagal Ujian <br>");
}

// Switch Case Statement
var kegiatan = prompt("Anda Sedang Kerja, Makan, atau Minum : ");
switch (kegiatan) {
  case "Kerja":
    document.write("Kamu Sedang Kerja <br>");
    break;

  case "Makan":
    document.write("Kamu Sedang Makan <br>");
    break;

  case "Minum":
    document.write("Kamu Sedang Minum <br>");
    break;

  default:
    document.write("lanjutkan kegiatanmu <br>");
    break;
}

// For Statement
var array = ["Mangga", "Stroberi", "Semangka", "Anggur"];
for (let i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}

// While Statement
var kecepatan = 0;
while (kecepatan <= 120) {
  document.write("Kecepatan Mobil saat ini " + kecepatan + "<br>");
  kecepatan += 15;
}

// Do While Statement
var awal = 1;
var akhir = 10;
do {
  document.write("belajar berhitung dari " + awal + "<br>");
  awal++;
} while (awal <= akhir);

// function Statement
function sewaKamar() {
  var namaLengkap = prompt("Masukkan Nama Lengkap : ");
  document.write("Atas Nama " + namaLengkap + "<br>");

  var usia = prompt("Masukkan Umur (Hanya Angka): ");
  if (usia >= 17) {
    document.write("Dengan Usia " + usia + "<br>");
  } else {
    document.write("Anda Masih Dibawah Umur <br>");
  }

  var kamar = prompt("Ingin Sewa Kamar Berapa (1-5) : ");
  if ((kamar == 1, usia >= 17)) {
    document.write("Ini Kunci Kamar 1");
  } else if ((kamar == 2, usia >= 17)) {
    document.write("Ini Kunci Kamar 2");
  } else if ((kamar == 3, usia >= 17)) {
    document.write("Ini Kunci Kamar 3");
  } else if ((kamar == 4, usia >= 17)) {
    document.write("Ini Kunci Kamar 4");
  } else if ((kamar == 5, usia >= 17)) {
    document.write("Ini Kunci Kamar 5");
  } else {
    document.write("Gagal Memesan Kamar");
  }
}
sewaKamar();
