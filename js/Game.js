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
    const phrase = this.activePhrase.phrase;
    /* Check if the letters that has been chosen, matches the letters in the activePhrase 
    return phrase === thechosenletters ? true : false;
    */
  }

  removeLife() {}

  gameOver() {}
}
