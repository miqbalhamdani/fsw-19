// Function Declaration (ES5)
function namaLengkapDeclaration(list) {
  list.forEach((element) => {
    console.log(
      `${element.firstName} ${element.MiddleName} ${element.Lastname} `
    );
  });
}

// Arrow Function (ES6)
const namaLengkapArrow = (list) => {
  return list.forEach((element) => {
    console.log(
      `${element.firstName} ${element.MiddleName} ${element.Lastname} `
    );
  });
};


const list = [
  {
    firstName: "Muhammad",
    MiddleName: "Iqbal",
    Lastname: "Hamdani",
  },
  {
    firstName: "Binar",
    MiddleName: "",
    Lastname: "Academy",
  },
  {
    firstName: "Vanesa",
    MiddleName: "",
    Lastname: "",
  },
];
namaLengkapDeclaration(list);

namaLengkapArrow(list);
