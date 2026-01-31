const square = document.getElementById("square");
const container = document.getElementById("game-container");
const scoreSpan = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let timeout;

// Sonidos
const clickSound = new Audio("assets/click.mp3");
const restartSound = new Audio("assets/restart.mp3");

function moveSquare() {
    const maxX = container.clientWidth - square.offsetWidth;
    const maxY = container.clientHeight - square.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    square.style.left = x + "px";
    square.style.top = y + "px";

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        score = Math.max(0, score - 1);
        scoreSpan.textContent = score;
        moveSquare();
    }, 3000);
}

square.addEventListener("click", () => {
    clickSound.play();
    score++;
    scoreSpan.textContent = score;
    moveSquare();
});

restartBtn.addEventListener("click", () => {
    restartSound.play();
    score = 0;
    scoreSpan.textContent = score;
    moveSquare();
});

moveSquare();
