'use strict';

const BinarySearchTree = require('../breadth-first.js');

describe('Should create BST and traverse using breadth-first search', () => {
  it('creates BST using values', () => {

    let BST = new BinarySearchTree();

    let myArr = [3, 2, 1, 4, 5];

    for (let ii = 0; ii < myArr.length; ii++) {
      BST.insert(myArr[ii]);
    }

    expect(BST.root.value).toBe(myArr[0]);
  });

  it('returns array in breadth search order of existing BST', () => {

    // BST setup
    let BST = new BinarySearchTree();
    let myArr = [3, 2, 1, 4, 5];
    for (let ii = 0; ii < myArr.length; ii++) {
      BST.insert(myArr[ii]);
    }

    let resultArr = [];
    BST.breadthSearch(resultArr);

    expect(resultArr).toStrictEqual([3, 4, 2, 5, 1]);
  });
});
