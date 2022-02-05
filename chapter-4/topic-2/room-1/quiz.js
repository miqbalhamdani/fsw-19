// soal 1

function ganjilGenap(n) {
  if (n % 2 === 0) {
      return `${n} adalah bilangan genap`;
  } else {
      return `${n} adalah bilangan ganjil`;
  }
}

console.log(ganjilGenap(5)); // 5 adalah bilangan ganjil
console.log(ganjilGenap(0)); // 0 adalah bilangan genap
console.log(ganjilGenap(19127)); // 19127 adalah bilangan ganjil



// soal 2

function hapusPertamaTerakhir(str) {
  return str.substring(1, str.length - 1);
}

console.log(hapusPertamaTerakhir('javascript')); // avascrip
console.log(hapusPertamaTerakhir('fullstack')) // ullstac
console.log(hapusPertamaTerakhir('binar')) // ina



// Soal 3

function summation(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
}

console.log(summation(2))
// 1 + 2 = 3
console.log(summation(8))
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
