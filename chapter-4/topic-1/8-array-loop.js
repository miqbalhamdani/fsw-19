// array list
const students = ["Iqbal", "Andi", "Budi", "Dodi"];

// perulangan menggunakan foreach
students.forEach(function (item) {
  console.log(`Nama saya adalah ${item}`);
});

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

// perulangan menggunakan foreach
binarian.forEach(function (item) {
  console.log(`${item.name} memiliki score ${item.score}.`);
});
