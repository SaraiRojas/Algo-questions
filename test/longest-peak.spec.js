/* eslint-disable no-undef */
const longestPeak = require('../longest-peak');

describe('onNavigate', () => {
  test('it should render landPage', () => {
    const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
    expect(longestPeak(array)).toEqual(6);
  });
});
