let score = 0;
let level = 1;
let lives = 30;
let foodTimer = 0;
let gameover = false;
let interval;
let playerNumber;
let fishEnemiesList = [];
let fishEntryPositions = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
let fishImages = [{ src: "shark.gif", weight: 1.7 }, { src: "gray_fish.gif", weight: 1.2 }, { src: "whiteFish.gif", weight: 0.8 }, { src: "yellowFish.gif", weight: 1.4 }];
let levelCompletionScores = [30, 30, 30];
let noCollision = true;

let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");
let eatSound = document.getElementById("eat");
let underWater = document.getElementById("underWater");
let scoreRecord = document.getElementById("score");
let levelRecord = document.getElementById("level");
let HScoreRecord = document.getElementById("HScore");
let scoreNumArr = document.getElementsByClassName('scoreNum');//4 images for score
let liveNumArr = document.getElementsByClassName('liveNum');//2 images for lives
let growthBarTotal = document.getElementById('growthBarTotal');// growth bar total div
let growthBarActual = document.getElementById('growthBarActual');// growth bar actual div
let charImg = document.getElementById('charImg');  // char img in live div
let levelNum = document.getElementById('levelNum'); //1 img for level number
let scoreDiv = document.getElementById('scoreDiv');
let growthDiv = document.getElementById('growthDiv');
let liveDiv = document.getElementById('liveDiv');
let levelDiv = document.getElementById('levelDiv');


container.onmousemove = function (event) {

    let rect = container.getBoundingClientRect();

    if (parseInt(fishPlayer.style.left) < event.clientX - rect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif"; // change right
    } else if (parseInt(fishPlayer.style.left) > event.clientX - rect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-left.gif"; // change left
    }

    fishPlayer.style.left = (event.clientX - rect.left) + 'px';
    fishPlayer.style.top = (event.clientY - rect.top) + 'px';


    if (event.clientX >= window.innerWidth - fishPlayer.width) {

        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
    }

    if (event.clientY >= window.innerHeight - fishPlayer.height) {

        fishPlayer.style.top = window.innerHeight - rect.top - fishPlayer.height + 'px';
    }

};

document.onkeydown = function (event){

    if(event.keyCode === 27)
        if(!confirm("Continue Playing ?"))
            location.reload();
};

function UpdateGameGrid() {

    if (noCollision === true) {

        createEnemyFishes();
        noCollision = detectCollisionBetweenPlayerFishAndEnemyFishesV2();
        detectCollisionBetweenEnemyFishes();
        moveEnemyFishes();
        scoreAndLevel();
        adjustBoard(score, level, playerNumber, lives);

        if (gameover === true) {
            document.write("<div><img style='height:400px;width:700px;margin-left:180px;' src='Div/GameOver/Gameover.png'><br/><button style='width:300px;margin-left:440px;background-color:black;'  id='playAgain'><img width='100%' src='Div/Menu/play.png' ></button></div>");
            var playAgainBtn=document.getElementById("playAgain");
            playAgainBtn.addEventListener("click",function(){
                window.location="index.html";

            } );
            clearInterval(interval);


        }

    } else {

        clearInterval(interval);
        lives--;
        for (let k = 0; k < fishEnemiesList.length; k++)
            container.removeChild(fishEnemiesList[k].element);

        fishEnemiesList = [];
        noCollision = true;
        if (lives === 0)
            gameover = true;
        
        interval = setInterval(UpdateGameGrid, 20);
     
    }

}

let startGame = function (charNum) {

    playerNumber = charNum;
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    interval = setInterval(UpdateGameGrid, 20);     
    sound = setInterval(playUnderWater, 4000);
    
}

let playUnderWater = function () {
    underWater.play();
}
  
sound = setInterval(playUnderWater, 10000);
