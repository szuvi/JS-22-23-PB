const { v4: uuid } = require('uuid');

/// !!! npm install in this folder 

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

  static isCar(inputObject) {
    return inputObject instanceof Car;
  }
}

module.exports = Car;

// class Bike {}
// const honda = new Car(5, 250, 100000);
// const specialized = new Bike();
// console.log(Car.isCar(honda));
// console.log(Car.isCar(specialized));
