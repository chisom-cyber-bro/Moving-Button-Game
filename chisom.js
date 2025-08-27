let score = 0;
const scoreLabel = document.getElementById("scoreLabel");
const movingBtn = document.getElementById("movingBtn");
const gameArea = document.getElementById("gameArea");

function moveButton() {
    const areaRect = gameArea.getBoundingClientRect();
    const btnSize = 70;
    const maxLeft = areaRect.width - btnSize;
    const maxTop = areaRect.height - btnSize;
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;
    movingBtn.style.left = `${left}px`;
    movingBtn.style.top = `${top}px`;
}

// Move button every 2 seconds
let moveInterval = setInterval(moveButton, 2000);

// When button is clicked, increase score and move immediately
movingBtn.onclick = function() {
    score++;
    scoreLabel.textContent = `Score: ${score}`;
    moveButton();
};
