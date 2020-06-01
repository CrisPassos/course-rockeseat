const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.status(200).json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.status(200).json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(201).send("Removido");
  },
};
