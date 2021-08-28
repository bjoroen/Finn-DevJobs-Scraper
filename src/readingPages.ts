// @ts-ignore
import * as JSONdata from "../Database/database.json";
// @ts-ignore
import * as languageData from "../Database/languageFile.json";
import * as cheerio from "cheerio";
import { getRequest } from "./getLinks";
import { links } from "./getLinks";

//Array of Links from JSON file
const linksArray: links[] = JSONdata as links[];

//Languages to check
const languageArray: string[] = [
  "C",
  "C++",
  "Java",
  "Python",
  "C#",
  "Visual Basic",
  "Javascript",
  "Typescript",
  "Php",
];

//Check if language is in text
function languageInText(language: string[], links: string) {
  let text: string = "";

  //Scrapes job AD to see what Languages are in the text
  return getRequest(links).then((response) => {
    let reg: RegExp;
    const html = response.data;
    const $ = cheerio.load(html);
    text = $(".import-decoration").text();
    let arrayOfLangNum: string[] = [];

    for (let element in language) {
      reg = new RegExp(
        "(?<!\\w)" +
          language[element].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
          "(?!\\w|\\+{2}|#)",
        "gi"
      );

      if (reg.test(text)) {
        arrayOfLangNum.push(language[element]);
      }
    }

    return arrayOfLangNum;
  });
}

//Counts what languages are being found
let countMap = new Map();

for (let ele in linksArray) {
  languageInText(languageArray, linksArray[ele].link).then((res) => {
    for (let resKey in res) {
      if (countMap.has(res[resKey])) {
        let currentValue: number = countMap.get(res[resKey]);
        countMap.set(res[resKey], currentValue + 1);
      } else {
        countMap.set(res[resKey], 1);
      }
    }
    console.log(countMap);
  });
}
