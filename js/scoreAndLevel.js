
let scoreAndLevel = function () {

    if (score - ((level-1) * 30)  === 0) {

        fishPlayer.height = 60;
        fishPlayer.width = 100;
    }
    else if (score - ((level-1) * 30) === 10) {

        fishPlayer.height = 60 * 1.3;
        fishPlayer.width = 100 * 1.3;
    }
    else if (score - ((level-1) * 30)  === 20) {

        fishPlayer.height = 60 * 1.5;
        fishPlayer.width = 100 * 1.5;
    }
    else if (score - ((level-1) * 30) === 30) {

        level++;
        addNewEnemyFish();
        playLevelUpSound();
    }

    if (score > localStorage.getItem("HScore"))
        localStorage.setItem("HScore", score);
}

/**********************************
** this function to add a new type of fishes to the game at every level
**
** Author (@ Mohamed Gomaa)
**
************************************/

let addNewEnemyFish = function(){

    if(level === 2)
        fishImages.push({ src: "blueFish.gif", weight: 1.5 });
    else if(level === 3)
        fishImages.push({ src: "BOOMFish.gif", weight: 1.5 });
}