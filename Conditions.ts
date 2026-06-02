let x: number = 26;
let y: number = 25;
 
switch (true) {
  case x > y:
    console.log("x is greater than y");
    break;
  case x < y:
    console.log("x is not greater than y");
    break;
  default:
    console.log("x is equal to y");
}
 
switch (x) {
  case 10:
    console.log("x is 10");
    break;
  case 20:
    console.log("x is 20");
    break;
  default:
    console.log("x is neither 10 nor 20");
}
 
if (20 > 18) {
  console.log("20 is greater than 18");
} else {
  console.log("20 is not greater than 21");
}
 
if (x > y && x > 10) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is not greater than y");
} else {
  console.log("x is equal to y");
}
 
let result =
  x > y
    ? "x is greater than y"
    : x < y
      ? "x is not greater than y"
      : " x is equal to y";
 
console.log(result);
 
if (x > 20) {
  if (x > y) {
    console.log("x is greater than y and x is greater than 20");
  } else {
    console.log("x is not greater than y but x is greater than 20");
  }
} else {
  if (x > y) {
    console.log("x is greater than y but x is not greater than 20");
  } else {
    console.log("x is not greater than y and x is not greater than 20");
  }
}
 
console.log("End of File");
console.log (result)
