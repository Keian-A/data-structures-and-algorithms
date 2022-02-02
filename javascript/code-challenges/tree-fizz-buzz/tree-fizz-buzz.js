'use strict';

const karyTree = require('../k-ary-tree/k-ary.js');

module.exports = function fizzBuzzTree(tree, k) {
  for (let ii = 0; ii < tree.length; ii++) {
    tree[ii] = fizzBuzzAlgorithm(tree[ii]);
  }
  return karyTree(tree, k);
}

function fizzBuzzAlgorithm(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return "FizzBuzz";
  } else if (val % 3 === 0) {
    return "Fizz";
  } else if (val % 5 === 0) {
    return "Buzz";
  } else {
    return val.toString();
  }
}