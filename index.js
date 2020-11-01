const express = require("express");
const product = require("./models/product");
const app = express();
const productRouter = require("./routers/product");
const userRouter = require("./routers/user");
const loginRouter = require("./routers/auth");

const PORT = 4000;

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/login", loginRouter);

function onListen() {
  console.log("listening to:", PORT);
}

app.listen(PORT, onListen);
