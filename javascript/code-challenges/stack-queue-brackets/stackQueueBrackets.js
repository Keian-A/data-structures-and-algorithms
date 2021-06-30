'use strict';

const { Stack } = require('../stack-and-queue/stackAndQueue.js');

class BracketStack {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  bracketChecker(string) {
    let s = new Stack();
    let balanced = true;
    let stringArr = string.split('');
    let index = 0;
    while (index < stringArr.length && balanced) {
      let symbol = stringArr[index];
      if (symbol === '(') {
        s.push(symbol);
      } else if (symbol === '{') {
        s.push(symbol);
      } else if (symbol === '[') {
        s.push(symbol);
      } else {
        if (s.isEmpty()) {
          balanced = false;
        } else if (symbol === ')') {
          s.pop();
        } else if (symbol === '}') {
          s.pop();
        } else if (symbol === ']') {
          s.pop();
        }
      }
      index++;
    }
    if (balanced && s.isEmpty()) {
      return true;
    } else {
      return false;
    }
  }
}

let bs = new BracketStack();
let response = bs.bracketChecker('{(})');
console.log(response);
