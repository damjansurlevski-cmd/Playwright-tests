class MethodsClass {
  findSmallestNumber(num1: number, num2: number, num3: number): number {
    let smallestNumber = num1;

    if (num2 < smallestNumber) {
      smallestNumber = num2;
    }

    if (num3 < smallestNumber) {
      smallestNumber = num3;
    }

    return smallestNumber;
  }

  findAverage(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3;
  }

  sumOfDigits(number: number): number {
    let sum = 0;

    while (number > 0) {
      let digit = number % 10;
      sum = sum + digit;
      number = Math.floor(number / 10);
    }

    return sum;
  }
}

class Car {
  brand: string;
  model: string;
  transmissionType: string;
  fuelType: string;
  numberOfGears: number;

  constructor(
    brand: string,
    model: string,
    transmissionType: string,
    fuelType: string,
    numberOfGears: number,
  ) {
    this.brand = brand;
    this.model = model;
    this.transmissionType = transmissionType;
    this.fuelType = fuelType;
    this.numberOfGears = numberOfGears;
  }
}

class Person {
  firstName: string = "John";
  lastName: string = "Doe";
  age: number = 25;
  occupation: string = "Student";

  constructor(firstName?: string, lastName?: string, age?: number, occupation?: string) {
    if (firstName) this.firstName = firstName;
    if (lastName) this.lastName = lastName;
    if (age) this.age = age;
    if (occupation) this.occupation = occupation;
  }
}

const methodsClass = new MethodsClass();

console.log(methodsClass.findSmallestNumber(15, 7, 22));

let average = methodsClass.findAverage(10, 20, 30);
console.log(average);

console.log(methodsClass.sumOfDigits(12345));

const car = new Car("Volkswagen", "Golf", "Manual", "Petrol", 6);

console.log(
  `Car: ${car.brand}, ${car.model}, ${car.transmissionType}, ${car.fuelType}, ${car.numberOfGears} gears`,
);

car.model = "Passat";
car.fuelType = "Diesel";

console.log(`Updated car: ${car.brand}, ${car.model}, ${car.fuelType}`);

const person = new Person();

console.log(
  `${person.firstName} ${person.lastName} is ${person.age} years old and works as a ${person.occupation}.`,
);

person.firstName = "Alice";
person.lastName = "Smith";
person.age = 30;
person.occupation = "Teacher";

console.log(
  `${person.firstName} ${person.lastName} is ${person.age} years old and works as a ${person.occupation}.`,
);
