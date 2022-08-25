'use strict';

// selecting all gallery pics
let galleryPic = document.querySelectorAll('.gallery-pic');

// selecting pictures for each category
let pic0 = document.querySelector('.pic0');
let pic1 = document.querySelector('.pic1');
let pic2 = document.querySelector('.pic2');
let KGpic0 = document.querySelector('.KGpic0');
let KGpic1 = document.querySelector('.KGpic1');
let KGpic2 = document.querySelector('.KGpic2');
let BRpic0 = document.querySelector('.BRpic0');
let BRpic1 = document.querySelector('.BRpic1');
let BRpic2 = document.querySelector('.BRpic2');
let BApic0 = document.querySelector('.BApic0');
let BApic1 = document.querySelector('.BApic1');
let BApic2 = document.querySelector('.BApic2');
let OFpic0 = document.querySelector('.OFpic0');
let OFpic1 = document.querySelector('.OFpic1');
let OFpic2 = document.querySelector('.OFpic2');

// selecting back arrow for each category
let back = document.querySelector('.back');
let backKitchen = document.querySelector('.back-kitchen');
let backBedroom = document.querySelector('.back-bedroom');
let backBathroom = document.querySelector('.back-bathroom');
let backOffice = document.querySelector('.back-office');


// selecting next arrow for each category
let next = document.querySelector('.next');
let nextKitchen = document.querySelector('.next-kitchen');
let nextBedroom = document.querySelector('.next-bedroom');
let nextBathroom = document.querySelector('.next-bathroom');
let nextOffice = document.querySelector('.next-office');

// selecting elements for overlay
let overlayClose = document.querySelector('.overlay-close');
let body = document.getElementsByTagName('body')[0];
let clickOverlay = document.querySelector('.clickOverlay');
let overlayWrapper = document.querySelector('.overlay-wrapper');
let overlayImg = document.querySelector('.overlay-img');

// selecting filter elements
let filterSelector = document.querySelectorAll('.filter-selector');
let livingroomSection = document.querySelector('.livingroom');
let kitchenSection = document.querySelector('.kitchen');
let bedroomSection = document.querySelector('.bedroom');
let bathroomSection = document.querySelector('.bathroom');
let kidsroomSection = document.querySelector('.kidsroom');
let officeSection = document.querySelector('.office');

// function to hide all categories
let hideAll = function () {
	livingroomSection.style.display = 'none';
	kitchenSection.style.display = 'none';
	bedroomSection.style.display = 'none';
	bathroomSection.style.display = 'none';
	kidsroomSection.style.display = 'none';
	officeSection.style.display = 'none';
};


// function to display all categories
let showAll = function () {
	livingroomSection.style.display = 'block';
	kitchenSection.style.display = 'block';
	bedroomSection.style.display = 'block';
	bathroomSection.style.display = 'block';
	kidsroomSection.style.display = 'block';
	officeSection.style.display = 'block';
};

// grabbing each filter item to add an event listener to it.
filterSelector.forEach((selector) => {
	selector.addEventListener('click', function () {
		// ugly code and logic to remove the active class for each item once one has been clicked
		filterSelector.forEach((remove) => {
			remove.classList.remove('filter-active');
		});

		// checking for selector innertext, based on which once upon clicked it displays it`s own
		// category
		switch (selector.innerText) {
			case 'Living Room':
				selector.classList.add('filter-active');
				hideAll();

				livingroomSection.style.display = 'block';
				break;

			case 'Kitchen':
				selector.classList.add('filter-active');
				hideAll();
				kitchenSection.style.display = 'block';
				break;

			case 'Bedroom':
				selector.classList.add('filter-active');
				hideAll();
				bedroomSection.style.display = 'block';
				break;

			case 'Bathroom':
				selector.classList.add('filter-active');
				hideAll();
				bathroomSection.style.display = 'block';
				break;

			case 'Kid`s Room':
				selector.classList.add('filter-active');
				hideAll();
				kidsroomSection.style.display = 'block';
				break;

			case 'Office':
				selector.classList.add('filter-active');
				hideAll();
				officeSection.style.display = 'block';
				break;

			case 'All':
				selector.classList.add('filter-active');
				hideAll();
				showAll();
				break;
		}
	});
});

// selecting all gallerypics to add overlay on click
galleryPic.forEach((pic) => {
	pic.addEventListener('click', function () {
		clickOverlay.style.display = 'flex';
		overlayImg.src = pic.src;
		body.style.overflow = 'hidden';
		clickOverlay.addEventListener('click', function () {
			body.style.overflow = 'auto';
			clickOverlay.style.display = 'none';
		});
		overlayClose.addEventListener('click', function () {
			body.style.overflow = 'auto';
			clickOverlay.style.display = 'none';
		});
	});
});


