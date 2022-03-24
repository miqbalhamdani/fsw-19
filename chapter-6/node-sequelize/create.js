const { Product } = require('./models');

Product.create({
  name: 'Iphone X',
  description: '8GB White',
  price: 9000000,
  store: 'iBox',
}).then(res => console.log(res));

Product.create({
  name: 'Samsung S22',
  description: '8GB Black',
  price: 12000000,
  store: 'iBox',
}).then(res => console.log(res));
