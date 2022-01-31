## Code

```javascript
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
      if (root.right === null)root.right = node;
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
```

## Code walkthrough

The first method, insert is created to insert a value into an empty Binary Search Tree (BST).

If there is already a value at the root of the tree, it sends the value to the `insertNode` method.

This `insertNode` method checks the value against the root left and right values and sets it to the left if it is smaller than the root value, or sets it to the right if it is larger than the current root value of the node it is on at the current level of recursion.

The `contains` method walks through each node in the tree, going left if the value is smaller than the current node's value, and right if the value is larger than the current node's value. This will either eventually hit the node that has an equivalent value and return true, or return false due to the node becoming null due to recursion.

## Challenge description

The purpose of this code is to create a class which can produce a BST if you call the specific method with a value.