// same thing as did previously,

// both indexes of the array representing the first and the last photo that is displayed
let posArr = [0, 2];
next.addEventListener('click', function () {
	posArr[1]++;
	posArr[0]++;
	pic0.src = pic1.src;
	pic1.src = pic2.src;
	back.style.display = 'block';
	pic2.src = `./assets/images/livingroom/img${posArr[1]}.png`;
	if (posArr[1] === 7) {
		next.style.display = 'none';
	}
});

back.addEventListener('click', function () {
	posArr[1]--;
	posArr[0]--;
	next.style.display = 'block';
	if (posArr[0] === 0) {
		back.style.display = 'none';
	}

	pic2.src = pic1.src;
	pic1.src = pic0.src;
	pic0.src = `./assets/images/livingroom/img${posArr[0]}.png`;
});

let posArrKitchen = [0, 2];
nextKitchen.addEventListener('click', function () {
	posArrKitchen[1]++;
	posArrKitchen[0]++;
	KGpic0.src = KGpic1.src;
	KGpic1.src = KGpic2.src;
	backKitchen.style.display = 'block';
	KGpic2.src = `./assets/images/kitchen/img${posArrKitchen[1]}.png`;
	if (posArrKitchen[1] === 8) {
		nextKitchen.style.display = 'none';
	}
});

backKitchen.addEventListener('click', function () {
	posArrKitchen[1]--;
	posArrKitchen[0]--;
	nextKitchen.style.display = 'block';
	if (posArrKitchen[0] === 0) {
		backKitchen.style.display = 'none';
	}

	KGpic2.src = KGpic1.src;
	KGpic1.src = KGpic0.src;
	KGpic0.src = `./assets/images/kitchen/img${posArrKitchen[0]}.png`;
});

let posArrBedroom = [0, 2];
nextBedroom.addEventListener('click', function () {
	posArrBedroom[1]++;
	posArrBedroom[0]++;
	BRpic0.src = BRpic1.src;
	BRpic1.src = BRpic2.src;
	backBedroom.style.display = 'block';
	BRpic2.src = `./assets/images/bedroom/img${posArrBedroom[1]}.png`;
	if (posArrBedroom[1] === 6) {
		nextBedroom.style.display = 'none';
	}
});

backBedroom.addEventListener('click', function () {
	posArrBedroom[1]--;
	posArrBedroom[0]--;
	nextBedroom.style.display = 'block';
	if (posArrBedroom[0] === 0) {
		backBedroom.style.display = 'none';
	}

	BRpic2.src = BRpic1.src;
	BRpic1.src = BRpic0.src;
	BRpic0.src = `./assets/images/bedroom/img${posArrBedroom[0]}.png`;
});

let posArrBathroom = [0, 2];
nextBathroom.addEventListener('click', function () {
	posArrBathroom[1]++;
	posArrBathroom[0]++;
	BApic0.src = BApic1.src;
	BApic1.src = BApic2.src;
	backBathroom.style.display = 'block';
	BApic2.src = `./assets/images/bathroom/img${posArrBathroom[1]}.png`;
	if (posArrBathroom[1] === 8) {
		nextBathroom.style.display = 'none';
	}
});

backBathroom.addEventListener('click', function () {
	posArrBathroom[1]--;
	posArrBathroom[0]--;
	nextBathroom.style.display = 'block';
	if (posArrBathroom[0] === 0) {
		backBathroom.style.display = 'none';
	}

	BApic2.src = BApic1.src;
	BApic1.src = BApic0.src;
	BApic0.src = `./assets/images/bathroom/img${posArrBathroom[0]}.png`;
});

let posArrOffice = [0, 2];
nextOffice.addEventListener('click', function () {
	posArrOffice[1]++;
	posArrOffice[0]++;
	OFpic0.src = OFpic1.src;
	OFpic1.src = OFpic2.src;
	backOffice.style.display = 'block';
	OFpic2.src = `./assets/images/office/img${posArrOffice[1]}.png`;
	if (posArrOffice[1] === 3) {
		nextOffice.style.display = 'none';
	}
});

backOffice.addEventListener('click', function () {
	posArrOffice[1]--;
	posArrOffice[0]--;
	nextOffice.style.display = 'block';
	if (posArrOffice[0] === 0) {
		backOffice.style.display = 'none';
	}

	OFpic2.src = OFpic1.src;
	OFpic1.src = OFpic0.src;
	OFpic0.src = `./assets/images/office/img${posArrOffice[0]}.png`;
});


