'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse(arr) {
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      let previous;
      while (current !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
    }
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
