const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.status(200).json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.status(200).json(product);
  },
};
