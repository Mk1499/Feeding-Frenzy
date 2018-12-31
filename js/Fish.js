let c = document.getElementById("container");
let Fish = function (x, y, imgSrc, weight, direction) {

    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 60;
    this.imgSrc = imgSrc;
    this.direction = direction;
    this.weight = weight;
    this.speedX = 4;
    this.speedY = 0;
    this.element;
};

Fish.prototype.createFish = function () {
    this.element = document.createElement("IMG");
    this.element.src = this.imgSrc;
    this.element.style.position = "absolute";
    //f.style.background = "red" ; 
    this.element.height = this.height;
    this.element.width = this.width;
    if (this.direction === "left")
        this.x = window.innerWidth + this.width;
    else if (this.direction === "right")
        this.x = 0 - this.width;

    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
    
    c.appendChild(this.element);

    setInterval(this.move,20);
}

Fish.prototype.move = function () {
    if (this.direction === "left") {
        this.x -= this.speedX;
        
    }
    else if (this.direction === "right") {
        this.x += this.speedX;
    }

    this.element.style.left = this.x + "px";
   
}


f1 = new Fish(100, 50, "./images/big_colored_fish.gif", 55, "left");
f2 = new Fish(100, 200, "./images/big_colored_fish.gif", 55, "right");
f3 = new Fish(100, 350, "./images/shark-attack.gif", 55, "left");


f1.createFish();
 
f2.createFish();
 
f3.createFish(); 
