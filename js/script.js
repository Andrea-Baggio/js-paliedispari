const word = prompt('Dammi la parola da testare'); 

function palindrom(testWord) {
	let invertedWord = '';
	for (let i = testWord.length - 1; i >= 0; i--) {
		invertedWord += testWord[i];
	}
	if (testWord === invertedWord) {
		return true;
	}
	return false;
}

if (palindrom(word)) {
	console.log('palindroma');
} else {
	console.log('NON palindroma');
}