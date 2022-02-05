function ganjilGenap(n) {
  return n % 2 === 0
    ? `${n} adalah bilangan genap`
    : `${n} adalah bilangan ganjil`
}

console.log(ganjilGenap(5)); // 5 adalah bilangan ganjil
console.log(ganjilGenap(0)); // 0 adalah bilangan genap
console.log(ganjilGenap(19127)); // 19127 adalah bilangan ganjil
