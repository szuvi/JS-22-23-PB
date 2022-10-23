// 1.	Given a string:
// let text = "This is an example";
let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// a.	count how many words it contains
text = text.trim().replaceAll(",", "").replaceAll(".", "").replaceAll("!", ""); // remove any spaces at beginning and end, and most of non letters
let wordsCount = 0; // create words counter
let spaceIndex = 0; // create index tracker

while (spaceIndex !== -1 && text.length > 0) {
  // repeat as long as there is a space in text, check if text is not empty
  if (text[spaceIndex - 1] !== " ") {
    // check if previous character is not a space (for index 0 it will count single word)
    wordsCount++; // if so, count a word
  }
  spaceIndex = text.indexOf(" ", spaceIndex + 1); // find next space
}
console.log("Words in text: ", wordsCount);

// b.	count how many letter “A”  is in it
let soughtLetter = "a";
let soughtCounter = 0;
for (let i = 0; i < text.length; i++) {
  // iterate over every character in text
  if (text[i].toLowerCase() === soughtLetter.toLowerCase()) {
    // compare characters ignoring case
    soughtCounter++;
  }
}
console.log(soughtLetter + " number is text is: " + soughtCounter);

// c.	display longest word
let textCopy = text
  .trim()
  .replaceAll(",", "")
  .replaceAll(".", "")
  .replaceAll("!", ""); // create text copy
let longestWord = "";

while (textCopy.length > 0) {
  // as long as there are words in text copy
  let spaceIndex = textCopy.indexOf(" "); // find next space
  let currentWord;

  if (spaceIndex === -1) {
    // if no spaces, we are at the end of sentence
    currentWord = textCopy;
    textCopy = "";
  } else {
    currentWord = textCopy.slice(0, spaceIndex); // slice current word
    textCopy = textCopy.slice(spaceIndex + 1); // remove sliced part from text copy
  }

  if (currentWord.length > longestWord.length) {
    // if current word is longer than longest
    longestWord = currentWord; // save it as longes
  }
}
console.log("Longest word is: " + longestWord);
// d.	display how many words of length same as the longest is in the string
let secondTextCopy = text
  .trim()
  .replaceAll(",", "")
  .replaceAll(".", "")
  .replaceAll("!", ""); // create text copy
let sameAsLongestCounter = 0;

while (secondTextCopy.length > 0) {
  // as long as there are words in text copy
  let spaceIndex = secondTextCopy.indexOf(" "); // find next space
  let currentWord;

  if (spaceIndex === -1) {
    // if no spaces, we are at the end of sentence
    currentWord = secondTextCopy;
    secondTextCopy = "";
  } else {
    currentWord = secondTextCopy.slice(0, spaceIndex); // slice current word
    secondTextCopy = secondTextCopy.slice(spaceIndex + 1); // remove sliced part from text copy
  }

  if (currentWord.length === longestWord.length) {
    // if current word is longer than longest
    sameAsLongestCounter++; // save it as longes
  }
}

console.log("Words with length same as longest: ", sameAsLongestCounter);
