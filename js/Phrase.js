class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    const phrase = this.phrase.split('');
    const splitLetters = phrase.map((letter) => {
      if (letter === ' ') {
        return `<li class="hide space"> </li>`;
      }
      return `<li class="hide letter ${letter}">${letter}</li>`;
    });
    /* Loop through each item in the array and append it to the DOM!??!?!?*/
    console.log(splitLetters);
  }
}
