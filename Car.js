class Car extends Vehicle {
    constructor(name, modle, year, numCar){
        super(name, modle, year);
        this.numCar = numCar;
    }

    setNumCar(numCar) {
        this.numCar = numCar;
    }
    getNumCar(){
        return this.numCar;
    }

    turnOn(){
        console.log("Car is Turn On");
    }

    turnOff(){
        console.log("Car is Turn Off");
    }

    brake(){
        console.log("Breake Car");
    }
}

module.exports = Car;
