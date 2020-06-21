class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
    * This function creates an array with new instances of the Phrase object. Each object
    contains a string.
    * @return {Object} All Phrase objects
  */

  createPhrases() {
    const phrases = [
      new Phrase('JavaScript'),
      new Phrase('NodeJS'),
      new Phrase('ReactJS'),
      new Phrase('VueJS'),
    ];
    return phrases;
  }

  /**
   * This function creates a variable which contains a random value between 0 and the
   * length of the phrase array (index).
   * @return a {Object} which contains the phrases, but picks one of them by the index.
   */

  getRandomPhrase() {
    const random = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[random];
    return randomPhrase;
  }

  /**
   * Removes the overlay element which hides the game interface. It'll then run the
   * getRandomPhrase function on the activePhrase object. And then runs the addPhraseToDisplay
   * on the activePhrase object which now contains a random phrase.
   */

  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * This function disables each key that has been pressed. As long as the key doesn't contain the
   * class 'wrong', it will check if the key that was pressed matches a letter in the phrase. If it does,
   * it will perform some actions based on that.
   * @return the checkForWin function to see if the player has won the game.
   */

  handleInteraction(e) {
    e.disabled = true;
    const phrase = JSON.stringify(this.activePhrase.phrase);
    if (!e.classList.contains('wrong')) {
      if (!phrase.includes(e.textContent)) {
        e.classList.add('wrong');
        game.removeLife();
      } else {
        e.classList.add('chosen');
        game.activePhrase.showMatchedLetter(e.textContent);
        game.checkForWin();
      }
    }

    return game.checkForWin() === true ? game.gameOver(true) : null;
  }

  /**
   * Loop through every element that has the 'hide' class. The goal here is that if none of the
   * letters has the 'hide' class (which they start with). We can assume that we have won the game.
   * @return a {Boolean}. If there's 1 or more 'hide' classes. We return false. Otherwise we return true.
   */

  checkForWin() {
    const shroudedElement = document.querySelectorAll(`.hide`);
    for (let i = 0; i < shroudedElement.length; i++) {
      if (shroudedElement.length >= 1) {
        return false;
      }
    }
    return true;
  }

  /**
   * Exchange the liveHeart.png with lostHeart.png. Each time we make a falsy attempt, the
   * this.missed object gets incremented. Based on its index, we swap the images.
   * @return a {Object} which is a counter that contains each false attempt.
   */

  removeLife() {
    const images = document.querySelectorAll('.tries img');
    images[this.missed].src = './images/lostHeart.png';
    this.missed++;

    if (this.missed === 5) {
      this.gameOver(false);
    }

    return this.missed;
  }

  /**
   * This function handles the UI based on if the user either won or lost. It will add and remove
   * classes based on the win/lose condition.
   */

  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    const btn = document.getElementById('btn__reset');
    overlay.style.display = 'flex';

    if (gameWon === true) {
      overlay.classList.remove('start');
      overlay.classList.remove('lose');
      btn.classList.remove('btn-lose');
      overlay.classList.add('win');
      btn.classList.add('btn-win');
      message.textContent =
        'Congratulations! You guessed the word before you ran out of life!';
    } else if (gameWon === false) {
      btn.classList.remove('btn-win');
      btn.classList.add('btn-lose');
      overlay.classList.remove('start');
      overlay.classList.remove('win');
      overlay.classList.add('lose');
      message.textContent =
        'Oh no, you ran out of life and lost. Buckle up and try again!';
    }
  }
}
