// imperative
function summation(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


// Declarative
function summation(n) {
  return num * (num + 1) / 2;
}


console.log(summation(2))
// 1 + 2 = 3
console.log(summation(8))
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
