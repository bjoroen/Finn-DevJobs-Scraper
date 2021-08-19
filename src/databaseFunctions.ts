import fs from "fs";

export function writeToDB(data, fileName) {
  const dataToDB = JSON.stringify(data, null, 2);
  fs.writeFile(
    "./Database/" + fileName,
    dataToDB + "\t",
    "utf8",
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );
}
