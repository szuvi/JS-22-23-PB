// 5.	Create a function that:
//  a.	Checks if a given number is a prime number
//  b.	Takes in n (numbers) as a parameter and returns first n prime numbers

function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(n) {
  let result = [];
  for (let currentNumber = 2; result.length < n; currentNumber++) {
    if (isPrime(currentNumber)) {
      result.push(currentNumber);
    }
  }
  return result;
}

console.log('First 10 prime numbers are: ' + getPrimeNumbers(10));
