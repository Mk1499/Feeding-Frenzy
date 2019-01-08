
let setPlayerNumber = function (num) {
    playerNumber = num;
}

container.onmousemove = function (event) {

    containerBoundingRect = container.getBoundingClientRect();

    if (parseInt(fishPlayer.style.left) < event.clientX - containerBoundingRect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif"; // change right
    } else if (parseInt(fishPlayer.style.left) > event.clientX - containerBoundingRect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-left.gif"; // change left
    }

    fishPlayer.style.left = (event.clientX - containerBoundingRect.left) + 'px';
    fishPlayer.style.top = (event.clientY - containerBoundingRect.top) + 'px';


    if (event.clientX >= window.innerWidth - fishPlayer.width) {

        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
    }

    if (event.clientY >= window.innerHeight - fishPlayer.height) {

        fishPlayer.style.top = window.innerHeight - containerBoundingRect.top - fishPlayer.height + 'px';
    }

};

document.onkeydown = function (event) {

    if (event.keyCode === 27)
        if (!confirm("Continue Playing ?"))
            location.reload();
};

let UpdateGameGrid = function () {

    CheckEndOfGame();
    CheckGameOver();
    adjustBoard(score, level, playerNumber, lives,seaStarNum);
    createEnemyFishes();
    updateRandomMotion();
    seaStarMotion();
    detectCollisionBetweenPlayerFishAndEnemyFishesV2();
    detectCollisionBetweenPlayerFishAndSeaStar(fishPlayer,seaStarObj);
    detectCollisionBetweenEnemyFishes();
    moveEnemyFishes();
    scoreAndLevel();
    showSpecialFish();

};

let startGame = function () {

    level = 1;
    lives = 3;
    score = 0 ;
    seaStarNum=0 ;
    second = minutes = hours = 0;
    globalTimeInSeconds=0;
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    showLevelUpNotificationImage();
    interval = setInterval(UpdateGameGrid, 20);
    t = setInterval(timer,1000) ;

};

let CheckGameOver = function () {

    if (lives === 0) {
        localStorage.setObj(playerNa.value,{scoreing:score,level1time:null,level2time:null,level3time:null,numberOfLives:lives});
        displayGameOver();
        clearInterval(interval);
        clearInterval(t) ;

    }

};


let CheckEndOfGame = function () {

    if (score === 90) {

        clearInterval(interval);
        clearInterval(t);
        clearInterval(backgroundSound);
        displayCong() ; 
        fishPlayer.style.display = "none";
        

    }

};

backgroundSound = setInterval(playUnderWaterSound, 6500);
