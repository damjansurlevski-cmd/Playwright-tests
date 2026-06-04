
let x: number = 0;
let y: number = 5;

if (y > 0) {
    x = 1;
}

console.log("Task 1 result:", x);



let value: number = 85;

if (value >= 80 && value <= 90) {
    value = value + 5;
    console.log("Task 2 result:", value);
} else if (value < 80) {
    value = value + 3;
    console.log("Task 2 result:", value);
} else {
    console.log("The variable value isn't changed");
}

let month: number = 9;
let monthString: string = "";

switch (month) {
    case 1:
        monthString = "January";
        break;
    case 2:
        monthString = "February";
        break;
    case 3:
        monthString = "March";
        break;
    case 4:
        monthString = "April";
        break;
    case 5:
        monthString = "May";
        break;
    case 6:
        monthString = "June";
        break;
    case 7:
        monthString = "July";
        break;
    case 8:
        monthString = "August";
        break;
    case 9:
        monthString = "September";
        break;
    case 10:
        monthString = "October";
        break;
    case 11:
        monthString = "November";
        break;
    case 12:
        monthString = "December";
        break;
    default:
        monthString = "Invalid month";
}

console.log("Task 3 result:", monthString);

let count: number = 10;

while (count >= 1) {
    console.log("Task 4 count:", count);
    count = count - 1;
}

for (let number: number = 5; number <= 100; number = number + 5) {
    console.log("Task 5 number:", number);
}

for (let index: number = 0; index < 5; index++) {
    if (index === 2) {
        break;
    }

    console.log("Task 6 index:", index);
}
