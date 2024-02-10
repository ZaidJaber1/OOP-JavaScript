const VehicleInterface = require('./VehicleInterface');

class Vehicle extends VehicleInterface {
    #name;
    #model;
    #year;

    constructor(name, model, year) {
        super();
        this.#name = name;
        this.#model = model;
        this.#year = year;
    }

    // Encapsulation
    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setModel(model) {
        this.#model = model;
    }

    getModel() {
        return this.#model;
    }

    setYear(year) {
        this.#year = year;
    }

    getYear() {
        return this.#year;
    }

    // Polymorphism
    turnOn() {
        console.log("Vehicle is Turn On");
    }

    turnOff() {
        console.log("Vehicle is Turn Off");
    }

    brake() {
        console.log("Brake Vehicle");
    }

    // Abstraction
    getInfo() {
        return `${this.getName()} ${this.getModel()} (${this.getYear()})`;
    }
}

module.exports = Vehicle;
