const {
  add, subtract, multiply,
  trigonometry, factorial, mean,
  median, mode
} = require('../index');
/* globals describe, expect, it  test */

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

  // Calculate sine of an angle in degrees
  it('should return correct sine value when angle is in degrees', () => {
    const result = trigonometry('sin', 30);
    expect(result).toBeCloseTo(0.5, 2);
  });

  // Angle is 0 degrees for sine, cosine, and tangent
  it('should return correct values for sine, cosine, and tangent when angle is 0 degrees', () => {
    expect(trigonometry('sin', 0)).toBe(0);
    expect(trigonometry('cos', 0)).toBe(1);
    expect(trigonometry('tan', 0)).toBe(0);
  });

  // Calculate cosine of an angle in degrees
  it('should return correct cosine value when angle is in degrees', () => {
    const result = trigonometry('cos', 45);
    expect(result).toBeCloseTo(0.71, 2);
  });

  // Calculate tangent of an angle in degrees
  it('should return correct tangent value when angle is in degrees', () => {
    const result = trigonometry('tan', 60);
    expect(result).toBeCloseTo(1.73, 2);
  });

  // Calculate arcsine of a value and return result in degrees
  it('should return correct arcsine value in degrees', () => {
    const result = trigonometry('asin', 0.5);
    expect(result).toBeCloseTo(30, 2);
  });

  // Calculate arccosine of a value and return result in degrees
  it('should return correct arccosine value when angle is in degrees', () => {
    const result = trigonometry('acos', 0.5);
    expect(result).toBeCloseTo(60, 2);
  });

  // Calculate arctangent of a value and return result in degrees
  it('should return correct arctangent value when angle is in degrees', () => {
    const result = trigonometry('atan', 1);
    expect(result).toBeCloseTo(45, 2);
  });

  // Default precision of 2 decimal places is applied correctly
  it('should apply default precision of 2 decimal places', () => {
    const result = trigonometry('sin', 45);
    expect(result).toBeCloseTo(0.71, 2);
  });

  // Handle unknown operation gracefully
  it('should return Unknown operation when an unknown operation is provided', () => {
    const result = trigonometry('unknown', 45);
    expect(result).toBe('Unknown operation');
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
