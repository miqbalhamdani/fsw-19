// namaLengkap === sandwich
function namaLengkap (firstName, middleName, lastName) {
  // firstName, middleName, lastName === meat, vegetable, bread

  return `${firstName} ${middleName} ${lastName} `;
}

// Ham lettuce wheat === Muhammad Iqbal Hamdani
const nama = namaLengkap('Muhammad', 'Iqbal', 'Hamdani');

console.log(nama);



function listNamaLengkap(list) {
  list.forEach((element) => {
    console.log(
      `${element.firstName} ${element.middleName} ${element.lastName} `
    );
  });
}

const list = [
  {
    firstName: "Muhammad",
    middleName: "Iqbal",
    lastName: "Hamdani",
  },
  {
    firstName: "Binar",
    middleName: "",
    lastName: "Academy",
  },
  {
    firstName: "Vanesa",
    middleName: "",
    lastName: "",
  },
];
listNamaLengkap(list);
