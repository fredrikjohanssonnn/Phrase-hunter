class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    const phrase = this.phrase.split('');
    const splitLetters = phrase.map(
      (letter) => `<li class="hide letter ${letter}">${letter}</li>`
    );
    ul.appendChild(splitLetters);
  }
}
