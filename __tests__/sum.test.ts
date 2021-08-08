import { sum } from "../src/sum";

test("should add numbers", () => {
  expect(sum(2, 2)).toEqual(4);
});
