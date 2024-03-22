"use strict";

let numbers = [1,3,2,4,5,8,6,7,9,10];

function sortArray(array){
  let ascending = array.sort((a,b) => a-b);
  return ascending;
}

console.log(numbers);
console.log(sortArray(numbers));