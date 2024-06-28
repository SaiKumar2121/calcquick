// Function to convert a string of letters to their ASCII numbers
function lettersToAscii (letters) {
  return letters.split('').map(letter => letter.charCodeAt(0));
}

// Function to convert a list of ASCII numbers to a string of letters
function asciiToLetters (asciiArray) {
  return asciiArray.map(num => String.fromCharCode(num)).join('');
}

// Function to convert a single letter to its ASCII number
function letterToAscii (letter) {
  return letter.charCodeAt(0);
}

letterToAscii();
asciiToLetters();
lettersToAscii();
