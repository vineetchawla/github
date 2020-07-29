const express = require("express");

const getGithubData = require("../middleware/getGithubData");

const router = express.Router();

router.post("/getGithubData/:page", async (req, res) => {
  try {
    const args = req.body;
    args.page = req.params.page;
    const data = await getGithubData(args);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Problem fetching data" });
  }
});

module.exports = router;
