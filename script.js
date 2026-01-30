const square = document.getElementById('square');
const gameContainer = document.getElementById('game-container');
const scoreSpan = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

let score = 0;

// Función para mover el cuadrado a una posición aleatoria
function moveSquare() {
    const maxX = gameContainer.clientWidth - square.offsetWidth;
    const maxY = gameContainer.clientHeight - square.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    square.style.left = x + 'px';
    square.style.top = y + 'px';
}

// Sumar puntaje al hacer click
square.addEventListener('click', () => {
    score++;
    scoreSpan.textContent = score;
    moveSquare();
});

// Botón para reiniciar
restartBtn.addEventListener('click', () => {
    score = 0;
    scoreSpan.textContent = score;
    moveSquare();
});

// Mover cuadrado cada 1.5 segundos automáticamente
setInterval(moveSquare, 1500);

// Posición inicial
moveSquare();
