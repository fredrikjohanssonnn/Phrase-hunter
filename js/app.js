let game;

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

document.addEventListener('click', (e) => {
  return e.target.classList.contains('key')
    ? game.handleInteraction(e.target)
    : false;
});
