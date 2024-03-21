"user strict";

function getScore() {
  const score = Number(prompt("Enter your score."));
  return score;
}

function checkGrade(score) {
  if (score >= 0 && score <= 39) {
    return 0;
  } else if (score >= 40 && score <= 51) {
    return 1;
  } else if (score >= 52 && score <= 63) {
    return 2;
  } else if (score >= 64 && score <= 75) {
    return 3;
  } else if (score >= 76 && score <= 87) {
    return 4;
  } else if (score >= 88 && score <= 100) {
    return 5;
  } else {
    return "Invalid score.";
  }
}

function resultToHtml() {
  const score = getScore();
  const grade = checkGrade(score);
  const paragraph = document.createElement("p");
  paragraph.innerText =
    "Your grade for score " + score.toString() + " is " + grade.toString();
  document.body.appendChild(paragraph);
}

function main() {
  resultToHtml();
}

main();
