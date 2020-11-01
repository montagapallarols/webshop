"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Book",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
