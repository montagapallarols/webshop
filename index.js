const express = require("express");
const product = require("./models/product");
const app = express();
const productRouter = require("./routers/product");
const userRouter = require("./routers/user");

const PORT = 4000;

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);

function onListen() {
  console.log("listening to:", PORT);
}

app.listen(PORT, onListen);
