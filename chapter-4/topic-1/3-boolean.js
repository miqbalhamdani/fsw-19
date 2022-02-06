const nilai = 103;
let hasil = "Tidak Lulus";

// boolean biasa dijadikan sebagai sebuah kondisi, sehingga menghasilkan nilai true atau false
if (nilai === 100) {
  hasil = "Sempurna";
} else if (nilai >= 70) {
  hasil = "Diatas Rata Rata";
} else if (nilai >= 50) {
  hasil = "Lulus";
}

console.log(hasil);
