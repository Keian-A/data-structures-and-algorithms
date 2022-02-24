'use strict';

function leftJoin(HM1, HM2) {
    let resultArr = [];
    let keysArr = HM1.keys();
    for (let ii = 0; ii < keysArr.length; ii++) {
        let tempArr = [];
        tempArr.push(keysArr[ii]);
        tempArr.push(HM1.get(keysArr[ii]));
        tempArr.push(HM2.get(keysArr[ii]));
        resultArr.push(tempArr);
    }
    return resultArr;
}

module.exports = leftJoin;
