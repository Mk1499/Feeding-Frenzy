let displayCong = function () {
    congDiv.style.display = "block";
    congDiv.style.zIndex = 999;
    congDiv.classList.remove("bounceOutUp");
    congDiv.classList.add("bounceInDown");
    congSound.play();
    fishPlayer.style.display = "none" ;
    board.style.display = "none" ;

}

let congUp = function () {
    congDiv.classList.remove("bounceInDown");
    congDiv.classList.add("bounceOutUp");
    fishPlayer.style.display = "block" ;
    board.style.display = "block" ;
    setTimeout(function () {
        
        congDiv.style.display = "none";
        congDiv.style.zIndex = 0;
    }, 1000)

}