import * as cheerio from "cheerio";

const axios = require("axios").default;
import Cheerio = cheerio.Cheerio;
import { stringify } from "ts-jest/dist/utils/json";

export interface links {
  kode: number;
  link: string;
}

let checkIfNextPageTrue: boolean = false;

export async function getRequest(url): Promise<any> {
  return await axios.get(url);
}

export function getLinks(url) {
  return getRequest(url).then((response) => {
    let listOfLinks: links[] = [];
    const html = response.data;
    const $ = cheerio.load(html);

    $("#page-results > div.ads.ads--liquid.ads--liquid--cols1to2")
      .find("article")
      .find("h2 > a")
      .each((index, element) => {
        let temp = {
          kode: parseInt($(element).attr("id")),
          link: $(element).attr("href"),
        };

        listOfLinks.push(temp);
      });
    return listOfLinks;
  });
}

let pageNumberString: string = "";
let numberOfPage: string = "";
let num = 1;
const url = `https://www.finn.no/job/fulltime/search.html?abTestKey=rerank&occupation=0.23${pageNumberString}${numberOfPage}&sort=PUBLISHED_DESC`;

while (checkIfNextPageTrue === false) {
  getLinks(url).then((res: links[]) => {
    console.log("before if");
    console.log(res.length);
    pageNumberString = "&page=";
    num++;
    numberOfPage = stringify(num);
  });

  checkIfNextPageTrue = true;
}
