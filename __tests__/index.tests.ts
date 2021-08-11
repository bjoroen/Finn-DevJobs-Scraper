import { getRequest } from "../src";

test("Should get status code 200 from website", async () => {
  const url: string = "https://www.finn.no/";

  await getRequest(url).then((res) => {
    expect(res.status).toBe(200);
  });
});

test("Should return the Finn ID", () => {});
