const LinkedList = require('../linked-list.js');

describe('should use methods outlined in README properly for Linked List', () => {
  it('tests insert method with value to create linked list with value', () => {
    const LL = new LinkedList();
    let myArr = [1, 2, 3, 4, 5];
    for (let ii = 0; ii < myArr.length; ii++) {
      LL.insert(myArr[ii]);
    }
    expect(LL.head.value).toBe(1);
  });

  it('tests traverse method', () => {
    const LL = new LinkedList();
    let myArr = [1, 2, 3, 4, 5];
    for (let ii = 0; ii < myArr.length; ii++) {
      LL.insert(myArr[ii]);
    }
    let myArray = [];
    LL.traverse(myArray);
    expect(myArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('tests includes method', () => {
    const LL = new LinkedList();
    let myArr = [1, 2, 3, 4, 5];
    for (let ii = 0; ii < myArr.length; ii++) {
      LL.insert(myArr[ii]);
    }
    expect(LL.includes(6)).toBe(false);
    expect(LL.includes(5)).toBe(true);
  });

  it('tests toString method', () => {
    const LL = new LinkedList();
    let myArr = ['Item 1', 'Item 2', 'Item 3'];
    for (let ii = 0; ii < myArr.length; ii++) {
      LL.insert(myArr[ii]);
    }
    let resultString = LL.toString();
    expect(resultString).toEqual('{Item 1} -> {Item 2} -> {Item 3} -> NULL');
  });
});