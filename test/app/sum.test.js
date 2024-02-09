const sum = require('../../app/sum');

describe('Test sum test', () => {
    test('case 1 : adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});