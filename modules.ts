import { Calculator } from "./calculator";
import { Car } from"./oop"

const calculator = new Calculator()
console.log(calculator.add())

const germanCar = new Car("BMW", 200, "X5")
germanCar.drive()
germanCar.accelerate()
Car.changingGear()
