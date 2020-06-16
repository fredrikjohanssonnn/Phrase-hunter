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
