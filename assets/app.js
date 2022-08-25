'use strict';



// ===== Selecting dots and hero img
const dot0 = document.querySelector('.dot0');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
let heroImg = document.querySelector('.hero-img');

// ===== arrays to for imgs and dots

let imgArray = ['img0', 'img1', 'img2'];
let dotArray = [dot0, dot1, dot2];

// ===== self changing pic, 3000 = time in ms
setInterval(function () {
	if (i >= imgArray.length) {
		i = 0;
	}
	dotArray.forEach((dot) => {
		dot.classList.remove('active');
	});
	dotArray[i].classList.add('active');
	heroImg.src = `./assets/images/hero${imgArray[i]}.png`;
	i++;
}, 3000);


// Variable to be incremented, represents position in combination with the setInterval
let i = 0;


dot0.addEventListener('click', function () {
	i = 0;
	if (dot0.classList.contains('active')) {
		return;
	} else {
		dot0.classList.add('active');
		if (dot1.classList.contains('active')) {
			dot1.classList.remove('active');
		} else if (dot2.classList.contains('active')) {
			dot2.classList.remove('active');
		}
	}
	heroImg.src = './assets/images/heroimg0.png';
});
dot1.addEventListener('click', function () {
	i = 1;
	dot1.classList.add('active');
	if (dot0.classList.contains('active')) {
		dot0.classList.remove('active');
	}
	if (dot2.classList.contains('active')) {
		dot2.classList.remove('active');
	}
	heroImg.src = './assets/images/heroimg1.png';
});
dot2.addEventListener('click', function () {
	i = 2;
	dot2.classList.add('active');
	if (dot0.classList.contains('active')) {
		dot0.classList.remove('active');
	}
	if (dot1.classList.contains('active')) {
		dot1.classList.remove('active');
	}
	heroImg.src = './assets/images/heroimg2.png';
});


// selecting 2nd round of dots
const dt0 = document.querySelector('.dot0-2nd');
const dt1 = document.querySelector('.dot1-2nd');
const dt2 = document.querySelector('.dot2-2nd');
const dt3 = document.querySelector('.dot3-2nd');

// function to clear active class from all dots
const clearDots = function () {
	dt0.classList.remove('active');
	dt1.classList.remove('active');
	dt2.classList.remove('active');
	dt3.classList.remove('active');
};


// selecting pics
let pic0 = document.querySelector('.mw-pic0');
let pic1 = document.querySelector('.mw-pic1');
let pic2 = document.querySelector('.mw-pic2');

// selecting back/next arrows
let back = document.querySelector('.back-mw');
let next = document.querySelector('.next-mw');

// selecting html paragraphs
let p0 = document.querySelector('.mw-p0');
let p1 = document.querySelector('.mw-p1');
let p2 = document.querySelector('.mw-p2');


// helpfull arrays and numbers that keep track of position/ pic to be displayed
let picArr = [pic0, pic1, pic2];
let dotPos = 0;
let posArr = [0, 2];
next.addEventListener('click', function () {
	// incrementing our values
	posArr[1]++;
	posArr[0]++;
	dotPos++;
	
	// switching values to create the desired effect
	pic0.src = pic1.src;
	p0.innerHTML = p1.innerHTML;
	p1.innerHTML = p2.innerHTML;

	// based on dotPos value display desired dot active class
	switch (dotPos) {
		case 0:
			clearDots();
			dt0.classList.add('dot0-2nd');
			dt0.classList.add('active');
			break;

		case 1:
			clearDots();
			dt1.classList.add('dot1-2nd');
			dt1.classList.add('active');
			break;

		case 2:
			clearDots();
			dt2.classList.add('dot2-2nd');
			dt2.classList.add('active');
			break;

		case 3:
			clearDots();
			dt3.classList.add('dot3-2nd');
			dt3.classList.add('active');
			break;
	}



	// based on posArr[1] which starts at 2, (representing the third picture from left to right)
	// if posArr[1] === 3 then change the paragraph to whatevers stated in case 3
	switch (posArr[1]) {
		case 0:
			p2.innerHTML = `Living Room`;
			break;

		case 1:
			p2.innerHTML = `Bedroom`;
			break;

		case 2:
			p2.innerHTML = `Bathroom`;
			break;

		case 3:
			p2.innerHTML = `Kitchen`;
			break;

		case 4:
			p2.innerHTML = `Kid's Room`;
			break;

		case 5:
			p2.innerHTML = 'Office';
			break;
	}

	//  switching pictures
	pic1.src = pic2.src;

	// if next button has been pressed => display button that allows user to go back one position
	back.style.display = 'block';

	// pic2 === third pic from left to right, so it is the one that has to receive the new value
	pic2.src = `./assets/images/mw${posArr[1]}.png`;

	// max value => next button gets hidden cuz there are only 6 pictures
	if (posArr[1] === 5) {
		next.style.display = 'none';
	}
});

