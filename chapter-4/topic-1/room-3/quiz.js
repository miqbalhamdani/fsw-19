function ganjilGenap(n) {
  if (n % 2 == 0) {
    console.log(`${n} adalah Genap`);
  } else  {
    console.log(`${n} adalah ganjil`);
  }
}

console.log(ganjilGenap(5)); // 5 adalah bilangan ganjil
console.log(ganjilGenap(0)); // 0 adalah bilangan genap
console.log(ganjilGenap(19127)); // 19127 adalah bilangan ganjil



function hapusPertamaTerakhir(str) {
  str.slice(1);
  return str.slice(0, str.length - 1);
}
console.log(hapusPertamaTerakhir('javascript')); // avascrip
console.log(hapusPertamaTerakhir('fullstack')) // ullstac
console.log(hapusPertamaTerakhir('binar')) // ina
