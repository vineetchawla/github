const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const getDataRoute = require("./routes/getData");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to github application." });
});

app.use(getDataRoute);

module.exports = app;
