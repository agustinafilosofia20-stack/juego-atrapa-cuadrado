const game = document.getElementById("game");
const square = document.getElementById("square");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const restartBtn = document.getElementById("restart");

// 🎧 Solo agregamos sonidos, nada más
const clickSound = new Audio("assets/click.mp3");
const restartSound = new Audio("assets/restart.mp3");

let score = 0;
let time = 30;
let timer = null;

function moveSquare() {
  const maxX = game.clientWidth - square.offsetWidth;
  const maxY = game.clientHeight - square.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  square.style.left = x + "px";
  square.style.top = y + "px";
}

square.addEventListener("click", () => {
  if (time <= 0) return;

  // 🔊 reproducir sonido al hacer click
  clickSound.currentTime = 0;
  clickSound.play();

  score++;
  scoreEl.textContent = score;
  moveSquare();
});

function startGame() {
  // 🔊 reproducir sonido al reiniciar
  restartSound.currentTime = 0;
  restartSound.play();

  score = 0;
  time = 30;
  scoreEl.textContent = score;
  timeEl.textContent = time;

  moveSquare();

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

restartBtn.addEventListener("click", startGame);

startGame();
