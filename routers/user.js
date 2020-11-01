const express = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const { Router } = express;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { fullName, password, email, isAdmin } = req.body;
    if (!password || !fullName || !email || isAdmin === null) {
      res.status(400).send("Missing information, oops");
    } else {
      const newUser = await User.create({
        fullName,
        password: bcrypt.hashSync(password, 10),
        email,
        isAdmin,
      });
      res.json(newUser);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
