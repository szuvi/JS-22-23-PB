// 1.	Array exercises:
// a.	example array: [1,6,23,8,4,8,3,7]
let exampleArray = [1, 6, 23, 8, 4, 8, 3, 7];
console.log('Example array is: ' + exampleArray);
// b.	Create a function that takes in an array of numbers and returns sum of all elements
function sumAllNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}
console.log('The sum of all elements is: ' + sumAllNumbers(exampleArray));

// c.	Create a function that takes in an array of numbers and returns sum of first and last element
function sumFirstAndLast(numbersArray) {
  return numbersArray[0] + numbersArray[numbersArray.length - 1];
}
console.log(
  'The sum of first and last element is: ' + sumFirstAndLast(exampleArray)
);

// d.	Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)
function reverseArray(inputArray) {
  let reversedArrayCopy = [];
  for (let i = 0; i < inputArray.length; i++) {
    reversedArrayCopy.unshift(inputArray[i]);
  }
  return reversedArrayCopy;
}
console.log('Reversed array is: ' + reverseArray(exampleArray));

// e.	Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.
function getRandomLowestNumber(numbersArray, triesCount) {
  let randomPicks = [];
  let numbersCopy = [...numbersArray]; // create copy to make sure we don't pick same element, and don't edit the original array
  for (let i = 0; i < triesCount; i++) {
    let randomIndex = getRandomNumberInRange(0, numbersCopy.length - 1);
    let randomElement = numbersCopy.splice(randomIndex, 1)[0]; // splice method returns array even if we removed 1 element!
    randomPicks.push(randomElement);
  }

  return getLowestNumber(randomPicks);
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLowestNumber(numbersArray) {
  let lowestNumber = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] < lowestNumber) {
      lowestNumber = numbersArray[i];
    }
  }
  return lowestNumber;
}

console.log(
  'Lowest number from random picks is: ' +
    getRandomLowestNumber(exampleArray, 3)
);

// f.	Create a function that takes in an array and returns it in random order
function randomizeIndexes(inpuArray) {
  let randomizedArray = [];
  let arrayCopy = [...inpuArray];

  for (let i = 0; i < inpuArray.length; i++) {
    let randomIndex = getRandomNumberInRange(0, arrayCopy.length - 1);
    let randomElement = arrayCopy.splice(randomIndex, 1)[0]; // splice method returns array even if we removed 1 element!
    randomizedArray.push(randomElement);
  }

  return randomizedArray;
}

console.log('Array in random order: ' + randomizeIndexes(exampleArray));

// g.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let oddExample = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
console.log('Example array for g. ' + oddExample);

// This function assumes that we need to sum numbers that are odd
function sumOddNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 1) {
      sum += numbersArray[i];
    }
  }
  return sum;
}

console.log('The sum of odd numbers is: ' + sumOddNumbers(oddExample));

// This function assumes that we need to sum numbers at odd indexes
function sumNumbersAtOddIndexes(numbersArray) {
  let sum = 0;
  for (let i = 1; i < numbersArray.length; i += 2) {
    sum += numbersArray[i];
  }
  return sum;
}

console.log(
  'The sum of numbers at odd indexes is: ' + sumNumbersAtOddIndexes(oddExample)
);

// h.	With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

let oddEvenExample = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
console.log('Example array for h. ' + oddEvenExample);

// This function assumes that we need to sum even numbers and substract odd ones
function sumEvenSubstractOdd(numbersArray) {
  let result = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 1) {
      result -= numbersArray[i];
    } else {
      result += numbersArray[i];
    }
  }
  return result;
}

console.log(
  'Result of adding all even numbers and substracting odd ones is: ' +
    sumEvenSubstractOdd(oddEvenExample)
);

// This function assumes that we need to sum numbers at even indexes and substract numbers at odd ones
function sumAtEvenSubAtOdd(numbersArray) {
  let result = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (i % 2 === 1) {
      result -= numbersArray[i];
    } else {
      result += numbersArray[i];
    }
  }
  return result;
}

console.log(
  'Result of adding all numbers at even indexes and substracting numbers at odd ones is: ' +
    sumAtEvenSubAtOdd(oddEvenExample)
);
