class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  createPhrases() {
    const phrases = [new Phrase('Hello'), new Phrase('Boom')];
    return phrases;
  }

  getRandomPhrase() {
    const random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }
}
