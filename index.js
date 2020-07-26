const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const getDataRoute = require("./routes/getData");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to github application." });
});

app.use(getDataRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
