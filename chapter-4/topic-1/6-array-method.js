const binarStudent = [
  "Iqbal", // index 0
  "Dwi Bagus", // index 1
  "Reza", // index 2
];

console.log(binarStudent); // Iqbal, Dwi Bagus, Reza

binarStudent.push("Ilham"); // menambahkan 1 item yaitu ilham, kedalam array binarStudent, di paling akhir

console.log(binarStudent); // Iqbal, Dwi Bagus, Reza, Ilham

binarStudent.push("Frans", "Muklish"); // menambahkan 2 item yaitu Frans dan Muklish, kedalam array binarStudent, di paling akhir

console.log(binarStudent); // Iqbal, Dwi Bagus, Reza, Ilham, Frans, Muklish

binarStudent.pop(); // menghapus item dari array binarStudent, di paling akhir

console.log(binarStudent); // Iqbal, Dwi Bagus, Reza, Ilham, Frans

binarStudent.shift(); // menghapus item dari array binarStudent, di paling awal

console.log(binarStudent); // Dwi Bagus, Reza, Ilham, Frans

binarStudent.unshift("Eko"); // menambahkan item Eko, kedalam array binarStudent, dibagian paling awal array

console.log(binarStudent); // Eko, Dwi Bagus, Reza, Ilham, Frans
