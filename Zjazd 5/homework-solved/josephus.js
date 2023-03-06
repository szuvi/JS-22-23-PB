class Josephus {
  constructor(numberOfSoliders) {
    if (
      typeof numberOfSoliders !== 'number' ||
      Number.isNaN(numberOfSoliders) ||
      numberOfSoliders <= 0
    ) {
      throw new Error('Incorrect input in constructor');
    }
    this.soliders = [];
    for (let i = 1; i <= numberOfSoliders; i++) {
      this.soliders.push(i);
    }
  }

  solve() {
    while (this.isSolved() === false) {
      const message = this.kill();
      console.log(message);
    }

    return `${this.soliders[0]} remains alive`;
  }

  isSolved() {
    return this.soliders.length === 1;
  }

  kill() {
    if (this.isSolved()) {
      return `The riddle is already solved, the last man standing is ${this.soliders[0]}`;
    }
    const killer = this.soliders.shift();
    const killed = this.soliders.shift();
    this.soliders.push(killer);
    return `${killer} kills ${killed}`;
  }
}

const riddle = new Josephus(0);
console.log(riddle.solve());
