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

    turnOn() {
        console.log(`${this.getInfo()} is Turn On`);
    }

    turnOff() {
        console.log(`${this.getInfo()} is Turn Off`);
    }

    brake() {
        console.log(`Brake ${this.getInfo()}`);
    }

    // Abstraction
    toString() {
        return `${this.getInfo()} - ${this.#numCar}`;
    }
}

module.exports = Car;
