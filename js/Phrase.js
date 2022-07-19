class Phrase {	
	constructor(phrase) {
	this.phrase = phrase.toLowerCase();
	}
	addPhraseToDisplay() {
	const phraseBox = document.querySelector('#phrase ul');
	
	for (let i = 0; i < this.phrase.length; i++) {
	    if (this.phrase[i] === ' ') {
	    phraseBox.innerHTML += `<li class="space"> </li>`;
	        } else {    
	    phraseBox.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
	        }
	    }
	}
	checkLetter(letter) {
	return this.phrase.includes(letter);
	}
	showMatchedLetter(letter) {
	const splitLetter = document.getElementsByClassName(letter)
	    for (let i = 0; i < splitLetter.length; i++) {
	        if (splitLetter[i].textContent.includes(letter)) {
	    splitLetter[i].className=`show letter ${letter}`
	        }
	    }
	}
}