// mobile selectors
let nextMobileLR = document.querySelector('.nextMobileLR');
let backMobileLR = document.querySelector('.backMobileLR');

let nextMobileKI = document.querySelector('.nextMobileKI');
let backMobileKI = document.querySelector('.backMobileKI');

let nextMobileBR = document.querySelector('.nextMobileBR');
let backMobileBR = document.querySelector('.backMobileBR');

let nextMobileBA = document.querySelector('.nextMobileBA');
let backMobileBA = document.querySelector('.backMobileBA');

let nextMobileKR = document.querySelector('.nextMobileKR');
let backMobileKR = document.querySelector('.backMobileKR');

let nextMobileOF = document.querySelector('.nextMobileOF');
let backMobileOF = document.querySelector('.backMobileOF');

let mobilePicLR = document.querySelector('.mobilePicLR');
let mobilePicKI = document.querySelector('.mobilePicKI');
let mobilePicBR = document.querySelector('.mobilePicBR');
let mobilePicBA = document.querySelector('.mobilePicBA');
let mobilePicKR = document.querySelector('.mobilePicKR');
let mobilePicOF = document.querySelector('.mobilePicOF');

let posLR = 0;
nextMobileLR.addEventListener('click', function () {
	posLR++;
	backMobileLR.style.display = 'block';
	mobilePicLR.src = `./assets/images/livingroom/img${posLR}.png`;
	if (posLR === 7) {
		nextMobileLR.style.display = 'none';
	}
});

backMobileLR.addEventListener('click', function () {
	posLR--;
	nextMobileLR.style.display = 'block';
	mobilePicLR.src = `./assets/images/livingroom/img${posLR}.png`;
	if (posLR === 0) {
		backMobileLR.style.display = 'none';
	}
});

let posKI = 0;
nextMobileKI.addEventListener('click', function () {
	posKI++;
	backMobileKI.style.display = 'block';
	mobilePicKI.src = `./assets/images/kitchen/img${posKI}.png`;
	if (posKI === 8) {
		nextMobileKI.style.display = 'none';
	}
});

backMobileKI.addEventListener('click', function () {
	posKI--;
	nextMobileKI.style.display = 'block';
	mobilePicKI.src = `./assets/images/kitchen/img${posKI}.png`;
	if (posKI === 0) {
		backMobileKI.style.display = 'none';
	}
});

let posBR = 0;
nextMobileBR.addEventListener('click', function () {
	posBR++;
	backMobileBR.style.display = 'block';
	mobilePicBR.src = `./assets/images/bedroom/img${posBR}.png`;
	if (posBR === 6) {
		nextMobileBR.style.display = 'none';
	}
});

backMobileBR.addEventListener('click', function () {
	posBR--;
	nextMobileBR.style.display = 'block';
	mobilePicBR.src = `./assets/images/bedroom/img${posBR}.png`;
	if (posBR === 0) {
		backMobileBR.style.display = 'none';
	}
});

let posBA = 0;
nextMobileBA.addEventListener('click', function () {
	posBA++;
	backMobileBA.style.display = 'block';
	mobilePicBA.src = `./assets/images/bathroom/img${posBA}.png`;
	if (posBA === 7) {
		nextMobileBA.style.display = 'none';
	}
});

backMobileBA.addEventListener('click', function () {
	posBA--;
	nextMobileBA.style.display = 'block';
	mobilePicBA.src = `./assets/images/bathroom/img${posBA}.png`;
	if (posBA === 0) {
		backMobileBA.style.display = 'none';
	}
});

let posKR = 0;
nextMobileKR.addEventListener('click', function () {
	posKR++;
	backMobileKR.style.display = 'block';
	mobilePicKR.src = `./assets/images/kidsroom/img${posKR}.png`;
	if (posKR === 2) {
		nextMobileKR.style.display = 'none';
	}
});

backMobileKR.addEventListener('click', function () {
	posKR--;
	nextMobileKR.style.display = 'block';
	mobilePicKR.src = `./assets/images/kidsroom/img${posKR}.png`;
	if (posKR === 0) {
		backMobileKR.style.display = 'none';
	}
});

let posOF = 0;
nextMobileOF.addEventListener('click', function () {
	posOF++;
	backMobileOF.style.display = 'block';
	mobilePicOF.src = `./assets/images/office/img${posOF}.png`;
	if (posOF === 3) {
		nextMobileOF.style.display = 'none';
	}
});

backMobileOF.addEventListener('click', function () {
	posOF--;
	nextMobileOF.style.display = 'block';
	mobilePicOF.src = `./assets/images/office/img${posOF}.png`;
	if (posOF === 0) {
		backMobileOF.style.display = 'none';
	}
});
