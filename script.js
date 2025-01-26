document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById("game");
    const scoreDisplay = document.getElementById("score");
    const startGameButton = document.getElementById("start-game");

    let score = 0;
    let gameInterval;

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";

        heart.style.left = Math.random() * (game.offsetWidth - 30) + "px";
        heart.style.top = "-50px";

        heart.addEventListener("click", () => {
            score++;
            scoreDisplay.textContent = score;
            heart.remove();
        });

        game.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

  
    function startGame() {
        score = 0;
        scoreDisplay.textContent = score;
        startGameButton.disabled = true;

        gameInterval = setInterval(() => {
            createHeart();
        }, 1000);

        setTimeout(() => {
            clearInterval(gameInterval);
            alert(`Game Over! Your final score is ${score}.
         I will kiss you because you did not meet the required score.😜`);
            startGameButton.disabled = false;
        }, 10000);
    }

    startGameButton.addEventListener("click", startGame);
});
