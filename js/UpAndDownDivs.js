
document.onreadystatechange = function () {

    if (document.readyState === 'complete') {

        loaderOut();

    }

};

let loaderOut = function () {

    load.classList.add("fadeOutUp");

};

let displayGameOver = function () {
    gameOverDiv.style.display = "block";
    gameOverDiv.style.zIndex = 999;
    gameOverDiv.classList.remove("bounceOutUp");
    gameOverDiv.classList.add("bounceInDown");
    GOSound.play();
    fishPlayer.style.display = "none";
    board.style.display = "none";

};

let gameOverUp = function () {
    gameOverDiv.classList.remove("bounceInDown");
    gameOverDiv.classList.add("bounceOutUp");
    fishPlayer.style.display = "block";
    board.style.display = "block";
    setTimeout(function () {

        gameOverDiv.style.display = "none";
        gameOverDiv.style.zIndex = 0;
    }, 1000)

};

let displayCong = function () {
    congDiv.style.display = "block";
    congDiv.style.zIndex = 999;
    congDiv.classList.remove("bounceOutUp");
    congDiv.classList.add("bounceInDown");
    congSound.play();
    fishPlayer.style.display = "none";
    board.style.display = "none";

};

let congUp = function () {
    congDiv.classList.remove("bounceInDown");
    congDiv.classList.add("bounceOutUp");
    fishPlayer.style.display = "block";
    board.style.display = "block";
    setTimeout(function () {

        congDiv.style.display = "none";
        congDiv.style.zIndex = 0;
    }, 1000)

};

let selectUp = function () {

    select.classList.add("bounceOutUp");

};

let viewBadges = function (){
    badgeDiv.style.display = "block" ; 
    badgeDiv.classList.add("bounceInLeft") ;
    badgeDiv.classList.remove("bounceOutLeft") ; 
};

let hideBadges = function (){
    badgeDiv.classList.add("bounceOutLeft") ;
    badgeDiv.classList.remove("bounceInLeft") ; 
    badgeDiv.style.display = "none" ; 
};