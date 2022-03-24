const { Product } = require('./models');

Product.findOne({
  where: {
    name: 'Iphone X',
  },
}).then(products => console.log(products));
