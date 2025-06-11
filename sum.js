function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function sumWithThreeParams(a, b, c) {
  return a + b + c;
}

module.exports = { sum, sumWithThreeParams };