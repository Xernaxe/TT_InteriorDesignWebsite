'use strict';

// selecting arrows
const arrowDown1 = document.querySelector('.arrowDown1');
const arrowDown2 = document.querySelector('.arrowDown2');
const arrowDown3 = document.querySelector('.arrowDown3');
const arrowDown4 = document.querySelector('.arrowDown4');


// selecting divs
const am1 = document.querySelector('.am-1');
const am2 = document.querySelector('.am-2');
const am3 = document.querySelector('.am-3');
const am4 = document.querySelector('.am-4');


// selecting textblocks
const textBlockAm1 = document.querySelector('.textblockAm1');
const textBlockAm2 = document.querySelector('.textblockAm2');
const textBlockAm3 = document.querySelector('.textblockAm3');
const textBlockAm4 = document.querySelector('.textblockAm4');



// adding on click events to display the hidden text
am1.addEventListener('click', function () {
	textBlockAm1.classList.toggle('displayBlock');
	arrowDown1.classList.toggle('rotate');
});

am2.addEventListener('click', function () {
	textBlockAm2.classList.toggle('displayBlock');
	arrowDown2.classList.toggle('rotate');
});

am3.addEventListener('click', function () {
	textBlockAm3.classList.toggle('displayBlock');
	arrowDown3.classList.toggle('rotate');
});

am4.addEventListener('click', function () {
	textBlockAm4.classList.toggle('displayBlock');
	arrowDown4.classList.toggle('rotate');
});
