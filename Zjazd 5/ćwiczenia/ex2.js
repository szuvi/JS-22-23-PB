class Car {
  acceleration;
  maxSpeed;
  constructor(acceleration, maxSpeed) {
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
  }
  getSpeed(time) {
    const calculatedSpeed = this.acceleration * time;
    return calculatedSpeed > this.maxSpeed ? this.maxSpeed : calculatedSpeed;
  }
}

// const honda = new Car(5, 250);
// console.log(honda.getSpeed(20));
