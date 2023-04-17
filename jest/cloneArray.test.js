const cloneArray = require("./cloneArray");

test("properly clones array", () => {
  const array = [1, 2, 3];
  // if the result doesn't have to be exact same, use toEqual
  // for example, [...array] indicates different memory, so use toEqual instead of toBe
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
