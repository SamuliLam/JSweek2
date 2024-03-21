"use strict";

function isEquilateral(side1, side2, side3) {
  return side1 == side2 && side2 == side3 && side3 == side1;
}

function isIsosceles(side1, side2, side3) {
  return (
    (side1 === side2 && side1 !== side3) ||
    (side1 === side3 && side1 !== side2) ||
    (side2 === side3 && side2 !== side1)
  );
}

function isScalene(side1, side2, side3) {
  return side1 != side2 && side2 != side3 && side1 != side3;
}

function findType(side1, side2, side3) {
  if (isScalene(side1, side2, side3)) {
    return "Scalene";
  } else if (isIsosceles(side1, side2, side3)) {
    return "Isosceles";
  } else if (isEquilateral(side1, side2, side3)) {
    return "Equilateral";
  } else {
    return "Not a valid triangle";
  }
}

function writeResultToHtml() {
  const side1 = Number(
    prompt("Enter the lenght of the first side of the triangle!")
  );
  const side2 = Number(
    prompt("Enter the lenght of the second side of the triangle!")
  );
  const side3 = Number(
    prompt("Enter the lenght of the third side of the triangle!")
  );

  const type = findType(side1, side2, side3);
  const paragraph = document.createElement("p");
  paragraph.innerText = "The triangle type is: " + type;
  document.body.appendChild(paragraph);
}

function main() {
  writeResultToHtml();
}

main();
