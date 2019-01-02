let score = 0;
let level = 1;
let lives = 3;
let foodTimer = 0;
let gameover = false;
let interval;
let fishEnemiesList = [];
let fishEntryPositions = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
let fishImages = [{ src: "big_colored_fish.gif", weight: 1.7 },{ src: "gray_fish.gif", weight: 1.3 },{ src: "dumy_fish.gif", weight: 0.7 }, { src: "whale.gif", weight: 1.5 }];
let playerNumber = 2;

let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");
let eatSound = document.getElementById("eat");
let scoreRecord = document.getElementById("score") ; 
let levelRecord = document.getElementById("level") ; 


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

        fishPlayer.style.top = window.innerHeight - fishPlayer.height + 'px';
    }

};

let createEnemyFishes = function () {

    foodTimer++;
    if (foodTimer > 100 && fishEnemiesList.length <= 10) {

        let rand = Math.floor(Math.random() * fishImages.length);

        let rightFish = new Fish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages[rand].src, fishImages[rand].weight, "right");

        fishEnemiesList.push(rightFish);
        rightFish.createFish();

        rand = Math.floor(Math.random() * fishImages.length);

        let leftFish = new Fish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages[rand].src, fishImages[rand].weight, "left");

        fishEnemiesList.push(leftFish);
        leftFish.createFish();

        foodTimer = 0;
    }

}


let detectCollisionBetweenEnemyFishes = function () {

    for (let i = 0; i < fishEnemiesList.length; i++) {

        if (fishEnemiesList[i].direction === "right") {
            for (let j = 0; j < fishEnemiesList.length; j++) {
                if (i != j && fishEnemiesList[j].direction == "left"
                    && fishEnemiesList[i].weight != fishEnemiesList[j].weight) {

                    if (fishEnemiesList[j].x - fishEnemiesList[i].x <= fishEnemiesList[i].width
                        && fishEnemiesList[i].y === fishEnemiesList[j].y
                        && fishEnemiesList[i].x > 0
                        && fishEnemiesList[i].x <= window.innerWidth + fishEnemiesList[i].width
                        && fishEnemiesList[j].x > 0
                        && fishEnemiesList[j].x <= window.innerWidth) {

                        // console.log("collision happend between fish at x : " + fishEnemiesList[i].x
                        //     + " and y: " + fishEnemiesList[i].y + " and fish at x : " + fishEnemiesList[j].x
                        //     + " and y: " + fishEnemiesList[j].y + " and array length : " + fishEnemiesList.length);

                        if (fishEnemiesList[i].weight > fishEnemiesList[j].weight) {
                            container.removeChild(fishEnemiesList[j].element);
                            fishEnemiesList.splice(j, 1);


                        }
                        else if (fishEnemiesList[i].weight < fishEnemiesList[j].weight) {
                            container.removeChild(fishEnemiesList[i].element);
                            fishEnemiesList.splice(i, 1);

                        }

                    }

                }

            }

        }

    }

}

let moveEnemyFishes = function () {

    for (let i = 0; i < fishEnemiesList.length; i++) {
        fishEnemiesList[i].moveFishes();
        if (fishEnemiesList[i].x < 0 - fishEnemiesList[i].width
            || fishEnemiesList[i].x > window.innerWidth + fishEnemiesList[i].width) {
            container.removeChild(fishEnemiesList[i].element);
            fishEnemiesList.splice(i, 1);
        }
    }

}

function UpdateGameGrid() {

    createEnemyFishes();
    collisionCheck();
    detectCollisionBetweenEnemyFishes();
    moveEnemyFishes();
    scoreAndLevel() ; 
    if(gameover === true){
        alert("You Lost : Game Over");
        clearInterval(interval);
        if(confirm("Play a gain ?"))
            location.reload();
    
    }

}

let startGame = function () {
   
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    interval = setInterval(UpdateGameGrid, 20);
}

startGame();
