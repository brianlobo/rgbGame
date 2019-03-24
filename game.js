var colors = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(0, 255, 0)',
	'rgb(0, 255, 255)',
	'rgb(0, 0, 255)',
	'rgb(255, 0, 255)'
];

var backgroundColor = document.body.style.background;
var rgbDisplay = document.querySelector('h2');
var cards = document.querySelectorAll('.card');
var resultDisplay = document.getElementById('result');
var targetColor = pickRandColor();

rgbDisplay.textContent = targetColor;

for (let i = 0; i < cards.length; i++) {
	// Sets cards initial color
	cards[i].style.backgroundColor = colors[i];

	// Listens for clicks on the card
	cards[i].addEventListener('click', function() {
		// Get color of clicked card
		let clickedColor = this.style.backgroundColor;

		// Compare the two
		if (clickedColor === targetColor) {
			resultDisplay.textContent = 'Correct!';
			changeColors(targetColor);
		}
		else {
			this.style.backgroundColor = backgroundColor;
			resultDisplay.textContent = 'Wrong, try again';
		}
	});
}

function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		cards[i].style.background = color;
	}
}

function pickRandColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
