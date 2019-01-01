let score = 0;
let level = 1;
let foodTimer = 0;
let gameover = false;
let interval;
let fishEnemiesList = [];
let fishEntryPositions = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
let rightFishImages = [{ src: "big_colored_fish.gif", weight: 4 }, { src: "orange_fish.gif", weight: 1 }, { src: "long_orange_fish.gif", weight: 2 }, { src: "bubbles_fish.gif", weight: 1 }];
let leftFishImages = [{ src: "dumy_fish.gif", weight: 2 }, { src: "whale.gif", weight: 3 }, { src: "yellow_fish.gif", weight: 2 }, { src: "big_colored_fish.gif", weight: 3 }];

let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");

container.onmousemove = function (event) {

    let rect = container.getBoundingClientRect();
    //console.log(rect.left + "  " + rect.top);
    fishPlayer.style.left = (event.clientX - rect.left) + 'px';
    fishPlayer.style.top = (event.clientY - rect.top) + 'px';

    if (event.clientX >= window.innerWidth - fishPlayer.width) {
        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
        // console.log(fishPlayer.style.left + "  Here " + fishPlayer.width );
    }

    if (event.clientY >= window.innerHeight - fishPlayer.height) {
        fishPlayer.style.top = window.innerHeight - fishPlayer.height + 'px';
        // console.log(fishPlayer.style.top + "  Here " + fishPlayer.height );
    }

};

function UpdateGameGrid() {

    foodTimer++;
    if (foodTimer > 150 && fishEnemiesList.length < 5) {

        let rand = Math.round(Math.random() * 3);

        let rightFish = new Fish(0, fishEntryPositions[Math.round(Math.random() * 14)],
            rightFishImages[rand].src, rightFishImages[rand].weight, "right");

        fishEnemiesList.push(rightFish);
        rightFish.createFish();

        rand = Math.round(Math.random() * 3);

        let leftFish = new Fish(0, fishEntryPositions[Math.round(Math.random() * 14)],
            leftFishImages[rand].src, leftFishImages[rand].weight, "left");

        fishEnemiesList.push(leftFish);
        leftFish.createFish();

        foodTimer = 0;
    }

    for (let i = 0; i < fishEnemiesList.length; i++) {

       // console.log(fishEnemiesList[i]);
        fishEnemiesList[i].moveFishes();

    }
 

    collisionCheck() ; 

}

let startGame = function () {

    interval = setInterval(UpdateGameGrid, 20);
}

startGame();


