class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    const phrase = this.phrase.split('');
    phrase.map((letter) => {
      const li = document.createElement('li');
      li.classList.add('hide');
      li.textContent = `${letter}`;

      if (letter === ' ') {
        li.classList.add('space');
      } else {
        li.classList.add('letter');
        li.classList.add(`${letter}`);
      }
      ul.appendChild(li);
    });
  }
}
