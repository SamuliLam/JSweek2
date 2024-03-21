"use strict";

const fruits = ["apple", "bananan", "grape", "kiwi"];
console.log("Fruits: " + fruits);
console.log("Length of Fruits: " + fruits.length);
console.log("Element at Index 2: " + '"' + fruits[2] + '"');
console.log("Last Element of Fruits: " + '"' + fruits[fruits.length - 1] + '"');

let vegetables = [];

for (let index = 0; index < 3; index++) {
  const userInput = prompt("Enter a vegetable");
  vegetables.push(userInput);
}

console.log("Vegetables: " + vegetables);

console.log("Length of Vegetables: " + vegetables.length);
