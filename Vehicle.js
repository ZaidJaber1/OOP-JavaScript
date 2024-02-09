class Vehicle {
    //constructor
    constructor (name, modle, year){
        this.name = name;
        this.modle = modle;
        this.year = year;
    }

    //Encapsulation
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setModle(modle){
        this.modle = modle;
    }
    getModle(){
        return this.modle;
    }

    setYear(year){
        this.year = year;
    }
    getYear(){
        return this.year;
    }   
}