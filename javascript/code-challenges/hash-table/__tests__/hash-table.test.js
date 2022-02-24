'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const HashTable = require('../hash-table.js');

describe('Tests HashTable class and containing methods', () => {
    it('Tests set method', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        expect(obj.contains('testKey')).toEqual(true);
    });

    it('Tests collision handling', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        obj.set('testKey', 'testValAfterCollision');
        expect(obj.get('testKey')).toEqual('testValAfterCollision');
    });

    it('Tests search for non existent key, should return null', () => {
        const obj = new HashTable();
        expect(obj.get('testVal')).toEqual(null);
    });

    it('Tests get method', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        let result = obj.get('testKey');
        expect(result).toEqual('testVal');
    });

    it('Tests contains method', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        let result1 = obj.contains('testKey');
        let result2 = obj.contains('testKeyNotInObject');
        expect(result1).toEqual(true);
        expect(result2).toEqual(false);
    });

    it('Tests values method', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        let result = obj.values();
        expect(result).toEqual(['testVal']);
    });

    it('Tests keys method', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        let result = obj.keys();
        expect(result).toEqual(['testKey']);
    });

    it('Tests hash method', () => {
        const obj = new HashTable();
        obj.set('testKey', 'testVal');
        let result1 = obj.hash('testKey');
        let result2 = obj.hash('testKeyNotInObject');
        expect(result1).toEqual(0);
        expect(result2).toEqual('Key not found in hash table');
    });
});
