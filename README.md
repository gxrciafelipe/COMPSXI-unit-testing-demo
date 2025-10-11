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

The `dataProcessor.js` file contains two functions to test:

### 1. `countWords(text)`
- **Purpose**: Counts the number of words in a given text string
- **Test scenarios**: Normal text, empty strings, strings with extra spaces, null/undefined inputs
- **Example**: `countWords("hello world")` returns `2`

### 2. `findMax(numbers)`
- **Purpose**: Finds the maximum number in an array of numbers
- **Test scenarios**: Arrays with positive numbers, negative numbers, mixed arrays, single element arrays
- **Example**: `findMax([1, 5, 3, 9, 2])` returns `9`



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

---

**Need help?** Open `index.html` in your browser for a visual guide, or refer to the [Jest documentation](https://jestjs.io/docs/getting-started) for more advanced features.