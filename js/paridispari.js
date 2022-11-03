let divisibility = prompt('Pari o dispari?').toLowerCase();

divisibility = divisibility === 'pari' ? 0 : 1;

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

const computerNumber = randomNumber(1, 5);

if (isDivisible(userNumber + computerNumber, divisibility)) {
	console.log(userNumber, computerNumber, 'Hai vinto');
} else {
	console.log(userNumber, computerNumber, 'Hai perso');
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isDivisible(number, divisibility) {
	if ((divisibility === 0 && number % 2 === 0) || (divisibility === 1 && number % 2 !== 0)) {
		return true;
	}
	return false;
}