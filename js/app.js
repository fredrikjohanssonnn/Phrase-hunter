let game;

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});
