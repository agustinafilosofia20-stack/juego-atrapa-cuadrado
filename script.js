const game = document.getElementById("game");
const square = document.getElementById("square");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const restartBtn = document.getElementById("restart");

// 🎧 sonidos
const clickSound = new Audio("assets/click.wav");
const restartSound = new Audio("assets/restart.wav");

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

  // 🔊 sonido click (ACÁ sí funciona)
  clickSound.currentTime = 0;
  clickSound.play();

  score++;
  scoreEl.textContent = score;
  moveSquare();
});

function startGame() {
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

// 🔊 sonido SOLO cuando la persona hace click en reiniciar
restartBtn.addEventListener("click", () => {
  restartSound.currentTime = 0;
  restartSound.play();
  startGame();
});

// iniciar juego sin sonido automático
startGame();
