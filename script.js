// ===============================
// 🎵 SONIDOS (AGREGADO)
// ===============================
const clickSound = new Audio("./assets/click.mp3");
const restartSound = new Audio("./assets/restart.mp3");

// ===============================
// 🎮 VARIABLES DEL JUEGO
// ===============================
const cuadrado = document.getElementById("cuadrado");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const restartBtn = document.getElementById("restart");

let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

// ===============================
// 📦 FUNCIONES
// ===============================
function moverCuadrado() {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  cuadrado.style.left = x + "px";
  cuadrado.style.top = y + "px";
}

function iniciarJuego() {
  score = 0;
  timeLeft = 30;

  scoreText.textContent = score;
  timeText.textContent = timeLeft;

  moverCuadrado();

  gameInterval = setInterval(moverCuadrado, 800);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft;

    if (timeLeft <= 0) {
      finalizarJuego();
    }
  }, 1000);
}

function finalizarJuego() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  alert("⏱️ Tiempo terminado! Puntaje: " + score);
}

// ===============================
// 🖱️ EVENTOS
// ===============================
cuadrado.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;

  // 🔊 sonido de click
  clickSound.currentTime = 0;
  clickSound.play();

  moverCuadrado();
});

restartBtn.addEventListener("click", () => {
  // 🔊 sonido de reinicio
  restartSound.currentTime = 0;
  restartSound.play();

  iniciarJuego();
});

// ===============================
// ▶️ INICIO
// ===============================
iniciarJuego();
