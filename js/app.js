let game;
const phrases = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');

document.getElementById('btn__reset').addEventListener('click', () => {
  phrases.innerHTML = '';
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.remove('wrong');
    keys[i].classList.remove('chosen');
    keys[i].disabled = false;
  }
  const images = document.querySelectorAll('.tries img');
  for (let i = 0; i < images.length; i++) {
    images[i].src = './images/liveHeart.png';
  }
  game = new Game();
  game.startGame();
});

document.addEventListener('click', (e) => {
  return e.target.classList.contains('key')
    ? game.handleInteraction(e.target)
    : false;
});

document.addEventListener('keyup', (e) => {
  const letters = document.querySelectorAll('.key');
  for (let i = 0; i < letters.length; i++) {
    if (e.key === letters[i].innerText) {
      if (letters[i].classList.contains('key')) {
        return game.handleInteraction(letters[i]);
      } else {
        return false;
      }
    }
  }
});
