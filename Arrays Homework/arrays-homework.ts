let students: string[] = ["Ana", "Bojan", "Elena", "Marko", "Sofia"];

let studentsIndex: number = 0;
while (studentsIndex < students.length) {
  console.log(students[studentsIndex]);
  studentsIndex++;
}

let grades: number[] = [4.5, 3.7, 5.8, 6.2, 2.9];

let sum: number = 0;
let gradesIndex: number = 0;
while (gradesIndex < grades.length) {
  sum = sum + grades[gradesIndex];
  gradesIndex++;
}

let average: number = sum / grades.length;
console.log("Sum: " + sum);
console.log("Average: " + average);

let field: number[] = [2, 20, 3, 13, 15, 3, 9, 10, 1, 5, 8];

let oddNumbers: number = 0;
let fieldIndex: number = 0;
while (fieldIndex < field.length) {
  if (field[fieldIndex] % 2 !== 0) {
    oddNumbers++;
  }

  fieldIndex++;
}

console.log("Odd numbers: " + oddNumbers);

let numbers: number[] = [10, 25, 30, 45, 10];

if (numbers[0] === numbers[numbers.length - 1]) {
  console.log("The first and the last element are the same.");
} else {
  console.log("The first and the last element are different.");
}
