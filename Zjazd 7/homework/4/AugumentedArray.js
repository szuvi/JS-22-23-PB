import AugumentedNumber from './AugumentedNumber.js';

class AugumentedArray {
  static isArrayOfArrays(source) {
    return (
      Array.isArray(source) &&
      source.length > 0 &&
      source.every((element) => Array.isArray(element))
    );
  }
  static isArrayOfNumbers(source) {
    return source.every((element) => AugumentedNumber.isValidNumber(element));
  }

  static multiplyArrays(arr1, arr2) {
    if (
      !AugumentedArray.isArrayOfNumbers(arr1) ||
      !AugumentedArray.isArrayOfNumbers(arr2) ||
      arr1.length !== arr2.length
    ) {
      throw new Error('Incompatible arrays for multiplication');
    }
    return arr1.reduce(
      (sum, element1, index) => element1 * arr2[index] + sum,
      0
    );
  }
}

export default AugumentedArray;
