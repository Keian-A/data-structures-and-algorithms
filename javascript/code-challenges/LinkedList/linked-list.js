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

  append(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(value);
    if (previous !== null) {
      previous.next = newNode;
    } else {
      list.head = newNode;
    }
  }

  insertBefore(val, newVal) {
    let current = this.head;
    let previous = null;
    while (current.value !== val) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(newVal);
    newNode.next = current;
    previous.next = newNode;
  }

  insertAfter(val, newVal) {
    let current = this.head;
    let previous = null;
    while (current.value !== val) {
      previous = current;
      current = current.next;
    }
    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }
}

// Tests
const list = new LinkedList();
console.log(JSON.stringify(list));
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.insertBefore(30, 29);
list.insertAfter(30, 33);
list.traverse();