import axios from "axios";
import * as http from "http";
import { getRequest } from "../src";
import * as request from "supertest";

test("Should get status code 200 from website", async () => {
  const url: string = "https://www.finn.no/";

  await getRequest(url).then((data) => {
    expect(data.status).toBe(200);
  });
});
