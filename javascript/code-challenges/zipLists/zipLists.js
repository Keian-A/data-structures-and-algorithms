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
    if (previous !== null) {
      previous.next = newNode;
    } else {
      list.head = newNode;
    }
  }

  zipLists(list1, list2) {
    const newList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1 !== null || current2 !== null) {
      this.insert(current1.value);
      this.insert(current2.value);
      current1 = current1.next;
      current2 = current2.next;
    }
    return newList;
  }
}

// Tests
const list = new LinkedList();
// console.log(JSON.stringify(list));
const list1 = { head: { value: 1, next: { value: 3, next: null } } }
const list2 = { head: { value: 2, next: { value: 4, next: null } } }
list.zipLists(list1, list2);
list.traverse();