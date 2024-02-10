const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    #numCar;

    constructor(name, model, year, numCar) {
        super(name, model, year);
        this.#numCar = numCar;
    }

    setNumCar(numCar) {
        this.#numCar = numCar;
    }

    getNumCar() {
        return this.#numCar;
    }

    // Override turnOn method
    turnOn() {
        console.log(`${super.getInfo()} is Turn On`);
    }

    // Override turnOff method
    turnOff() {
        console.log(`${super.getInfo()} is Turn Off`);
    }

    // Override brake method
    brake() {
        console.log(`Brake ${super.getInfo()}`);
    }

    // Abstraction
    toString() {
        return `${super.getInfo()} - ${this.#numCar}`;
    }
}

module.exports = Car;
