const Mergesort = require('../merge-sort.js');

describe('Testing first output of all positive array', () => {
    it('Sorting from the algorithm', () => {
        let myArr = [4, 2, 5, 7, 65, 23, 3, 1];
        Mergesort(myArr);
        expect(myArr[0]).toEqual(65);
    });
});
