// Function to convert binary to decimal
function binaryToDecimal (binary) {
  return parseInt(binary, 2);
}

// Function to convert decimal to binary
function decimalToBinary (decimal) {
  return decimal.toString(2);
}

// Function to convert decimal to hexadecimal
function decimalToHexadecimal (decimal) {
  return decimal.toString(16).toUpperCase();
}

// Function to convert hexadecimal to decimal
function hexadecimalToDecimal (hexadecimal) {
  return parseInt(hexadecimal, 16);
}

module.exports = {
  binaryToDecimal,
  decimalToBinary,
  decimalToHexadecimal,
  hexadecimalToDecimal
};
