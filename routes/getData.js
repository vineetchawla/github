const express = require("express");

const getGithubData = require("../middleware/getGithubData");

const router = express.Router();

router.post("/getGithubData", async (req, res) => {
  try {
    const params = req.body;
    const data = await getGithubData(params);
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
