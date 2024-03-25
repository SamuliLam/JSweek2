"use strict";

async function getData(method) {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23", {
      method: method,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

getData('POST');
getData('PATCH');
getData('GET');