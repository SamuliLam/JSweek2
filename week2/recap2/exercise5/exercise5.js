"use strict";

const numbers = [5, 2, 8, 1, 9];

function sortArray(array, order) {
  if (order === "asc") {
    return array.sort((a, b) => a - b);
  } else if (order === "desc") {
    return array.sort((a, b) => b - a);
  }
}


console.log(sortArray(numbers, "asc")); 
console.log(sortArray(numbers, "desc"));