let c = new Canvas("fish");
c.create();

let fish = new Fish(c.canvas.width / 2, c.canvas.height / 2, "./images/small_yellow_fish.gif",true);


let score = 0;
let level = 1;
let foodTimer = 0;
let gameover = false;
let interval;
let fishList = [];
let fishEntries = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
let fishImagesPaths = ["./images/long_orange_fish.gif", "./images/dumy_fish.gif",
                       "./images/whale.gif", "./images/bubbles_fish.gif", 
                       "./images/yellow_fish.gif"];

let background = new Image();
background.src = "./images/land_ocean2.jpg";



window.onmousemove = function(event){

    if(fish.x < event.clientX)
        fish.direction = 1; // right
    else if(fish.x > event.clientX)
        fish.direction = 0; // left
    
    let rect = c.canvas.getBoundingClientRect();
    
    fish.x = event.clientX - rect.left;
    fish.y = event.clientY - rect.top;

};


function UpdateGameGrid() {

    c.clear();
    c.context.drawImage(background, 0, 0, c.canvas.width, c.canvas.height);
    fish.drawFish(c.context);

    foodTimer++;
    if (foodTimer > 200 && fishList.length < 7) {
       
        fishList.push(new Fish(0,fishEntries[Math.round(Math.random() * 14)],
                        fishImagesPaths[Math.round(Math.random() * 4)],false));
        foodTimer = 0;
    }

    for(let i in fishList) {
        if (fishList[i].x > c.canvas.width) { 
            fishList.splice(i,1);
        }
        else {
            fishList[i].x += fishList[i].speed;
            fishList[i].drawFish(c.context);
        }

    }


}

let startGame = function () {

    interval = setInterval(UpdateGameGrid, 20);
}

startGame();


