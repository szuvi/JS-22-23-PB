// Binary Search (This algorithm assumes that the array is sorted)
function findElementBinary(inputArray, targetElement) {
  let currentIndex = Math.floor(inputArray.length / 2);
  let currentElement = inputArray[currentIndex];

  if (currentElement === targetElement) {
    return 'Found ' + currentElement;
  }

  if (inputArray.length === 0 || inputArray.length === 1) {
    // we checked the currentElement's and the targetElement's euqlity before
    return 'Not found';
  }

  if (currentElement > targetElement) {
    return findElementBinary(inputArray.slice(0, currentIndex), targetElement);
  }

  if (currentElement < targetElement) {
    return findElementBinary(inputArray.slice(currentIndex + 1), targetElement);
  }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findElementBinary(arr, 0));
