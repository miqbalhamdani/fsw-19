// array list
const students = ["Iqbal", "Andi", "Budi", "Dodi"];

// membuat variable filteredStudents, untuk menampung hasil kondisi dari fungsi filter.
const filteredStudents = students.filter(function (item) {
  return item.length >= 5; // akan mengembalikan students dengan total karakter lebih dari sama dengan 5
});
console.log(filteredStudents);

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

// akan membuat list baru dengan list binarian yang memiliki score di atas 50
const filteredBinarian = binarian.filter(function (item) {
  return item.score > 50; // akan mengembalikan students dengan total karakter lebih dari 50
});
console.log(filteredBinarian);
