const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    constructor(name, model, year, numCar){
        super(name, model, year);
        this.numCar = numCar;
    }

    setNumCar(numCar) {
        this.numCar = numCar;
    }
    getNumCar(){
        return this.numCar;
    }

    turnOn(){
        console.log(`${this.name} ${this.model} is Turn On`);
    }

    turnOff(){
        console.log(`${this.name} ${this.model} is Turn Off`);
    }

    brake(){
        console.log(`Breake ${this.name} ${this.model}`);
    }

    toString() {
        return `${this.name} ${this.model} (${this.year}) - ${this.numCar}`;
      }
}

module.exports = Car;
