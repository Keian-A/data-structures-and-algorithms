'use strict';

const { Queue } = require('../stack-and-queue/stackAndQueue.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root == null) this.root = node
    else this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (root.value < node.value) {
      if (root.left === null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.insertNode(root.right, node);
    }
  }

  breadthSearch(arr) {
    let q = new Queue();
    const walk = (node) => {
      if (node) {
        arr.push(node.value);
        q.enqueue(node.left);
        q.enqueue(node.right);
      }
      if (!q.isEmpty()) {
        walk(q.dequeue());
      }
    }
    walk(this.root);
    return arr;
  }
}

module.exports = BinarySearchTree;
