// array list
const students = ["Iqbal", "Andi", "Budi", "Dodi"];

// menampilkan list data student dengan panjang karakter nama nya.
const studentData = students.map(function (item) {
  return `Nama saya ${item}, dengan panjang karakter nama adalah ${item.length}`;
});
console.log(studentData);

// array of object
const binarian = [
  {
    name: "Iqbal",
    score: 70,
  },
  {
    name: "Andi",
    score: 90,
  },
  {
    name: "Budi",
    score: 50,
  },
  {
    name: "Dodi",
    score: 80,
  },
];

// akan membuat list baru dengan list binarian dan score dengan format tertentu
const binarianData = binarian.map(function (item) {
  return `${item.name} dengan score ${item.score}`;
});
console.log(binarianData);
