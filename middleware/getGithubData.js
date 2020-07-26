const axios = require("axios").default;
const cache = require("memory-cache");

const cacheStaleTime = 1000 * 60 * 1;

const getGithubData = async ({
  per_page = 1,
  sort = "stars",
  order = "desc",
  date = "2019-01-10",
  page = 1,
}) => {
  const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`;
  const cachedValue = cache.get(url);
  if (cachedValue) {
    console.log("sending value from cache");
    return cachedValue;
  }
  try {
    const response = await axios.get(url);
    cache.put(url, response.data, cacheStaleTime);
    return response.data;
  } catch (err) {
    console.error(err.response.data, err.response.status);
  }
};

module.exports = getGithubData;
