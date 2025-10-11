# 🧪 Unit Testing Demo with Jest

A practice application designed to help you learn and master unit testing using Jest. This project provides sample functions and clear instructions to get you started with Test-Driven Development (TDD).

## 📖 Overview

This repository contains a complete learning environment for practicing Jest unit testing. It includes:

- **Sample functions** to test in `dataProcessor.js`
- **Visual instruction guide** in `index.html`
- **Step-by-step setup process**
- **Best practices and tips**

## 🚀 Quick Start

Follow these steps to set up your Jest testing environment:

### 1. Initialize Node Environment
```bash
npm init -y
```
This creates a `package.json` file with default configuration.

### 2. Install Jest
```bash
npm install --save-dev jest
```

### 3. Create Tests Directory
```bash
mkdir __tests__
```
Jest automatically looks for test files in the `__tests__` directory.

### 4. Write Unit Tests
Create test files like `__tests__/dataProcessor.test.js` to test the functions in `dataProcessor.js`.

### 5. Configure package.json
Add the test script to your `package.json`:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### 6. Run Your Tests
```bash
npm test
```

## 📁 Project Structure

```
unit-testing-demo/
├── README.md              (this file)
├── index.html             (visual instruction guide)
├── style.css              (styling for instruction page)
├── dataProcessor.js       (functions to test)
├── package.json           (created after npm init)
└── __tests__/             (your test files go here)
    └── dataProcessor.test.js
```

## 🎯 Functions to Test

The `dataProcessor.js` file contains six functions with varying complexity levels:

### 1. `add(a, b)`
- **Purpose**: Adds two numbers together
- **Test scenarios**: Valid numbers, invalid inputs, edge cases
- **Example**: `add(2, 3)` returns `5`

### 2. `filterEvenNumbers(numbers)`
- **Purpose**: Filters an array to return only even numbers
- **Test scenarios**: Valid arrays, empty arrays, non-numeric elements
- **Example**: `filterEvenNumbers([1, 2, 3, 4])` returns `[2, 4]`

### 3. `capitalizeWords(str)`
- **Purpose**: Capitalizes the first letter of each word
- **Test scenarios**: Normal strings, empty strings, special characters
- **Example**: `capitalizeWords("hello world")` returns `"Hello World"`

### 4. `calculateAverage(numbers)`
- **Purpose**: Calculates the average of an array of numbers
- **Test scenarios**: Valid arrays, empty arrays, mixed data types
- **Example**: `calculateAverage([1, 2, 3, 4, 5])` returns `3`

### 5. `isValidEmail(email)`
- **Purpose**: Validates email address format
- **Test scenarios**: Valid emails, invalid formats, edge cases
- **Example**: `isValidEmail("user@example.com")` returns `true`

### 6. `findMax(numbers)`
- **Purpose**: Finds the maximum number in an array
- **Test scenarios**: Positive numbers, negative numbers, mixed arrays
- **Example**: `findMax([1, 5, 3, 9, 2])` returns `9`

## 📝 Sample Test Structure

Here's an example of how your test file might look:

```javascript
const {
    add,
    filterEvenNumbers,
    capitalizeWords,
    calculateAverage,
    isValidEmail,
    findMax
} = require('../dataProcessor');

describe('Data Processing Functions', () => {
    describe('add function', () => {
        test('should add two positive numbers correctly', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should throw error for non-numeric inputs', () => {
            expect(() => add('2', 3)).toThrow('Both arguments must be numbers');
        });
    });

    describe('filterEvenNumbers function', () => {
        test('should return only even numbers', () => {
            expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
        });

        test('should return empty array when no even numbers', () => {
            expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
        });
    });

    // Add more test suites for other functions...
});
```

## 💡 Testing Best Practices

### 1. Test Structure
- Use `describe()` blocks to group related tests
- Write descriptive test names that explain what is being tested
- Follow the AAA pattern: Arrange, Act, Assert

### 2. Test Coverage
- **Happy Path**: Test with valid, expected inputs
- **Edge Cases**: Test with boundary values (empty arrays, zero, etc.)
- **Error Cases**: Test invalid inputs and error handling
- **Null/Undefined**: Test with null and undefined values

### 3. Jest Matchers
Common Jest matchers you'll use:
- `toBe()` - Exact equality
- `toEqual()` - Deep equality
- `toThrow()` - Function throws an error
- `toBeTruthy()` / `toBeFalsy()` - Boolean testing
- `toBeNull()` / `toBeUndefined()` - Null/undefined testing

### 4. Test Organization
```javascript
describe('FunctionName', () => {
    test('should handle normal case', () => {
        // Test implementation
    });

    test('should handle edge case', () => {
        // Test implementation
    });

    test('should throw error for invalid input', () => {
        // Test implementation
    });
});
```

## 🎨 Visual Instructions

Open `index.html` in your browser to see a beautifully styled instruction guide with:
- Step-by-step setup process
- Visual project structure
- Testing tips and best practices
- Color-coded sections for easy navigation

## 🛠️ Development Workflow

1. **Red**: Write a failing test first
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve the code while keeping tests green
4. **Repeat**: Continue the cycle for each function

## 📚 Learning Objectives

By completing this project, you will:
- ✅ Understand Jest testing framework basics
- ✅ Learn to write comprehensive unit tests
- ✅ Practice Test-Driven Development (TDD)
- ✅ Handle edge cases and error scenarios
- ✅ Organize tests with describe blocks
- ✅ Use various Jest matchers effectively

## 🤝 Contributing

This is a learning project! Feel free to:
- Add more complex functions to test
- Improve the existing functions
- Enhance the visual instruction guide
- Share your testing strategies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Happy Testing!

Remember: Good tests make for confident code. Start testing today and build better, more reliable applications!

---

**Need help?** Open `index.html` in your browser for a visual guide, or refer to the [Jest documentation](https://jestjs.io/docs/getting-started) for more advanced features.