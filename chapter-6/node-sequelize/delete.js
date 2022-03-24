const { Product } = require('./models');


Product.destroy({
  where: {
    store: 'iBox',
  },
})
