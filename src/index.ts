import * as cheerio from "cheerio";
import * as https from "https";

const axios = require("axios").default;

export class WebScraper {
  _statusCode: number;

  async getRequest(url): Promise<any> {
    new Promise((resolve, reject) => {
      https.get(url, (res) => {
        res.on("data", (data) => {
          console.log(data.status);
        });
      });
    });
  }
}

let webScraper = new WebScraper();
webScraper.getRequest("https://www.finn.no/");
