const sum = require("./sum");

// you can write anything you want in this string.
// this sentence will be shown in the console.log.
test("properly adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

/*
 * npm test will test this function
 * make sure to modify package.json to "test": "jest --coverage"
 */
