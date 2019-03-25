var numOfCards = 6;
var colors = [];
var targetColor;
var backgroundColor = document.body.style.background;
var h1 = document.querySelector('h1');
var rgbDisplay = document.querySelector('h2');
var cards = document.querySelectorAll('.card');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');
var resultDisplay = document.getElementById('result');

init();

function init() {
	// Game mode button listeners
	setupModeButtonListeners();
	// Initialize Cards
	initCards();
	// Reset New Game
	reset();
}

// Resets the game when clicked
resetButton.addEventListener('click', function() {
	reset();
});

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
// Reset
function reset() {
	resetButton.textContent = 'New Colors';
	h1.style.backgroundColor = backgroundColor;
	rgbDisplay.style.backgroundColor = backgroundColor;
	resultDisplay.textContent = ' ';
	// Generate new colors
	colors = generateRandArrayColors(numOfCards);
	// Pick new target color from array
	targetColor = pickRandTargetColor();
	// Updates the
	rgbDisplay.textContent = targetColor;
	// Change colors of cards
	for (let i = 0; i < cards.length; i++) {
		if (colors[i]) {
			cards[i].style.display = 'block';
			cards[i].style.backgroundColor = colors[i];
		}
		else {
			cards[i].style.display = 'none';
		}
	}
}

function setupModeButtonListeners() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? (numOfCards = 3) : (numOfCards = 6);
			reset();
		});
	}
}

function initCards() {
	for (let i = 0; i < cards.length; i++) {
		// Listens for clicks on the card
		cards[i].addEventListener('click', function() {
			// Get color of clicked card
			let clickedColor = this.style.backgroundColor;

			// Compare the two
			if (clickedColor === targetColor) {
				resultDisplay.textContent = 'Correct!';
				resultDisplay.style.color = 'green';
				changeColors(targetColor);
				h1.style.backgroundColor = targetColor;
				rgbDisplay.style.backgroundColor = targetColor;
				resetButton.textContent = 'Play again?';
			}
			else {
				this.style.backgroundColor = backgroundColor;
				resultDisplay.textContent = 'Wrong, try again';
				resultDisplay.style.color = 'red';
			}
		});
	}
}
