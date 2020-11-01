const express = require("express");
const product = require("./models/product");
const app = express();
const productRouter = require("./routers/product");

const PORT = 4000;

app.use(express.json());
app.use("/products", productRouter);

function onListen() {
  console.log("listening to:", PORT);
}

app.listen(PORT, onListen);
