let numbers: number[] = [5, 3, 8, 1, 9, 2, 10, 15, 20];

// find – returns first match or undefined
let firstBig = numbers.find(n => n > 7);

// filter – returns all matches as new array
let bigNumbers = numbers.filter(n => n > 5);

// map – transforms each element into a new array
let doubled = numbers.map(n => n * 2);

// includes – checks if value exists
let hasThree = numbers.includes(3);

console.log("Numbers:", numbers);
console.log("First number bigger than 7:", firstBig);
console.log("Numbers bigger than 5:", bigNumbers);
console.log("Doubled numbers:", doubled);
console.log("Has number 3:", hasThree);