const { Product } = require('./models');

Product.create({
  name: 'Iphone X',
  description: '8GB Black',
  price: 9000000
}).then(res => console.log(res));
