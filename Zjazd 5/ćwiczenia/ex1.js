const car = {
  acceleration: 5,
  maxSpeed: 250,
  getSpeed(time) {
    const calculatedSpeed = this.acceleration * time;
    return calculatedSpeed > this.maxSpeed ? this.maxSpeed : calculatedSpeed;
  },
};

// console.log(car.getSpeed(20));
