function translate(text) {
  if (isPigified(text)) {
    return unpigify(text);
  }
  return pigify(text);
}

function isPigified(text) {
  const words = [...text.matchAll(/[a-z]+/gi)]; // converting interator to array
  return words.flat().every((word) => word[word.length - 1] === 'y');
}

function unpigify(text) {
  return text.replace(/([a-z]*)([a-z])(ay)/gi, (word, p1, p2, p3) =>
    translateToEnglish(p1, p2, p3)
  );
}

function translateToEnglish(group1, group2, group3) {
  if (group1 === '') {
    return group2;
  }
  if (group2 === 'y' && isVowel(group1[0])) {
    return group1;
  }
  if (isCapitalized(group1)) {
    return `${capitalize(group2)}${group1.toLowerCase()}`;
  }
  return `${group2}${group1}`;
}

function isVowel(char) {
  return /[aiueo]/i.test(char);
}

function isCapitalized(word) {
  return word[0].toUpperCase() + word.slice(1) === word;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function pigify(text) {
  return text.replace(/([a-z])([a-z]*)/gi, (word, p1, p2) =>
    translateWordToPig(p1, p2)
  );
}

function translateWordToPig(group1, group2) {
  if (isVowel(group1)) {
    return `${group1}${group2}yay`;
  }
  if (isCapitalized(group1)) {
    return `${capitalize(group2)}${group1.toLowerCase()}ay`;
  }
  return `${group2}${group1}ay`;
}

export default translate;
