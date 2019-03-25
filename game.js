var backgroundColor = document.body.style.background;
var h1 = document.querySelector('h1');
var rgbDisplay = document.querySelector('h2');
var cards = document.querySelectorAll('.card');
var resetButton = document.getElementById('reset');
var resultDisplay = document.getElementById('result');
var colors = generateRandArrayColors(6);
var targetColor = pickRandTargetColor();

rgbDisplay.textContent = targetColor;

resetButton.addEventListener('click', function() {
	resetButton.textContent = 'New Colors';
	h1.style.backgroundColor = backgroundColor;
	// Generate new colors
	colors = generateRandArrayColors(6);
	// Pick new target color from array
	targetColor = pickRandTargetColor();
	// Updates the
	rgbDisplay.textContent = targetColor;
	// Change colors of cards
	for (let i = 0; i < cards.length; i++) {
		cards[i].style.backgroundColor = colors[i];
	}
});

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
			h1.style.backgroundColor = targetColor;
			resetButton.textContent = 'Play again?';
		}
		else {
			this.style.backgroundColor = backgroundColor;
			resultDisplay.textContent = 'Wrong, try again';
		}
	});
}

// Changes the colors of all the cards when
// answered correctly
function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		cards[i].style.background = color;
	}
}

// Creates random number between 0 - colors.length
// and returns a random index in the colors array
function pickRandTargetColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Creates an array of num random colors
function generateRandArrayColors(num) {
	// Make array
	var array = [];
	// Add num random colors to array
	for (let i = 0; i < num; i++) {
		array.push(generateRandColor());
	}
	// return array
	return array;
}

// Generates a single random RGB color string
function generateRandColor() {
	let RGBstr = 'rgb(';
	RGBstr += String(Math.floor(Math.random() * 256)); // R
	RGBstr += ', ';
	RGBstr += String(Math.floor(Math.random() * 256)); // G
	RGBstr += ', ';
	RGBstr += String(Math.floor(Math.random() * 256)); // B
	RGBstr += ')';
	return RGBstr;
}
