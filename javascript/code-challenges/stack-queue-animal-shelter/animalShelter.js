'use strict';

class Node {
  constructor(animal) {
    this.animal = animal;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let newNode = new Node(animal);
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
      return temp.animal;
    } else {
      this.front = null;
    }
  }
}

let queue = new Queue();
queue.enqueue('dog');
queue.enqueue('dog');
queue.enqueue('cat');
let releasedAnimal1 = queue.dequeue();
console.log(releasedAnimal1);
let releasedAnimal2 = queue.dequeue();
console.log(releasedAnimal2);
let releasedAnimal3 = queue.dequeue();
console.log(releasedAnimal3);

console.log(JSON.stringify(queue));
