import { getRequest } from "../src";

test("Should get status code 200 from website", async () => {
  const url: string = "https://www.finn.no/";

  await getRequest(url).then((data) => {
    expect(data.status).toBe(200);
  });
});

test("Should return the first job ad", async () => {
  const urlJob: string =
    "https://www.finn.no/job/fulltime/search.html?abTestKey=rerank&occupation=0.23&sort=PUBLISHED_DESC";
  await getRequest(urlJob);
});
