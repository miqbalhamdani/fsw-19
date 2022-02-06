// imperative
function summationImperative(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Declarative
function summationDeclarative(n) {
  return (n * (n + 1)) / 2;
}

console.log(summationImperative(2));
console.log(summationDeclarative(2));
// 1 + 2 = 3

console.log(summationImperative(8));
console.log(summationDeclarative(8));
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
