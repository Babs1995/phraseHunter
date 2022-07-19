class Game {
    constructor() {
        //used to track the number of missed guesses
        this.missed = 0; 
        //only include letters and spaces— no numbers, punctuation or special characters
        this.phrases = [
            new Phrase('it is peanut butter and jelly time'),
            new Phrase('pump up the jam'),
            new Phrase('i am a barbie girl'),
            new Phrase('spice up your life'),
            new Phrase('show me the meaning of being lonely')
        ];
        this.activePhrase = null; 
    }
    // hides the start screen overlay
    startGame(){
        const hideScreen = document.getElementById("overlay");
        hideScreen.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }; 
    //this method randomly retrieves one of the phrases stored in array
    getRandomPhrase() {	
        const randomPhrase = Math.floor(this.phrases.length * Math.random() );
        return this.phrases[randomPhrase];
    };
    // checks if the clicked button matches a letter in the phrase, then directs the game based on a correct or incorrect guess
    handleInteraction(button){
        var letter = button.innerText;
        if(game.activePhrase.checkLetter(letter)){
            button.setAttribute('disabled', true); 
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter)
            if (this.checkForWin()){
                this.gameOver(true);
        }
        } else {
            button.setAttribute('disabled', true);
            button.classList.add('wrong');
              this.removeLife();
        }
    };
    //checks to see if the player has revealed all of the letters in the active phrase
    checkForWin() {
        const hideLetters = document.querySelectorAll('.hide');
        if (hideLetters.length === 0) {
            return true;  
        } else {
            return false;
        }
    };
    removeLife() {
        const scoreboard = document.querySelectorAll('img')
        console.log(scoreboard)
        if (this.missed === 4) { 
        this.gameOver(false);
        } else if (this.missed < 4){ 
            scoreboard[this.missed].src = "images/lostHeart.png";
            this.missed += 1;{ 

        } 
        //gameReset();
        }        
    }
    // displays original start screen overlay, updates overlay element with a friendly win or loss message
    gameOver(gameWon) {
        const hideScreen = document.querySelector('#overlay');
        hideScreen.style.display = '';
        const gameOverMessage = document.querySelector('#game-over-message')
        if (gameWon) {
            gameOverMessage.textContent = 'You win'
            hideScreen.classList.add('win');
            hideScreen.classList.remove('lose');
        } else {
            gameOverMessage.textContent = 'Better luck next time'; 
            hideScreen.classList.add('lose');

            //startScreenOverlay.classList.add('lose');
        }
        this.resetGame();
    }; 
    resetGame(){
        const phrase = document.getElementById('phrase');
        phrase.querySelector('ul').innerHTML = ''; 
        this.missed = 0;
        const letter = document.getElementById('letter');
        const button = qwerty.getElementsByTagName('button');
        for (let i = 0; i < button.length; i++) {
            button[i].disabled = false;
            button[i].classList.remove('chosen', 'wrong');
        }
        const tries = document.querySelectorAll('.tries img');
        for (let i = 0; i < tries.length; i++) {
        tries[i].src = 'images/liveHeart.png'; 
        }
        this.missed = 0;
    }

};
