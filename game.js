var colors = generateRandArrayColors(6);

var backgroundColor = document.body.style.background;
var rgbDisplay = document.querySelector('h2');
var cards = document.querySelectorAll('.card');
var resultDisplay = document.getElementById('result');
var targetColor = pickRandTargetColor();

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

function pickRandTargetColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

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

// Generates a random RGB color
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
