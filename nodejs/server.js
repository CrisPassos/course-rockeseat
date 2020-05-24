const express = require("express");
const mongoose = require("mongoose");

//start app
const app = express();

//start mongoose
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//first route
app.get("/", (req, res) => {
  res.send("Hello APIIIII");
});

app.listen(3001);
