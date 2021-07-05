'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  traverse() {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.top !== null) {
      return this.top.value;
    } else {
      return 'This stack is empty'
    }
  }

  isEmpty() {
    if (this.top !== null) {
      return false;
    } else {
      return true;
    }
  }
}

// let stack = new Stack();
// stack.push(5);
// stack.push(10);
// stack.push(15);
// stack.traverse();
// console.log(JSON.stringify(stack));

// // returns false because stack is not empty
// let response = stack.isEmpty();
// console.log('isEmpty response:', response);

// let response1 = stack.peek();
// console.log('peek response:', response1);

// console.log('After popping:');
// stack.pop();

// stack.traverse();

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  traverse() {
    let current = this.front;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
      this.rear = newNode;
    } else {
      this.rear = newNode;
      this.front = newNode;
    }
  }

  dequeue() {
    let temp = this.front;
    if (this.front !== null) {
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    } else {
      this.front = null;
    }
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    if (this.front !== null) {
      return false;
    } else {
      return true;
    }
  }
}

// let queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(10);
// queue.enqueue(15);
// queue.enqueue(20);
// queue.traverse();

module.exports.Stack = Stack;
module.exports.Queue = Queue;
