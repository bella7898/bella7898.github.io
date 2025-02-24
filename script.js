document.addEventListener("DOMContentLoaded", () => {
    const dino = document.getElementById("dino");
    const gameContainer = document.getElementById("container");
    const startText = document.getElementById("start-text");

    let isJumping = false;
    let isRunning = false;
    let dinoPosition = 10;

    function jump(){
        if (!isJumping){
            isJumping = true;
            dino.classList.add("jump");
        
            setTimeout(() => {
                dino.classList.remove("jump");
                isJumping = false;
            }, 500);
        }
    } 

    function startGame(){
        if (!isRunning){
            isRunning = true;
            startText.style.display = "none";
            runAnimation();
            moveDino();
        }
        jump();
    }

    document.addEventListener("keydown", (event) => {
        if(event.code === "Space"){
            startGame();
        }
    });

    gameContainer.addEventListener("click", startGame);

    function runAnimation(){
        let dinoState = true;
        setInterval(() => {
            if(isRunning && !isJumping){
                dino.src = dinoState ? "assets/Dino1.png" : "assets/Dino2.png";
                dinoState = !dinoState;
            }
        }, 100);
    }

    function moveDino(){
        if(isRunning) {
            dinoPosition += 1;
            dino.style.left = dinoPosition + "px"
       
            requestAnimationFrame(moveDino);
        }
    }
});