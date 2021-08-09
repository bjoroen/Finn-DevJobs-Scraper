const axios = require("axios").default;

export const getRequest = async (hostname: string) => {
  return axios
    .get(hostname)
    .then((response) => {
      return response;
    })
    .catch(console.error);
};

getRequest("https://www.finn.no/").then((data) => {
  console.log(data.status);
});
