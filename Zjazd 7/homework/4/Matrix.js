import AugumentedArray from './AugumentedArray.js';
import AugumentedNumber from './AugumentedNumber.js';

class Matrix {
  constructor(arr) {
    if (!Matrix.isValidMatrix(arr)) {
      throw new Error('Argument is not a valid matrix.');
    }
    this.value = arr;
  }

  get columnsNumber() {
    return this.value[0].length;
  }

  get rowsNumber() {
    return this.value.length;
  }

  getColumn(columnNumber) {
    const result = [];
    this.forEach(
      (element, [row, column]) =>
        columnNumber === column && result.push(element)
    );
    return result;
  }

  print() {
    this.value.forEach((row) => console.log(row.join(', ')));
  }

  multipleBy(multiplier) {
    let result;
    if (AugumentedNumber.isValidNumber(multiplier)) {
      result = this.#multipleByNumber(multiplier);
    } else if (
      multiplier instanceof Matrix &&
      Matrix.areMultiCompatible(this, multiplier)
    ) {
      result = this.#multipleByMatrix(multiplier);
    } else {
      throw new Error('Argument is not a valid number nor a valid matrix.');
    }
    return new Matrix(result);
  }

  #multipleByNumber(number) {
    return this.map((element) => element * number);
  }

  #multipleByMatrix(inputMatrix) {
    const result = [];
    for (let column = 0; column < inputMatrix.columnsNumber; column += 1) {
      for (let row = 0; row < this.rowsNumber; row += 1) {
        result[row] = result[row] ?? [];
        const inputColumnt = inputMatrix.getColumn(column);
        result[row][column] = AugumentedArray.multiplyArrays(
          this.value[row],
          inputColumnt
        );
      }
    }
    return result;
  }

  map(callback) {
    const resultMatrix = [];
    for (let i = 0; i < this.value.length; i += 1) {
      resultMatrix[i] = [];
      for (let j = 0; j < this.value[i].length; j += 1) {
        resultMatrix[i][j] = callback(this.value[i][j], [i, j], this.value);
      }
    }
    return resultMatrix;
  }

  forEach(callback) {
    for (let i = 0; i < this.value.length; i += 1) {
      for (let j = 0; j < this.value[i].length; j += 1) {
        callback(this.value[i][j], [i, j], this.value);
      }
    }
  }

  static areMultiCompatible(matrix1, matrix2) {
    if (!matrix1 instanceof Matrix || !matrix2 instanceof Matrix) {
      throw new Error('Invalid arguments! Both arguments need to be matrices.');
    }
    return matrix1.columnsNumber === matrix2.rowsNumber;
  }

  static isValidMatrix(source) {
    if (AugumentedArray.isArrayOfArrays(source)) {
      let rowLength = source[0].length;
      return source.every(
        (element) =>
          element.length === rowLength &&
          AugumentedArray.isArrayOfNumbers(element)
      );
    }
  }
}

export default Matrix;
