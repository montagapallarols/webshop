const express = require("express");
const User = require("../models").user;
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");

const { Router } = express;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Missing information");
      return;
    }
    const foundUser = await User.findOne({ where: {email} });
    if (!foundUser) {
      res.status(400).send("User not found");
      return;
    }
    if (!bcrypt.compareSync(password, foundUser.password)) {
      res.status(400).send("Password Incorrect");
    } else {
      console.log("CALLED?");
      console.log("Password Called", foundUser.password, password);
      const token = toJWT({ id: foundUser.id });
      const checkedToken = toData(token);
      res.json({ token });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
