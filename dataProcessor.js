function countWords(text) {
    if (!text || text.trim() === '') {
        return 0;
    }
    return text.trim().split(' ').length;
}

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function isEven(number) {
    return number % 2 === 0;
}

function calculateDiscount(price, discountPercent) {
    return price * (1 - discountPercent / 100);
}

module.exports = { 
    countWords, 
    findMax,
    isEven,
    calculateDiscount
};