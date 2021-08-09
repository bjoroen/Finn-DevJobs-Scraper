import axios from "axios";
import * as http from "http";
import { getRequest } from "../src";

test("Should get status code 200 from website", () => {
  const url: string = "https://www.finn.no/";

  expect(getRequest(url)).toEqual(400);
});
