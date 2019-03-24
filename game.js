var colors = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(0, 255, 0)',
	'rgb(0, 255, 255)',
	'rgb(0, 0, 255)',
	'rgb(255, 0, 255)'
];

var cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	cards[i].style.backgroundColor = colors[i];
}
