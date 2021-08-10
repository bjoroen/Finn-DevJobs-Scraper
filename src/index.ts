import { AxiosResponse } from "axios";

const axios = require("axios").default;

export class WebScraper {
  statusCode: number;
  url: string;

  constructor(hostname: string) {
    this.url = hostname;
    this.getRequest(this.url).then((r) => {
      this.statusCode = r.status;
    });
  }

  async getRequest(url) {
    return axios.get(url);
  }

  getData(res: any) {
    const data = res.status;
    console.log(data);
    this.statusCode = data;
  }

  handleError(error) {
    console.log(error + " - this error happened, deal with it");
  }
}

let scraper = new WebScraper("https://www.finn.no/");
console.log("Outside Class: " + scraper.statusCode);
