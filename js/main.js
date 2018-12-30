let c = new Canvas("cake");
c.create();

let fish = new Fish(200,c.canvas.height - 250);


let score = 0;
let level = 100;
let animation = 0;
let foodTimer = 0;
let gameover = false;
let intervallet;
let foodList = [];
let tileList = [];
let foodDrop = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

let background = new Image();
background.src = "./images/background.jpg";

document.onkeydown = function (event) {
    if (event.keyCode == 37 && fish.x > 0) {
        fish.moveLeft();

    }
    if (event.keyCode == 39 && fish.x < c.canvas.width - fish.width) {
        fish.moveRight();

    }
    
};

document.onkeyup = function (event) {
    if (event.keyCode == 37) {

    }
    if (event.keyCode == 39) {

    }
};




function UpdateGameGrid(){
   
    c.clear();
    c.context.drawImage(background, 0, 0, c.canvas.width, c.canvas.height);
    
}

let startGame = function() {

       intervallet = setInterval(UpdateGameGrid, 10);
}

startGame();


