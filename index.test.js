const { add, subtract, multiply, divide, trigonometry, factorial, mean, median, mode } = require('./index');

describe('Mathematical Operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides 10 / 0 to throw error', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test('calculates sin(30) to equal 0.5', () => {
    expect(trigonometry('sin', 30)).toBeCloseTo(0.5);
  });

  test('calculates factorial of 5 to equal 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('calculates mean of [1, 2, 3, 4, 5] to equal 3', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  test('calculates median of [1, 2, 3, 4, 5] to equal 3', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  test('calculates mode of [1, 2, 2, 3] to equal 2', () => {
    expect(mode([1, 2, 2, 3])).toBe(2);
  });
});
