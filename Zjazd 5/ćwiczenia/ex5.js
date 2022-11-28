const Car = require('./ex4');

class CarDealer {
  #carsStorage;

  constructor() {
    this.#carsStorage = [];
  }

  get priceOfAll() {
    return this.#carsStorage.reduce((sum, car) => {
      sum += car.price;
      return sum;
    }, 0);
  }

  addCar(newCar) {
    if (!Car.isCar(newCar)) {
      throw new Error('Input should be a car!');
    }
    this.#carsStorage.push(newCar);
  }

  removeCar(id) {
    this.#carsStorage = this.#carsStorage.filter((car) => car.id !== id);
  }
}

// const honda = new Car(5, 250, 100000);
// const toyota = new Car(10, 300, 250000);

// const localCarDealer = new CarDealer();
// localCarDealer.addCar(honda);
// localCarDealer.addCar(toyota);
// console.log(localCarDealer.priceOfAll);
