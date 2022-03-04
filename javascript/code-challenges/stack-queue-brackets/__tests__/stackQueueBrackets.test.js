const BracketStack = require('../stackQueueBrackets.js');

describe('Tests bracketChecker method', () => {
    it('Should return true to valid string', () => {
        let bs = new BracketStack();
        let response = bs.bracketChecker('{(})');
        expect(response).toEqual(true);
    });

    it('Should return false to invalid string', () => {
        let bs = new BracketStack();
        let response = bs.bracketChecker('{(})))');
        expect(response).toEqual(false);
    });
});