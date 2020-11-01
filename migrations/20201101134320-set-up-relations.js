'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn("orders", "userId", { 
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      await queryInterface.addColumn("orderItems", "orderId", { 
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      await queryInterface.addColumn("orderItems", "productId", { 
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      await queryInterface.addColumn("products", "categoryId", { 
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn("orders", "userId");
      await queryInterface.removeColumn("orderItems", "orderId");
      await queryInterface.removeColumn("orderItems", "productId");
      await queryInterface.removeColumn("products", "categoryId");
     
  }
};
