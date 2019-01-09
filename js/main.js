
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

    if (event.key === ' ' || event.key === 'Spacebar')
        event.preventDefault();

};


btnName.onclick = function () {
 
    if (playerNa.value != "") {
        
        nameEnt.classList.add("fadeOutUp");
    }
};

let UpdateGameGrid = function () {

    CheckEndOfGame();
    CheckGameOver();
    adjustBoard(score, level, playerNumber, lives, seaStarNum);
    createEnemyFishes();
    updateRandomMotion();
    seaStarMotion();
    detectCollisionBetweenPlayerFishAndEnemyFishesV2();
    detectCollisionBetweenPlayerFishAndSeaStar(fishPlayer, seaStarObj);
    detectCollisionBetweenEnemyFishes();
    moveEnemyFishes();
    scoreAndLevel();
    showSpecialFish();

};

let startGame = function () {

    if (localStorage.getObj(playerNa.value) === null)
        localStorage.setObj(playerNa.value, { scoreing: 0, level1time: 4000, level2time: 4000, level3time: 4000, numberOfLives: 0 });

   if (localStorage.getObj("highestScore") ===null)
      localStorage.setObj("highestScore",{name:"dummyUser",value:0});

   if (localStorage.getObj("highestNumLives") ===null)
      localStorage.setObj("highestNumLives",{name:"dummyUser",value:0});

   previousState=localStorage.getObj(playerNa.value);


    level = 1;
    lives = 3;
    score = 0;
    seaStarNum = 0;
    second = minutes = hours = 0;
    globalTimeInSeconds=0;
    gameCompleteFlag=false;
    currentPlayerLevel1Time=null;
    currentPlayerLevel2Time=null;
    currentPlayerLevel3Time=null;
    currentPlayerHeighestScore=null;
    currentPlayerFinishNumberOfLives=null;
    currentPlayerTempBadge=[false,false,false];
      fishEnemiesList = [];
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    backgroundWebm.src = "videos/background.webm";
    backgroundVideo.load();
    removeBadgesFromDashBoard();
    showLevelUpNotificationImage();
    interval = setInterval(UpdateGameGrid, 20);
    t = setInterval(timer, 1000);

};

let CheckGameOver = function () {

    if (lives === 0) {
        displayGameOver();
        clearInterval(interval);
        clearInterval(t);
        checkForFinalBadges();
        updateLocalStorage();
        updateCurrentPlayerBadges();
    }
};


let CheckEndOfGame = function () {

    if (score === 90) {

        clearInterval(interval);
        clearInterval(t);
        clearInterval(backgroundSound);
        setTimeout(displayCong, 2000);
        fishPlayer.style.display = "none";
        for (let i = 0; i < fishEnemiesList.length; i++)
            container.removeChild(fishEnemiesList[i].element);

        gameCompleteFlag = true;
        checkForFinalBadges();
        updateLocalStorage();

        playLevelUpSound();
    }

};


let setPlayerNumber = function (num) {
    playerNumber = num;
};

let exit = function () {
    location.reload();
};

backgroundSound = setInterval(playUnderWaterSound, 6500);
