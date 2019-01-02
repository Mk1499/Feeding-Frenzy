let score = 0;
let level = 1;
let lives = 3;
let foodTimer = 0;
let gameover = false;
let interval;
let playerNumber;
let fishEnemiesList = [];
let fishEntryPositions = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
let fishImages = [{ src: "shark.gif", weight: 1.7 },{ src: "gray_fish.gif", weight: 1.2 },{ src: "whiteFish.gif", weight: 0.8 }, { src: "yellowFish.gif", weight: 1.4 }];
let levelCompletionScores = [20, 50, 80];
let noCollision=true;

let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");
let eatSound = document.getElementById("eat");
let underWater = document.getElementById("underWater") ;
let scoreRecord = document.getElementById("score") ;
let levelRecord = document.getElementById("level") ;
let HScoreRecord = document.getElementById("HScore") ;
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

function UpdateGameGrid() {
if (noCollision===true){
  createEnemyFishes();
  noCollision=detectCollisionBetweenPlayerFishAndEnemyFishes();
  detectCollisionBetweenEnemyFishes();
  moveEnemyFishes();
  scoreAndLevel() ;
  adjustBoard(score,level,playerNumber,lives);
  if(gameover === true){
      alert("You Lost : Game Over");
      clearInterval(interval);
      if(confirm("Play a gain ?"))
          location.reload();
  }
}
else{
  lives--;
  for(let k=0;k<fishEnemiesList.length;k++)
     container.removeChild(fishEnemiesList[k].element);
  fishEnemiesList=[];
  clearInterval(interval);
  noCollision=true;
  startGame();
  if (lives === 0)
        gameover = true;
}


}

let startGame = function () {

    playerNumber = 1;
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    interval = setInterval(UpdateGameGrid, 20);
}

let playUnderWater = function (){
    underWater.play() ;
}
sound = setInterval(playUnderWater , 2000) ;

//startGame();
