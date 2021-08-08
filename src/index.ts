import https from "https";
import * as url from "url";
import * as http from "http";

export const getRequest = (hostname: string) => {
  https.get(hostname, (res) => {
    console.log("status Code: ", res.statusCode);

    return res.statusCode;
  });
};

const code = getRequest("https://www.finn.no/");

console.log("Yes: ", code);
