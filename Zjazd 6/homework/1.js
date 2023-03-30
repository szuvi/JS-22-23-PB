'use strict';

function shiftArray(arr, n) {
  n = n % arr.length;
  let k = 0;
  for (let i = n; i < arr.length; i++) {
    let temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
    k++;
  }
}

const testArr = [1, 2, 3, 4, 5, 6];
shiftArray(testArr, 3);
console.log(testArr);
