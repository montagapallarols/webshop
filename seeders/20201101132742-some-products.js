"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Jacket",
          description: "A jacket",
          priceInEuroCents: 30000,
          imageUrl:
            "https://www.pinterest.co.uk/pin/Ac68YCR0AHwP8XC14BNF4St4Sgi1HJhh7DVDcsci08Lr10K_RVxgoOs/",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chocolate",
          description: "Beans roasted, with milk and stuff",
          priceInEuroCents: 200,
          imageUrl:
            "https://www.prozis.com/us/en/prozis/15-x-mini-zero-milk-chocolate-10-g",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Harry Potter",
          description: "He's a wizzard",
          priceInEuroCents: 2000,
          imageUrl:
            "https://www.penguinrandomhouse.com/books/158322/harry-potter-and-the-deathly-hallows-by-j-k-rowling/9780739360385/",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPhone 11",
          description: "Same as 10 but newer",
          priceInEuroCents: 100000,
          imageUrl:
            "https://www.mediamarkt.nl/nl/product/_apple-iphone-11-64-gb-wit-1637524.html",
            categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
