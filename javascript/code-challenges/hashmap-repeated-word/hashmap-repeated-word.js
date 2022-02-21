'use strict';

const HashMap = require('../hash-table/hash-table.js');

module.exports = function firstRepeatedWord(str) {
    const obj = new HashMap();
    let strArr = str.split(' ');
    for (let ii = 0; ii < strArr.length; ii++) {
        let curWord = strArr[ii].toLowerCase();
        if (!obj.contains(curWord)) {
            obj.set(curWord, 1);
        } else {
            return curWord;
        }
    }
    return null;
}
