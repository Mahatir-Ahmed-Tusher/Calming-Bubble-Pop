document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const scoreElement = document.getElementById("score");
    const gameArea = document.getElementById("gameArea");
    let score = 0;
    let gameInterval;
    let bubbleInterval;

    // Function to create a random bubble
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // Random position for the bubble
        const randomX = Math.random() * (gameArea.clientWidth - 50);
        bubble.style.left = randomX + "px";

        // Add bubble to the game area
        gameArea.appendChild(bubble);

        // Add event listener to pop the bubble
        bubble.addEventListener("click", () => {
            score++;
            scoreElement.textContent = "Score: " + score;
            bubble.remove();
        });

        // Remove bubble if it goes off-screen
        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }

    // Start the game
    startBtn.addEventListener("click", () => {
        score = 0;
        scoreElement.textContent = "Score: " + score;
        gameArea.innerHTML = "";
        startBtn.disabled = true;

        // Create bubbles at random intervals
        bubbleInterval = setInterval(createBubble, 1000);

        // Stop the game after 60 seconds
        gameInterval = setTimeout(() => {
            clearInterval(bubbleInterval);
            startBtn.disabled = false;
            alert("Game over! Your final score is: " + score);
        }, 60000);
    });
});
