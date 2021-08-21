//Read the data from "databse"

// @ts-ignore
import * as JSONdata from "../Database/database.json";
// @ts-ignore
import * as languageData from "../Database/languageFile.json";
import * as cheerio from "cheerio";
import { getRequest } from "./index";
import { links } from "./index";
import { getLanguages } from "./gettingLanguages";
import { writeToDB } from "./databaseFunctions";

interface programmingLanguages {
  objectId: string;
  ProgrammingLanguage: string;
  Source: string;
  createdAt: string;
  updatedAt: string;
}

const linksArray: links[] = JSONdata as links[];

const languageArray: string[] = [
  "C",
  "C++",
  "Java",
  "Python",
  "C#",
  ".Net",
  "Visual Basic",
  "Javascript",
  "Typescript",
  "Php",
  "Assembly Language",
  "node.js",
];

//Check if language is in text
function languageInText(language: string[]) {
  let text: string = "";

  getRequest(linksArray[243].link).then((response) => {
    let reg: RegExp;
    const html = response.data;
    const $ = cheerio.load(html);
    text = $(".import-decoration").text();

    console.log(text);
    for (let element in language) {
      reg = new RegExp(
        "(?<!\\w)" +
          language[element].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
          "(?!\\w)",
        "gi"
      );

      if (language[element] === "C") {
        reg = new RegExp(
          "(?<!\\S)" +
            language[element].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
            "(?!\\S)",
          "gi"
        );
      }

      if (reg.test(text)) {
        console.log(language[element]);
      }
    }
  });
}

languageInText(languageArray);
console.log(linksArray[243].link);
