const fs = require('fs');

fs.writeFileSync('./readme.txt', 'i love javascript');

const inputText = fs.readFileSync('./readme.txt', 'utf-8');

console.log(inputText);
