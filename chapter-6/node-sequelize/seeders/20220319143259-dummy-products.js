'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Products', [{
      name: 'Macbook Pro 2022',
      description: 'Storage 256GB Ram 8GB 16Inc',
      price: 29000000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Macbook Air 2022',
      description: 'Storage 256GB Ram 8GB 13Inc',
      price: 19000000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
