const Car = require('./Car');

const myCar = new Car("VW", "GTI", 2020, 45600);

myCar.turnOn();
myCar.turnOff();
myCar.brake();

console.log(myCar.toString());