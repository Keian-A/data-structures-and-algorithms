const HashMap = require('../../hash-table/hash-table.js');
const leftJoin = require('../hashmap-left-join.js');

const HM1 = new HashMap();
const HM2 = new HashMap();
const HM3 = new HashMap(); // This will be empty for testing
const HM4 = new HashMap(); // This will be empty for testing

HM1.set('diligent', 'employed');
HM1.set('fond', 'enamored');
HM1.set('outfit', 'garb');
HM2.set('diligent', 'idle');
HM2.set('fond', 'averse');
HM2.set('guide', 'follow');

describe('Tests leftJoin function', () => {
    it('Tests 2 valid hashmaps are added', () => {
        let result = leftJoin(HM1, HM2);
        expect(result).toEqual([
            ['diligent', 'employed', 'idle'],
            ['fond', 'enamored', 'averse'],
            ['outfit', 'garb', null]
        ]);
    });

    it('Tests if the second argument contains an empty hashmap', () => {
        let result = leftJoin(HM2, HM3);
        // Checks first inner array third index
        expect(result[0][2]).toBe(null);
        // Checks last inner array third index
        expect(result[result.length - 1][2]).toBe(null);
    });

    it('Tests if 2 empty hashmaps are added', () => {
        let result = leftJoin(HM3, HM4);
        expect(result).toEqual([]);
    });
});
