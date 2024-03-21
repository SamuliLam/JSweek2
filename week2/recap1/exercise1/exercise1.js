'use strict';

function getCelcius(){
    const celcius = prompt("Enter the temperature in celsius you want to convert: ");
    return celcius;
}


function celsiusToFarenheit(celcius){
    const convertor = (celcius * 1.8) + 32;
    return convertor;
}

function writeConvertorToHtml(){
    const celcius = getCelcius();
    const paragraph = document.createElement("p");
    paragraph.innerText = celcius.toString() + " celsius is " + celsiusToFarenheit(celcius).toString() + " farenheit.";
    document.body.appendChild(paragraph);
}

function main(){
    writeConvertorToHtml();
}

main();