const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//start app
const app = express();
//permitir que faça o envio de dados em formato em JSON
app.use(express.json());

//start mongoose
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
