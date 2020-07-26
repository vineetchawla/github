jest.mock("axios");
const axios = require("axios");
let mockAxios;

const getGithubData = require("./getGithubData");
const testData = require("./testData.json");

const defaultQuery =
  "https://api.github.com/search/repositories?q=created:>2019-01-10&sort=stars&order=desc&per_page=1&page=1";
const updatedQuery =
  "https://api.github.com/search/repositories?q=created:>2019-01-20&sort=stars&order=desc&per_page=2&page=1";

test("fetches data from API with default values", async () => {
  mockAxios = axios.get.mockResolvedValue(testData);
  await getGithubData({});
  expect(mockAxios).toHaveBeenCalledWith(defaultQuery);
});

test("fetches data from API with sent values", async () => {
  mockAxios = axios.get.mockResolvedValue(testData);
  await getGithubData({ per_page: 2, date: "2019-01-20" });
  expect(mockAxios).toHaveBeenCalledWith(updatedQuery);
});
