"use strict";

let numbers = [];
let userInput;

do {
  userInput = prompt("Enter a number (or 'done' to finish)");
  if (userInput !== "done" && userInput !== "") {
    numbers.push(Number(userInput));
  }
} while (userInput != "done");

const p = document.createElement("p");
document.body.appendChild(p);
const pText = "Even numbers: ";

if (numbers.length > 0) {
  p.innerText = pText;
  for (const number of numbers) {
    if (number % 2 === 0) {
      p.innerText += number +",";
    }
  }
}

if (p.innerText.trim() === pText.trim()) {
  p.innerText += "none";
}
