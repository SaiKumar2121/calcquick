const {
  add, subtract, multiply, divide,
  trigonometry, factorial, mean,
  median, mode
} = require('../index');
/* globals describe, expect,  test */

describe('Math Operations', () => {
  test('addition of 1 and 2 should return 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtraction of 2 and 1 should return 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test('multiplication of 2 and 3 should return 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('division of 6 by 3 should return 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('division by zero should throw an error', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });

  test('sine of 90 degrees should return 1', () => {
    expect(trigonometry('sin', 90)).toBe(1);
  });

  test('cosine of 0 degrees should return 1', () => {
    expect(trigonometry('cos', 0)).toBe(1);
  });

  test('tangent of 45 degrees should return 1', () => {
    expect(trigonometry('tan', 45)).toBe(1);
  });

  test('factorial of 5 should return 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('mean of [1, 2, 3, 4, 5] should return 3', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  test('median of [1, 3, 3, 6, 7, 8, 9] should return 6', () => {
    expect(median([1, 3, 3, 6, 7, 8, 9])).toBe(6);
  });

  test('mode of [1, 1, 2, 2, 3, 3] should return [1, 2, 3]', () => {
    expect(mode([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
