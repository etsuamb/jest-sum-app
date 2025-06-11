const { sumWithThreeParams } = require('./sum');

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sumWithThreeParams(1, 2, 3)).toBe(6);
});

test('adds -1 + 0 + 1 to equal 0', () => {
  expect(sumWithThreeParams(-1, 0, 1)).toBe(0);
});

test('adds 0 + 0 + 0 to equal 0', () => {
  expect(sumWithThreeParams(0, 0, 0)).toBe(0);
});