// namaLengkap === sandwich
function namaLengkap (firstName, MiddleName, Lastname) {
  // firstName, MiddleName, Lastname === meat, vegetable, bread

  return `${firstName} ${MiddleName} ${Lastname} `;
}

// Ham lettuce wheat === Muhammad Iqbal Hamdani
const nama = namaLengkap('Muhammad', 'Iqbal', 'Hamdani');

console.log(nama);
