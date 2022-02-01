'use strict';

const { BinarySearchTree } = require('../BST/BST.js');
const { Queue } = require('../stack-and-queue/stackAndQueue.js');

BinarySearchTree.breadthFirst = (root) => {
  let q = new Queue();
  const walk = (node) => {
    if (node) {
      q.enqueue(root);
      walk(this.left);
      walk(this.right);
    }
  }
  walk(this.root);
  let resultArr = [];
  breadthFirstSearch(q.dequeue(), resultArr);

  function breadthFirstSearch(node, arr) {
    if (node) {
      arr.push(node.val);
      breadthFirstSearch(q.dequeue(), resultArr);
    } else {
      return arr;
    }
  }
}

module.exports = BinarySearchTree;
