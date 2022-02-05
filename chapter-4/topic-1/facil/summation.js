function summation (num) {
  let x = 0;

  for (let i = 1; i <= num; i++) {
    x += i;
  }

  return x;
}

 console.log(summation(2))
 // 1 + 2 = 3
 console.log(summation(8))
 // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
