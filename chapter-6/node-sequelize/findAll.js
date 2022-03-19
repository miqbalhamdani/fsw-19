const { Op } = require('sequelize');
const { Product } = require('./models');


Product.findAll({
  where: {
    price: {
      [Op.gt]: 19000000
    },
  },
}).then(products => console.log(products));
