class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * First we split the this.phrase object to convert into an aray. When doing so,
   * we're able to use the map method and loop through each letter. This function will
   * then create the elements to the UI (the letters you're supposed to guess).
   */

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

  /**
   * Check if the phrase contains the letter. If it does, return true, otherwise false
   * @param {String}
   */

  checkLetter(letter) {
    return this.phrase.includes(letter) ? true : false;
  }

  /**
   * Loop through all elements which contains the class 'letter'. Then remove the 'hide'
   * class and add the 'show' class each time the functions runs.
   */

  showMatchedLetter(letter) {
    const letterClass = document.querySelectorAll(`.${letter}`);
    for (let i = 0; i < letterClass.length; i++) {
      letterClass[i].classList.remove('hide');
      letterClass[i].classList.add('show');
    }
  }
}
