'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse(callback) {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  insert(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(value);
    previous.next = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let resultStr = '';
    let current = this.head;
    while (current !== null) {
      if (!resultStr) {
        resultStr = `{${current.value}}`;
      } else {
        resultStr = `${resultStr} -> {${current.value}}`
      }
      current = current.next;
    }
    resultStr = `${resultStr} -> NULL`
    return resultStr;
  }
}

const list = new LinkedList();
const A = new Node('First Node of Linked List');
list.head = A;
list.insert(10);
console.log(JSON.stringify(list));
list.traverse();
list.toString();