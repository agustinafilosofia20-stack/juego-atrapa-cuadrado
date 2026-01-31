const square = document.getElementById("square");
const gameArea = document.getElementById("game-area");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const restartBtn = document.getElementById("restart");

let score = 0;
let time = 30;
let timer = null;

// sonidos
const clickSound = new Audio("assets/click.mp3");
const restartSound = new Audio("assets/restart.mp3");

function moveSquare() {
  const maxX = gameArea.clientWidth - square.clientWidth;
  const maxY = gameArea.clientHeight - square.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  square.style.left = x + "px";
  square.style.top = y + "px";
}

square.addEventListener("click", () => {
  if (time <= 0) return;

  score++;
  scoreEl.textContent = score;

  clickSound.currentTime = 0;
  clickSound.play();

  moveSquare();
});

function startGame() {
  score = 0;
  time = 30;

  scoreEl.textContent = score;
  timeEl.textContent = time;

  moveSquare();

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      alert("Fin del juego 🎮 Puntaje: " + score);
    }
  }, 1000);
}

restartBtn.addEventListener("click", () => {
  restartSound.currentTime = 0;
  restartSound.play();
  startGame();
});

startGame();