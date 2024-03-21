function getX1(){
    const x1 = prompt("Give the first x coordinate: ");
    return parseFloat(x1);
}

function getX2(){
    const x2 = prompt("Give the second x coordinate: ");
    return parseFloat(x2);
}

function getY1(){
    const y1 = prompt("Give the first y coordinate: ");
    return parseFloat(y1);
}

function getY2(){
    const y2 = prompt("Give the second y coordinate: ");
    return parseFloat(y2);
}

function calculateDistance2D(){
    x1 = getX1();
    x2 = getX2();
    y1 = getY1();
    y2 = getY2();
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}

function main(){
    distance = calculateDistance2D();
    const paragraph = document.createElement("p");
    paragraph.innerText = "Distance: " + distance.toString();
    document.body.appendChild(paragraph);
}

main();