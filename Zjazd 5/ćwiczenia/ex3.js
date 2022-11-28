const { v4: uuid } = require('uuid');

class Car {
  constructor(acceleration, maxSpeed, price) {
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
    this.id = uuid();
    this.price = price;
    this.dateOfProduction = new Date();
  }

  getSpeed(time) {
    const calculatedSpeed = this.acceleration * time;
    return calculatedSpeed > this.maxSpeed ? this.maxSpeed : calculatedSpeed;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

// const honda = new Car(5, 250, 100000);
// console.log(honda.price);
// honda.changePrice(99000);
// console.log(honda.price);
