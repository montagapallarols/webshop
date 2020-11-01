const express = require("express");
const Category = require("../models").category;
const Product = require("../models").product;

const { Router } = express;

const router = new Router();

router.get("/:categoryId/products", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const allProductsOfCategory = await Product.findAll({where: categoryId});
        res.json(allProductsOfCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
