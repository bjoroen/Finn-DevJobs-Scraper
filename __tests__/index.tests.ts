import { WebScraper } from "../src";

test("Should get status code 200 from website", async () => {
  const url: string = "https://www.finn.no/";

  let webScraper = await new WebScraper(url);
  expect(webScraper.statusCode).toEqual(200);
});
