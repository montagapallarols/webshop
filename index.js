const express = require("express");
const product = require("./models/product");
const app = express();
const productRouter = require("./routers/product");
<<<<<<< HEAD
const userRouter = require("./routers/user");
const loginRouter = require("./routers/auth");
=======
const categoryRouter = require("./routers/category")
>>>>>>> d68470d1c25a703f676af927ee254478158584aa

const PORT = 4000;

app.use(express.json());
app.use("/products", productRouter);
<<<<<<< HEAD
app.use("/users", userRouter);
app.use("/login", loginRouter);
=======
app.use("/categories", categoryRouter)
>>>>>>> d68470d1c25a703f676af927ee254478158584aa

function onListen() {
  console.log("listening to:", PORT);
}

app.listen(PORT, onListen);
