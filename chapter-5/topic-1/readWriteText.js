const fs = require('fs');

fs.writeFileSync('./text.txt', 'i love javascript');

const inputText = fs.readFileSync('./text.txt', 'utf-8');

console.log(inputText);
