const fs = require('fs');

const person = {
  name: 'Iqbal',
  age: 23,
  address: 'Bekasi',
};

fs.writeFileSync('./person.json', JSON.stringify(person));
