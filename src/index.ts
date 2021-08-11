import * as cheerio from "cheerio";

const axios = require("axios").default;
import Cheerio = cheerio.Cheerio;

export async function getRequest(url): Promise<any> {
  return await axios.get(url);
}

export function getHTML() {
  const url =
    "https://www.finn.no/job/fulltime/search.html?abTestKey=control&occupation=0.23&sort=RELEVANCE";

  getRequest(url).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const mainContainer = $("#page-results article").children("div").last();
    console.log(mainContainer);
  });
}

getHTML();
