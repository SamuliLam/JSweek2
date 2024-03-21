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

if (numbers.length > 0) {
  for (const number of numbers) {
    if (number % 2 === 0) {
      p.innerHTML += number + ",&nbsp;";
    }
  }
}

const p2 = document.createElement("p");
document.body.appendChild(p2);

p2.innerText = "Even Numbers: " + p.innerHTML;
