let products: [string, number, boolean][] = [
  ["Pen", 2, true],
  ["Book", 10, false],
  ["Bag", 25, true],
  ["Bottle", 5, true]
];

let total = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i][2] === true) {
    console.log(products[i][0]);
    total = total + products[i][1];
  }
}

console.log("Total value:", total);