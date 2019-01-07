
let scoreAndLevel = function () {

    if (seaStarNum===5){
      lives++;
      seaStarNum=0;
    }

    if (score - ((level - 1) * 30) === 0) {
        playedBefore1 = false;
        playedBefore2 = false;
        fishPlayer.height = 60;
        fishPlayer.width = 100;
    }
    else if (score - ((level - 1) * 30) === 10) {

        fishPlayer.height = 60 * 1.3;
        fishPlayer.width = 100 * 1.3;
        sizeSound1();
    }
    else if (score - ((level - 1) * 30) === 20) {

        fishPlayer.height = 60 * 1.5;
        fishPlayer.width = 100 * 1.5;

        sizeSound2();
    }
    else if (score - ((level - 1) * 30) === 30) {

        level++;
        for (let i = 0; i < fishEnemiesList.length; i++)
              container.removeChild(fishEnemiesList[i].element);
        fishEnemiesList = [];
        randomMotionTimer=[];
        randomMotionCompletion=[];
        randomMotionTimerY=[];
        randomMotionCompletionY=[];
        showLevelUpNotificationImage();
        //addNewEnemyFish();
        playLevelUpSound();
    }

    if (score > localStorage.getItem("HScore"))
        localStorage.setItem("HScore", score);
};

/**********************************
** this function to add a new type of fishes to the game at every level
**
** Author (@ Mohamed Gomaa)
**
************************************/

let addNewEnemyFish = function () {

    if (level === 2)
        fishImages.push({ src: "blueFish.gif", weight: 1.5 });
    else if (level === 3)
        fishImages.push({ src: "BOOMFish.gif", weight: 1.5 });
};

let showLevelUpNotificationImage = function () {

    let levelSign = document.createElement("img");

    levelSign.src = "./images/Levels/level" + level + ".png";
    levelSign.height = 150;
    levelSign.width = 250;
    levelSign.style.position = "absolute";
    levelSign.style.left = window.innerWidth/2 - 125 + "px";
    levelSign.style.top = window.innerHeight/2 - 75 + "px";

    container.appendChild(levelSign);

    setTimeout(() => container.removeChild(levelSign), 2000);

};
