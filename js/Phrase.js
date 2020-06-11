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

  checkLetter(letter) {
    return this.phrase.includes(letter) ? true : false;
  }

  showMatchedLetter(letter) {
    const letterClass = document.querySelectorAll(`.${letter}`);
    for (let i = 0; i < letterClass.length; i++) {
      letterClass[i].classList.remove('hide');
      letterClass[i].classList.add('show');
    }
  }
}
