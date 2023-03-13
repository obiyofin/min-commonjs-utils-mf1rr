const xx = require("./index");

test("add 1 + 2 should equal 3", () => {
  expect(xx.add2(1, 2, "bangkok is cool city")).toBe(3);
});
