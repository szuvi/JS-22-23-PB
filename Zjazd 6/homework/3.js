function retrieveNumbers(text) {
  return text.match(/\d/g).map((stringNum) => +stringNum);
}
console.log(retrieveNumbers('123a b3fsFDS@#$1235%^4'));
