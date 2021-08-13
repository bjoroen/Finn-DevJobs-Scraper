import { getLinks, getRequest } from "../src";

const url: string = "https://www.finn.no/";

test("Should get status code 200 from website", async () => {
  await getRequest(url).then((res) => {
    expect(res.status).toBe(200);
  });
});

test("Should return array with links", async () => {
  getLinks(url).then((res) => {
    expect(res[0].link).toMatch(/https:/);
  });
});
