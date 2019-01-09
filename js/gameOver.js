
let displayGameOver = function () {
    gameOverDiv.style.display = "block";
    gameOverDiv.style.zIndex = 999;
    gameOverDiv.classList.remove("bounceOutUp");
    gameOverDiv.classList.add("bounceInDown");
    GOSound.play();
    fishPlayer.style.display = "none" ;
    board.style.display = "none" ;

}
let gameOverUp = function () {
    gameOverDiv.classList.remove("bounceInDown");
    gameOverDiv.classList.add("bounceOutUp");
    fishPlayer.style.display = "block" ;
    board.style.display = "block" ;
    setTimeout(function () {

        gameOverDiv.style.display = "none";
        gameOverDiv.style.zIndex = 0;
    }, 1000)

}
