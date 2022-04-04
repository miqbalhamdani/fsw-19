'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Publisher.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publisher',
  });
  return Publisher;
};
