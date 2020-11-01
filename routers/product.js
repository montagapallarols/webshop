const express = require("express");
const Product = require("../models").product;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
