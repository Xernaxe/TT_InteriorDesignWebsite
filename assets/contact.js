'use strict';

// selecting contact form items
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const note = document.querySelector('.note');
const button = document.querySelector('.button');
const alertPop = document.querySelector('.alert');
const alertP = document.querySelector('.alert-p');
const alertX = document.querySelector('.alert-x');

// some sort of paleolithic backend

//as the name suggests it is a storage array
let storage = [];

// display alert
function showAlert() {
	alertPop.style.display = 'flex';
	alertSpan.style.display = 'block';
	alertP.style.display = 'flex';
	alertX.style.display = 'block';
}

// display alert error
function showAlertErr() {
	alertPop.style.display = 'flex';
	alertPop.style.backgroundColor = 'rgb(237 49 49 / 70%)';
	alertP.style.display = 'flex';
	alertP.style.color = 'white';
	alertP.innerText =
		'Error! Please make sure that you filled correctly the form!';
	alertX.style.display = 'block';
}

// display alert success
function showAlertSuccess() {
	alertPop.style.display = 'flex';
	alertPop.style.backgroundColor = 'rgb(80, 245, 77)';
	alertP.style.display = 'flex';
	alertP.style.color = 'white';
	alertP.innerText = 'Success! Thank you, I will contact you soon!';
	alertX.style.display = 'block';
}

// hide alert
function hideAlert() {
	alertPop.style.display = 'none';
	alertP.style.display = 'none';
	alertX.style.display = 'none';
}

// onclick for the close button of the alert
alertX.addEventListener('click', function () {
	hideAlert();
});

// checking if the input fields are empty
button.addEventListener('click', function () {
	if (nameInput.value == '') {
		nameInput.classList.add('wrong');
		nameInput.addEventListener('click', function () {
			nameInput.classList.remove('wrong');
		});
	}
	if (emailInput.value == '') {
		emailInput.classList.add('wrong');
		emailInput.addEventListener('click', function () {
			emailInput.classList.remove('wrong');
		});
	}
	if (note.value == '') {
		note.classList.add('wrong');
		note.addEventListener('click', function () {
			note.classList.remove('wrong');
		});
	}

	if (nameInput.value == '' || emailInput.value == '' || note.value == '') {
		showAlertErr();
		setTimeout(() => {
			hideAlert();
		}, 15000);
	}
	if (emailInput.value != '' && nameInput.value != '' && note.value != '') {
		storage.push(new Array(nameInput.value, emailInput.value, note.value));
		console.log(storage);
		showAlertSuccess();

		// clearing the input fields
		emailInput.value = '';
		nameInput.value = '';
		note.value = '';
	}
});
