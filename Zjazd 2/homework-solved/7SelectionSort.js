function sortBySelection(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    // repeat arrayOfNumbers.length - 1 times
    let smallest = arrayOfNumbers[i]; // initial smallest number is going to be current number
    let smallestIndex = i; // initial smallest number's ined is goint to be current number's index

    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      // repeat for each non sorted number
      if (arrayOfNumbers[j] < smallest) {
        smallest = arrayOfNumbers[j];
        smallestIndex = j;
      }
    }

    let copy = arrayOfNumbers[i]; // make copy to not loose value at index i
    arrayOfNumbers[i] = arrayOfNumbers[smallestIndex];
    arrayOfNumbers[smallestIndex] = copy;
  }
  return arrayOfNumbers;
}

let exampleArray = [6, 2, 7, 3, 6, 8, 10, 2];
sortBySelection(exampleArray);
console.log(exampleArray);
