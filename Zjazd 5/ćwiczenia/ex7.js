const Car = require('./ex4');

class ElectricCar extends Car {
  constructor(acceleration, maxSpeed, price, battery) {
    super(acceleration, maxSpeed, price);
    this.battery = battery;
  }

  getRemainingBattery(time) {
    return (
      ((this.battery - this.#calcBatteryDrainagePerSec() * time) /
        this.battery) *
      100
    );
  }

  #calcBatteryDrainagePerSec() {
    return (this.battery * this.acceleration) / 100000;
  }
}

// const tesla = new ElectricCar(20, 300, 200000, 10000);
// console.log(tesla.getRemainingBattery(60));
