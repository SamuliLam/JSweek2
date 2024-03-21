"use strict";

let numbers = [];
let number;

for (let index = 0; index < 5; index++) {
  number = Number(prompt("Enter a number"));
  numbers.push(number);
}

console.log("Numbers: " + numbers);

const number2 = Number(prompt("Enter a number to search: "));
if (numbers.includes(number2)) {
  console.log("Number " + number2 + " is found in the array.");
} else {
  console.log("Number " + number2 + " is not found in the array.");
}

numbers.pop();

console.log("Updated Numbers: " + numbers + "\n");

numbers.sort(function (a, b) {
  return a - b;
});
console.log("Sorted Numbers: " + numbers);
