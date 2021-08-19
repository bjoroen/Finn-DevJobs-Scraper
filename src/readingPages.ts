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

const languageArray: programmingLanguages[] =
  languageData as programmingLanguages[];

let lowerCaseArray = [];
for (let ele in languageArray) {
  console.log(languageArray[ele].ProgrammingLanguage);
  lowerCaseArray.push(languageArray[ele].ProgrammingLanguage);
}

//Check if language is in text
function languageInText(language: programmingLanguages[]) {
  let text: string = "";

  getRequest(linksArray[123].link).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    text = $(".import-decoration").text().toLowerCase();

    console.log(text);
    for (let element in language) {
      if (language[element].ProgrammingLanguage != undefined) {
        if (
          text.includes(
            " " + language[element].ProgrammingLanguage.toLowerCase() + "," ||
              " " + language[element].ProgrammingLanguage.toLowerCase() + " " ||
              " " + language[element].ProgrammingLanguage.toLowerCase() + "." ||
              "," + language[element].ProgrammingLanguage.toLowerCase()
          )
        ) {
          console.log(language[element].ProgrammingLanguage.toLowerCase());
        }
      }
    }
  });
}

languageInText(languageArray);
console.log(linksArray[123].link);
