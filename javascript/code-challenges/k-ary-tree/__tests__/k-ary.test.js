const buildKaryTree = require('../k-ary.js');

describe('Tests construction of k-ary tree', () => {
  it('Should built a tree of (k) children with the correctly supplied arguments', () => {
    let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let tree = buildKaryTree(A, 3);
    expect(tree.key).toEqual(1);
    expect(tree.child[0].key).toEqual(2);
  });
});