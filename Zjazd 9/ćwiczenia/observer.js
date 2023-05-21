class WeatherData {
  constructor() {
    this.temperature = 0;
    this.observers = [];
  }

  setTemperature(temperature) {
    this.temperature = temperature;
    this.notifyObservers();
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class WeatherDisplay {
  constructor(name) {
    this.name = name;
  }
  update(temperature) {
    const message = `The current temperature in ${this.name} is ${temperature} degrees.`;
    console.log(message);
  }
}

const weatherData = new WeatherData();
const weatherDisplay1 = new WeatherDisplay('Tv');
const weatherDisplay2 = new WeatherDisplay('Mobile');
const weatherDisplay3 = new WeatherDisplay('Desktop');

weatherData.registerObserver(weatherDisplay1);
weatherData.registerObserver(weatherDisplay2);
weatherData.registerObserver(weatherDisplay3);

weatherData.setTemperature(20);
weatherData.setTemperature(25);
