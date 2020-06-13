class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  createPhrases() {
    const phrases = [new Phrase('Hello'), new Phrase('Brown Big Fox')];
    return phrases;
  }

  getRandomPhrase() {
    const random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }

  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.getRandomPhrase();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction() {}

  checkForWin() {
    const shroudedElement = document.querySelectorAll(`.hide`);
    for (let i = 0; i < shroudedElement.length; i++) {
      if (shroudedElement.length >= 1) {
        return false;
      }
    }
    return true;
  }

  removeLife() {
    const images = document.querySelectorAll('.tries img');
    images[this.missed].src = './images/lostHeart.png';
    this.missed++;

    if (this.missed === 5) {
      this.gameOver();
    }

    return this.missed;
  }

  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    overlay.style.display = 'flex';

    if (gameWon === true) {
      overlay.classList.remove('start');
      overlay.classList.add('win');
      message.textContent =
        'Congratulations! You guessed the word before you ran out of life!';
    } else {
      overlay.classList.remove('start');
      overlay.classList.add('lose');
      message.textContent =
        'Oh no, you ran out of life and lost. Buckle up and try again!';
    }
  }
}
