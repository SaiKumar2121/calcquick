function add (a, b) {
  return a + b;
}
function subtract (a, b) {
  return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
function trigonometry (operation, angle, precision = 2) {
  // Convert angle from degrees to radians for sine, cosine, and tangent
  const radians = angle * (Math.PI / 180);
  let result;

  switch (operation) {
    case 'sin':
      result = Math.sin(radians);
      break;
    case 'cos':
      result = Math.cos(radians);
      break;
    case 'tan':
      result = Math.tan(radians);
      break;
    case 'asin':
      // For asin, acos, and atan, the input is not converted and the output is in degrees
      result = Math.asin(angle) * (180 / Math.PI);
      break;
    case 'acos':
      result = Math.acos(angle) * (180 / Math.PI);
      break;
    case 'atan':
      result = Math.atan(angle) * (180 / Math.PI);
      break;
    default:
      return 'Unknown operation';
  }

  // Round the result to the specified precision
  return Math.round(result * Math.pow(10, precision)) / Math.pow(10, precision);
}
function factorial (n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
function mean (numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const mean = sum / numbers.length;
  return Math.round(mean * 10) / 10; // Rounds to 1 decimal place
}
function median (numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const midIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) { // If even number of elements
    return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
  } else { // If odd number of elements
    return sortedNumbers[midIndex];
  }
}
function mode (numbers) {
  const numberCounts = numbers.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const maxCount = Math.max(...Object.values(numberCounts));
  const modes = Object.keys(numberCounts).filter(
    number => numberCounts[number] === maxCount
  );

  return modes.length === 1 ? Number(modes[0]) : modes.map(Number);
}

module.exports = { add, subtract, multiply, divide, trigonometry, factorial, mean, median, mode };
