// ganjil genap
// GanjilGenap(5) => 5 adalah bilangan ganjil

function ganjilGenap(number) {
  if (number % 2 == 0) {
    return `${number} adalah bilangan genap`;
  } else {
    return `${number} adalah bilangan ganjil`;
  }
}

console.log(ganjilGenap(5)); // 5 adalah bilangan ganjil
console.log(ganjilGenap(0)); // 0 adalah bilangan genap
console.log(ganjilGenap(19127)); // 19127 adalah bilangan ganjil



// string manipulation
// StringManipulation('javascript')=> avascrip
function hapusPertamaTerakhir(item) {
  return item.slice(1, -1);
}

console.log(hapusPertamaTerakhir("javascript")); // avascrip
console.log(hapusPertamaTerakhir("fullstack")); // ullstac
console.log(hapusPertamaTerakhir("binar")); // ina
//summation
// Summation(5) => 1+2+3+4=10



function summation(num) {
  let hasil = 0;
  for (let i = 0; i <= num; i++) {
    hasil = hasil + i;
  }
  return hasil;
}

console.log(summation(2));
// 1 + 2 = 3
console.log(summation(8));
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
