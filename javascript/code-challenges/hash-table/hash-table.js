'use strict';

module.exports = class HashTable {
    constructor() {
        this.obj = {};
    }

    set(key, value) {
        this.obj[key] = value;
    }

    get(key) {
        if (this.obj[key]) {
            return this.obj[key];
        } else {
            return null;
        }
    }

    contains(key) {
        if (this.obj[key] !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    keys() {
        return Object.keys(this.obj);
    }

    hash(key) {
        let result = this.keys();
        for (let ii = 0; ii < result.length; ii++) {
            if (result[ii] === key) {
                return ii;
            }
        }
        return 'Key not found in hash table';
    }
}