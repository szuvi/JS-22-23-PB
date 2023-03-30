class Fibonacci {
  constructor() {
    this.list = [1, 1];

    this.getNumbers = this.getNumbers.bind(this);
  }

  getNumbers(n) {
    while (this.list.length < n) {
      const listLength = this.list.length;
      const nextNumber = this.list[listLength - 1] + this.list[listLength - 2];
      this.list.push(nextNumber);
    }
    return this.list.slice(0, n);
  }
}

const fibGenerator = new Fibonacci();
console.log(fibGenerator.getNumbers(100));
