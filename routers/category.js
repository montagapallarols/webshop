const express = require("express");
const Category = require("../models").category;

const { Router } = express;

const router = new Router();

router.get("/:categoryId/products", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const allProductsOfCategory = await Category.findByPk();
    //   if (!categoryId || categoryId === ){
    //       res.status(400).send("")
    //   }
    res.json(allProductsOfCategory(categoryId));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
