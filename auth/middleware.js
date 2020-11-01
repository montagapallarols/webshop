const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
    const auth =
      req.headers.authorization && req.headers.authorization.split(" ");
    if (auth && auth[0] === "Bearer" && auth[1]) {
      try {
          console.log("AUTH", auth)
        const data = toData(auth[1]);
        console.log("DATA", data)
        const user = await User.findByPk(data.id);
        if (!user) {
          res.status(404).send("No user found");
        } else {
          req.user = user;
          next();
        }
      } catch (error) {
        res.status(400).send({
          message: `Error ${error.name}: ${error.message}`,
        });
      }
    } else {
      res.status(401).send({
        message: "Please supply some valid credentials",
      });
    }
}

module.exports = auth;

