'use strict';

let div = document.querySelector('#target');

const browserName = navigator.userAgent;
const browserP = document.createElement('p');
browserP.innerText = browserName;
div.appendChild(browserP);


const opSystem = navigator.platform;
const opSystemP = document.createElement('p');
opSystemP.innerText = opSystem;
div.appendChild(opSystemP);

const windowSize = window.innerWidth + 'x' + window.innerHeight;
const windowSizeP = document.createElement('p');
windowSizeP.innerText = windowSize;
div.appendChild(windowSizeP);

const availScreenSize = window.screen.availWidth + 'x' + window.screen.availHeight;
const availScreenSizeP = document.createElement('p');
availScreenSizeP.innerText = availScreenSize;
div.appendChild(availScreenSizeP);

const currentTime = new Date();
const currentTimeP = document.createElement('p');
currentTimeP.innerText = currentTime.toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' });
div.appendChild(currentTimeP);
