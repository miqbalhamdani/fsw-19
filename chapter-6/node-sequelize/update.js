const { Product } = require('./models');


Product.update({
  description: 'Storage 512GB Ram 16GB 13Inc',
}, {
  where: {
    id: 1,
  },
});
