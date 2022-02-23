const TreeIntersection = require('../tree-intersection.js');
const BinarySearchTree = require('../../breadth-first/breadth-first.js');

const firstBST = new BinarySearchTree();
const secondBST = new BinarySearchTree();
const thirdBST = new BinarySearchTree();

let firstArr = [5, 3, 4, 7, 6, 112, 221, 223, 1];
let secondArr = [11, 16, 2, 5, 7, 6, 221, 63, 26];
let thirdArr = [-34, -433, -12, -356, 1122, -2321];
for (let ii = 0; ii < firstArr.length; ii++) {
    firstBST.insert(firstArr[ii]);
}
for (let ii = 0; ii < secondArr.length; ii++) {
    secondBST.insert(secondArr[ii]);
}
for (let ii = 0; ii < thirdArr.length; ii++) {
    thirdBST.insert(thirdArr[ii]);
}

describe('Tests TreeInsertion function', () => {
    it('Should return an array of similar values found in both BSTs', () => {
        let resultArr = TreeIntersection(firstBST, secondBST);
        expect(resultArr).toEqual([221, 5, 7, 6]);
    });

    it('Should return an empty array for no similar values', () => {
        let resultArr = TreeIntersection(firstBST, thirdBST);
        expect(resultArr).toEqual([]);
    });
});
