let ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
// ^ we often write 'constants' or configuration variables like this 

function caesarEncode(text, key) {
  let encodedText = '';
  for (let i = 0; i < text.length; i++) {
    encodedText += encodeSingleCharacter(text[i], key);
  }
  return encodedText;
}

function encodeSingleCharacter(character, key) {
  let charUpperCase = character.toUpperCase();

  if (ALPHABET.includes(charUpperCase) === false) {
    // non letter character
    return character;
  }

  let shiftedIndex = (ALPHABET.indexOf(charUpperCase) + key) % ALPHABET.length; 
  // ^ we use % for a case, when the key would be higher than alphabet's length

  if (shiftedIndex < 0) { // this is a case when the key is lower than 0 (we go 'backwards' on the alphabet)
    shiftedIndex = ALPHABET.length + shiftedIndex;
  }

  if (ALPHABET.includes(character) === false) { // if the original character is lowercase we want to return it in lowercase
    return ALPHABET[shiftedIndex].toLowerCase();
  }

  return ALPHABET[shiftedIndex];
}

let myKey = 27;
let exampleText = 'ABcdEf Lorem, ipsum, dolor.';
let encodedText = caesarEncode('ABcdEf Lorem, ipsum, dolor.', myKey);

console.log('Example text: ' + exampleText);
console.log('Encoded text with key ' + myKey + ': ' + encodedText);

function caesarDecode(text, key) {
  return caesarEncode(text, -key); 
  // ^ if we know the key, decoding our secret message is the same as encoding it, while going in 'reverse' through the alphabet
}

let decodedText = caesarDecode(encodedText, myKey);

console.log('Decoded text with key ' + myKey + ': ' + decodedText);
