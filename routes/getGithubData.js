const router = require("express").Router();
const axios = require("axios").default;

const getGithubData = async ({ per_page, sort, order, date }) => {
  per_page = per_page || 1;
  sort = sort || "stars";
  order = order || "desc";
  date = date || "2019-01-10";

  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${date}&sort=${sort}&order=${order}&per_page=${per_page}`
    );
    console.log(response.data);
  } catch (err) {
    console.error(err.response.data, err.response.status);
  }
};

module.exports = getGithubData;