// same thing but values get decresed by 1 for each click and the switching logic is reversed
back.addEventListener('click', function () {
	posArr[1]--;
	posArr[0]--;
	dotPos--;

	switch (dotPos) {
		case 0:
			clearDots();
			dt0.classList.add('dot0-2nd');
			dt0.classList.add('active');
			break;

		case 1:
			clearDots();
			dt1.classList.add('dot1-2nd');
			dt1.classList.add('active');
			break;

		case 2:
			clearDots();
			dt2.classList.add('dot2-2nd');
			dt2.classList.add('active');
			break;

		case 3:
			clearDots();
			dt3.classList.add('dot3-2nd');
			dt3.classList.add('active');
			break;
	}
	next.style.display = 'block';
	if (posArr[0] === 0) {
		back.style.display = 'none';
	}

	pic2.src = pic1.src;
	p2.innerHTML = p1.innerHTML;
	pic1.src = pic0.src;
	p1.innerHTML = p0.innerHTML;
	switch (posArr[0]) {
		case 0:
			p0.innerHTML = `Living Room`;
			break;

		case 1:
			p0.innerHTML = `Bedroom`;
			break;

		case 2:
			p0.innerHTML = `Bathroom`;
			break;

		case 3:
			p0.innerHTML = `Kitchen`;
			break;

		case 4:
			p0.innerHTML = `Kid's Room`;
			break;

		case 5:
			p0.innerHTML = 'Office';
			break;
	}

	// posArr[0] ==  value for the first pic from left to right
	pic0.src = `./assets/images/mw${posArr[0]}.png`;
});


// selecting item for mobile
let nextMobile = document.querySelector('.next-mobile');
let backMobile = document.querySelector('.back-mobile');
let mobileMw = document.querySelector('.mobile-mw');
let mobileMwp = document.querySelector('.mobile-mwp');


// there is only one photo displayed at a time so no need to keep track of multiple
// pictures
let mobilePos = 0;

// same as before but simplified
nextMobile.addEventListener('click', function () {
	mobilePos++;
	backMobile.style.display = 'block';
	mobileMw.src = `./assets/images/mw${mobilePos}.png`;
	if (mobilePos === 5) {
		nextMobile.style.display = 'none';
	}
	switch (mobilePos) {
		case 0:
			mobileMwp.innerHTML = `Living Room`;
			break;

		case 1:
			mobileMwp.innerHTML = `Bedroom`;
			break;

		case 2:
			mobileMwp.innerHTML = `Bathroom`;
			break;

		case 3:
			mobileMwp.innerHTML = `Kitchen`;
			break;

		case 4:
			mobileMwp.innerHTML = `Kid's Room`;
			break;

		case 5:
			mobileMwp.innerHTML = 'Office';
			break;
	}
});

backMobile.addEventListener('click', function () {
	mobilePos--;
	nextMobile.style.display = 'block';
	mobileMw.src = `./assets/images/mw${mobilePos}.png`;
	if (mobilePos === 0) {
		backMobile.style.display = 'none';
	}
	switch (mobilePos) {
		case 0:
			mobileMwp.innerHTML = `Living Room`;
			break;

		case 1:
			mobileMwp.innerHTML = `Bedroom`;
			break;

		case 2:
			mobileMwp.innerHTML = `Bathroom`;
			break;

		case 3:
			mobileMwp.innerHTML = `Kitchen`;
			break;

		case 4:
			mobileMwp.innerHTML = `Kid's Room`;
			break;

		case 5:
			mobileMwp.innerHTML = 'Office';
			break;
	}
});
