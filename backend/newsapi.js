const superagent = require("superagent");

const NEWS_API_URL = "http://newsapi.org/v2";
const TOP_HEADLINES_ENDPOINT_PATH = "/top-headlines";
const API_KEY = "decc1852cd614cfea324fbe8aad78e6f";

const EVERYTHING_ENDPOINT_PATH = "/everything";

const getMainArticles = (query) =>
  superagent
    .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
    .query({ country: "pl", ...query, apiKey: API_KEY });

const getKoronaNews = (query) =>
  superagent
    .get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
    .query({ language: "pl", ...query, apiKey: API_KEY, q: "koronawirus" });

module.exports = {
  getMainArticles,
  getKoronaNews,
};
