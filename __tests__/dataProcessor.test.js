const { countWords, findMax } = require('../dataProcessor');

describe('Text Processing Tests', () => {
    test('should count words in simple text', () => {
        const result = countWords('Hello world test');
        expect(result).toBe(3);
    });

    test('should handle empty text', () => {
        const result = countWords('');
        expect(result).toBe(0);
    });
});

describe('Number Processing Tests', () => {
    test('should find the maximum number', () => {
        const result = findMax([5, 10, 3, 8]);
        expect(result).toBe(10);
    });

    test('should work with negative numbers', () => {
        const result = findMax([-5, -10, -3, -8]);
        expect(result).toBe(-3);
    });
});