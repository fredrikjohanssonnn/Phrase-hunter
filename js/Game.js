class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  createPhrases() {
    const phrases = [
      new Phrase('JavaScript'),
      new Phrase('NodeJS'),
      new Phrase('ReactJS'),
      new Phrase('VueJS'),
    ];
    return phrases;
  }

  getRandomPhrase() {
    const random = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[random];
    return randomPhrase;
  }

  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(e) {
    e.disabled = true;
    const phrase = JSON.stringify(this.activePhrase.phrase);
    if (!phrase.includes(e.textContent)) {
      e.classList.add('wrong');
      game.removeLife();
    } else {
      e.classList.add('chosen');
      game.activePhrase.showMatchedLetter(e.textContent);
      game.checkForWin();
    }

    return game.checkForWin() === true ? game.gameOver(true) : null;
  }

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
      this.gameOver(false);
    }

    return this.missed;
  }

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
