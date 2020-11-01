const express = require("express");
const Order = require("../models").order;
const authMiddleware = require("../auth/middleware");

const { Router } = express;

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const newEmptyOrder = await Order.create()
    res.json(newEmptyOrder)
  } catch (error) {
    next(error);
  }
  next()
});

module.exports = router;