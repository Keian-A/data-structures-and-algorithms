const insertionSort = require('../insertSort.js');

describe('Tests insertionSort function', () => {
  it('should take in an array and sort', () => {
    let myArray = [6, 1, 2, 4, 7];
    insertionSort(myArray);
    expect(myArray).toEqual([1, 2, 4, 6, 7]);
  });

  it('should work with negative and positive numbers too', () => {
    let myArray = [6, 1, 2, 4, 7, -7, -2];
    insertionSort(myArray);
    expect(myArray).toEqual([-7, -2, 1, 2, 4, 6, 7]);
  });
});