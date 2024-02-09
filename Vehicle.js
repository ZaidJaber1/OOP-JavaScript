class Vehicle {
    //constructor
    constructor (name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    //Encapsulation
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setModle(model){
        this.model = model;
    }
    getModle(){
        return this.model;
    }

    setYear(year){
        this.year = year;
    }
    getYear(){
        return this.year;
    }
    
    //Polymorphism
    turnOn(){
        console.log("Vehicle is Turn On");
    }

    turnOff(){
        console.log("Vehicle is Turn Off");
    }

    brake(){
        console.log("Breake Vehicle");
    }
}

module.exports = Vehicle;
