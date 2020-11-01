const express = require("express");
const product = require("./models/product");
const app = express();
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category")

const PORT = 4000;

app.use(express.json());
app.use("/products", productRouter);
app.use("/categories", categoryRouter)

function onListen() {
  console.log("listening to:", PORT);
}

app.listen(PORT, onListen);
