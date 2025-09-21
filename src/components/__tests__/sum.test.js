// const sum = (a, b) => a + b;
import { sum } from "../sum";

test("Sum funcion should calculate sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
