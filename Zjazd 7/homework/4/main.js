import Matrix from './Matrix.js';

const myMatrix = new Matrix([
  [3, 4],
  [7, 2],
  [5, 9],
]);

const test = new Matrix([
  [3, 1, 5],
  [6, 9, 7],
]);

const result = myMatrix.multipleBy(test);
result.print();
