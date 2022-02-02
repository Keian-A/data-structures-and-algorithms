'use strict';

// Create k-ary tree class here

class Node {
  constructor(key) {
    this.child = [];
    this.key = key;
  }
}

function newNode(value) {
  let node = new Node(value);
  return node;
}

let ind;

// A = Array of values to add to tree
// n = number of nodes
// k = how many max children the tree can have per node
// h = height of the tree
function buildKaryTree(A, n, k, h) {
  if (n <= 0) return null;
  let node = newNode(A[ind]);
  for (let ii = 0; ii < k; ii++) {
    // Checks if ind is in the range of the array
    if (ind < n - 1 && h > 1) {
      ind++;
      // Adds all children recursively
      node.child.push(buildKaryTree(A, n, k, h - 1));
    } else {
      node.child.push(null);
    }
  }
  return node;
}

// Needs to call this to get height to call main tree constructor
function buildKaryTree_1(A, k) {
  // Finds the max height tree needs to be for given node number and how many children tree can have per node
  let n = A.length;
  let height = Math.ceil(Math.log(n * (k - 1) + 1) / Math.log(k));
  ind = 0;
  return buildKaryTree(A, n, k, height);
}

module.exports = buildKaryTree_1;
