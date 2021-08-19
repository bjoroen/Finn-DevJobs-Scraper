import axios from "axios";
import fetch from "fetch";
import { writeToDB } from "./databaseFunctions";

let headers = {
  headers: {
    "X-Parse-Application-Id": "8l40NK5842Z8oW9EFRDlIxpSyteDZIpdWbG49OWk", // This is your app's application id
    "X-Parse-REST-API-Key": "9vrGcdYQ2CTPBpG8rqXqHoCcJ5IPKw1lMmg34YbP", // This is your app's REST API key
  },
};

export async function getLanguages() {
  return axios
    .get(
      "https://parseapi.back4app.com/classes/ProgrammingLanguages_All_Programming_Languages?limit=1000",
      headers
    )
    .then((res) => {
      writeToDB(res, "languageFile.json");
    });
}
