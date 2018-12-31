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

let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");

container.onmousemove = function(event){

    let rect = container.getBoundingClientRect();
    //console.log(rect.left + "  " + rect.top);
    fishPlayer.style.left = (event.clientX - rect.left) + 'px';
    fishPlayer.style.top = (event.clientY - rect.top) + 'px';

    if(event.clientX >= window.innerWidth - fishPlayer.width ){
        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
       // console.log(fishPlayer.style.left + "  Here " + fishPlayer.width );
    }

    if(event.clientY >= window.innerHeight - fishPlayer.height ){
        fishPlayer.style.top = window.innerHeight - fishPlayer.height + 'px';
       // console.log(fishPlayer.style.top + "  Here " + fishPlayer.height );
    }
    
};

let f1 = new Fish(100, 50, "./images/big_colored_fish.gif", 55, "left");
let f2 = new Fish(100, 200, "./images/big_colored_fish.gif", 55, "right");
let f3 = new Fish(100, 350, "./images/shark-attack.gif", 55, "left");


f1.createFish();
 
f2.createFish();
 
f3.createFish(); 


function UpdateGameGrid() {


    f1.move();
    f2.move();
    f3.move();
    // c.clear();
    // c.context.drawImage(background, 0, 0, c.canvas.width, c.canvas.height);
    // fish.drawFish(c.context);

    // foodTimer++;
    // if (foodTimer > 200 && fishList.length < 7) {
       
    //     fishList.push(new Fish(0,fishEntries[Math.round(Math.random() * 14)],
    //                     fishImagesPaths[Math.round(Math.random() * 4)],false));
    //     foodTimer = 0;
    // }

    // for(let i in fishList) {
    //     if (fishList[i].x > c.canvas.width) { 
    //         fishList.splice(i,1);
    //     }
    //     else {
    //         fishList[i].x += fishList[i].speed;
    //         fishList[i].drawFish(c.context);
    //     }

    // }


}

let startGame = function () {

    interval = setInterval(UpdateGameGrid, 20);
}

startGame();


