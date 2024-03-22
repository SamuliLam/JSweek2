'use strict';

let div = document.querySelector('#target');

const browserName = navigator.userAgent;
const browserP = document.createElement('p');
browserP.innerText = browserName;
div.appendChild(browserP);
