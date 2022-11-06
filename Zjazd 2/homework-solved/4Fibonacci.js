// 4.	Create a function that takes in a n (number) as a parameter
//    and returns first n Fibonacci numbers - use recursion

function getFirstFibbNumbers(n) {
  let result = [];
  let getFibonacciNumber = getFibonacciFunction();
  for (let i = 1; i <= n; i++) {
    result.push(getFibonacciNumber(i));
  }
  return result;
}

function getFibonacciFunction() {
  let cache = [];
  return function getFibboncci(n) {
    // closure pattern, we save results in cache to
    // avoid recalculating fibonacci numbers we already calculated
    if (cache[n - 1]) {
      return cache[n - 1];
    }

    if (n === 1) {
      cache[0] = 0;
      return 0;
    }

    if (n === 2) {
      cache[1] = 1;
      return 1;
    }
    const result = getFibboncci(n - 1) + getFibboncci(n - 2);
    cache[n - 1] = result;
    return result;
  };
}

console.log('First 10 Fibonacci numbers are: ' + getFirstFibbNumbers(10));
