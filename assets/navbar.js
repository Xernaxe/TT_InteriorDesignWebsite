`use strict`;

// selecting bar div
let burgermenu = document.querySelector('.burger');
// selecting content to be revealed
let reveal = document.querySelector('.expanded-menu');

// onclick event
burgermenu.addEventListener('click', function () {
	if (reveal.style.display != 'block') {
		reveal.style.display = 'block';
	} else {
		reveal.style.display = 'none';
	}
});
