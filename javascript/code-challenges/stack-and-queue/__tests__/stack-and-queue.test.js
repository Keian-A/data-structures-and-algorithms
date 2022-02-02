const { Stack, Queue } = require('../stackAndQueue.js');

describe('Tests queue and relevent methods built on class', () => {
  it('creates queue with value supplied', () => {
    let q = new Queue();
    q.enqueue(1);
    expect(q.front.value).toEqual(1);
  });

  it('dequeues value successfully', () => {
    let q = new Queue();
    q.enqueue(1);
    let result = q.dequeue();
    expect(result).toEqual(1);
  });

  it('tests peek method', () => {
    let q = new Queue();
    q.enqueue(1);
    let result = q.peek();
    expect(result).toEqual(1);
  });

  it('tests isEmpty method', () => {
    let q = new Queue();
    let q2 = new Queue();
    q.enqueue(1);
    expect(q.isEmpty()).toBe(false);
    expect(q2.isEmpty()).toBe(true);
  });

  it('tests traverse method', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    console.log = jest.fn();
    q.traverse();
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});

describe('Tests stack and relevent methods built on class', () => {
  it('tests push method creating a new stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
  });

  it('tests traverse method', () => {
    let newStack = new Stack();
    newStack.push(1);
    console.log = jest.fn();
    newStack.traverse();
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('tests pop method, removing an item from the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
    newStack.pop();
    expect(newStack.top).toBe(null);
  });

  it('tests peek method', () => {
    let newStack = new Stack();
    let result = newStack.peek();
    expect(result).toEqual('This stack is empty');
    newStack.push(1);
    result = newStack.peek();
    expect(result).toEqual(1);
  });

  it('tests isEmpty method', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toEqual(true);
    newStack.push(1);
    expect(newStack.isEmpty()).toEqual(false);
  });
});
