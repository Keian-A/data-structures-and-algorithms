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

  contains(value) {
    const walk = (node) => {
      if (node === null) return false;
      if (node.value === value) return true;
      if (node.value < value) {
        walk(node.left);
      } else {
        walk(node.right);
      }
    }
    walk(this.root);
    return false;
  }
}