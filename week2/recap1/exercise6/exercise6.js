"use strict";

function getNumber() {
  const num = Number(prompt("Give a number"));
  return num;
}

function multiplicationTable(num) {
  let table = "";
  for (let i = 1; i <= num; i++) {
    let row = "<tr>";
    for (let j = 1; j <= num; j++) {
      row += "<td>" + i * j + "</td>";
    }
    row += "</tr>";
    table += row;
  }
  return table;
}

function multiplicationTableToHtml() {
  const num = getNumber();
  const tableRows = multiplicationTable(num);
  const table = document.createElement("table");
  table.innerHTML = tableRows;
  document.body.appendChild(table);
}

function main() {
  multiplicationTableToHtml();
}

main();
