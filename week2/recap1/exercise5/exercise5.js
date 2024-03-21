"use strict";

function getNumber() {
  const num = Number(prompt("Enter a positive integer"));
  return num;
}

function calculateSumInRangeToNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  return sum;
}

function sumToHtml() {
  const num = getNumber();
  const sum = calculateSumInRangeToNumber(num);
  const paragraph = document.createElement("p");
  paragraph.innerText = "Sum " + sum.toString();
  document.body.appendChild(paragraph);
}

function main() {
  sumToHtml();
}

main();
