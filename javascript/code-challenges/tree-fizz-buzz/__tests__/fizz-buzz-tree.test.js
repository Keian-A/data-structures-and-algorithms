const fizzBuzzTree = require('../tree-fizz-buzz.js');

describe('Tests fizz-buzz tree', () => {
  it('Should return `Fizz` for a tree with the value of 3', () => {
    let myArray = [3];
    let tree = fizzBuzzTree(myArray, 1);
    expect(tree.key).toEqual("Fizz");
  });

  it('Should return `Buzz` for a tree with the value of 5', () => {
    let myArray = [5];
    let tree = fizzBuzzTree(myArray, 1);
    expect(tree.key).toEqual("Buzz");
  });

  it('Should return `FizzBuzz` for a tree with the value of 15', () => {
    let myArray = [15];
    let tree = fizzBuzzTree(myArray, 1);
    expect(tree.key).toEqual("FizzBuzz");
  });

  it('Should return the default val set to a string', () => {
    let myArray = [2];
    let tree = fizzBuzzTree(myArray, 1);
    expect(typeof tree.key).toBe('string');
    expect(tree.key).toEqual("2");
  });
});