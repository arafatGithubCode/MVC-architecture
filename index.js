const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  res.status(400).json({
    message: "Resources are not found",
  });
});
