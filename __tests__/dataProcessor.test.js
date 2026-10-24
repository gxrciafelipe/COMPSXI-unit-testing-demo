const { countWords, findMax, isEven, calculateDiscount } = require('../dataProcessor');

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

describe('isEven function', () => {
    test('should return true for even numbers', () => {
        expect(isEven(4)).toBe(true);
        expect(isEven(0)).toBe(true);
        expect(isEven(100)).toBe(true);
    });

    test('should return false for odd numbers', () => {
        expect(isEven(3)).toBe(false);
        expect(isEven(1)).toBe(false);
        expect(isEven(99)).toBe(false);
    });

    test('should handle negative numbers', () => {
        expect(isEven(-2)).toBe(true);
        expect(isEven(-3)).toBe(false);
    });
});

describe('calculateDiscount function', () => {
    test('should calculate 10% discount correctly', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });

    test('should calculate 50% discount correctly', () => {
        expect(calculateDiscount(80, 50)).toBe(40);
    });

    test('should return original price for 0% discount', () => {
        expect(calculateDiscount(100, 0)).toBe(100);
    });

    test('should handle decimal prices', () => {
        expect(calculateDiscount(99.99, 20)).toBeCloseTo(79.99, 2);
    });
});