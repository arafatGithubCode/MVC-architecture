const path = require("path");

const products = require("../models/products.model");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/products.html"));
};

exports.saveProducts = (req, res) => {
  const productName = req.body.productName;
  const price = Number(req.body.price);
  const product = {
    productName,
    price,
  };
  products.push(product);
  res.status(202).json({
    success: true,
    products,
  });
};
