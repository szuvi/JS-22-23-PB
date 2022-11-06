function sortByMerge(array) {
  if (array.length <= 1) {
    return array;
  }

  let indexOfHalf = Math.floor(array.length / 2);
  let leftArray = array.splice(0, indexOfHalf);
  let rightArray = array;

  return merge(sortByMerge(leftArray), sortByMerge(rightArray));
}

function merge(leftArr, rightArr) {
  let sortedArray = [];

  while (leftArr.length > 0 || rightArr.length > 0) {
    let smallerElement;

    if (leftArr.length === 0) {
      smallerElement = rightArr.shift();
    } else if (rightArr.length === 0) {
      smallerElement = leftArr.shift();
    } else if (leftArr[0] < rightArr[0]) {
      smallerElement = leftArr.shift();
    } else {
      smallerElement = rightArr.shift();
    }

    sortedArray.push(smallerElement);
  }

  return sortedArray;
}

let exampleArray = [6, 2, 7, 3, 6, 8, 10, 2];
let sortedArray = sortByMerge(exampleArray);
console.log(sortedArray);
