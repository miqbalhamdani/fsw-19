"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          name: "Create Template Engine Material",
          isDone: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Learning JWT",
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Create challenge 7",
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Create weekly report",
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reading a book today",
          isDone: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sleep earlier",
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
