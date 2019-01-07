
let displayGameOver = function () {
   
    gameOverDiv.style.display = "block";
    gameOverDiv.style.zIndex = 999;
    gameOverDiv.classList.remove("bounceOutUp");
    gameOverDiv.classList.add("bounceInDown");
    GOSound.play();
    
    clearInterval(interval);
    fishPlayer.style.display = "none";
    adjustBoard(score, level, playerNumber, lives,seaStarNum);
    


}

let gameOverUp = function () {
    gameOverDiv.classList.remove("bounceInDown");
    gameOverDiv.classList.add("bounceOutUp");
    setTimeout(function () {
        gameOverDiv.style.display = "none";
        gameOverDiv.style.zIndex = 0;
    }, 1000)

}