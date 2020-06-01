const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//start app
const app = express();

//start mongoose
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./src/models");

const Product = mongoose.model("Product");

//first route
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps Reacs",
    url: "https://github.com/facebook/react-native",
  });
  return res.send("Hello API");
});

app.listen(3001);
