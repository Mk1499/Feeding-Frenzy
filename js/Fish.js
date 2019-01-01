let c = document.getElementById("container");
let Fish = function (x, y, imgSrc, weight, direction) {

    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 60;
    this.imgSrc = "./images/" + imgSrc;
    this.direction = direction;
    this.weight = weight;
    this.speedX = 3;
    this.speedY = 0;
    this.element;
    
};

Fish.prototype.createFish = function () {

    this.element = document.createElement("img");
    this.element.src = this.imgSrc;
    this.element.style.position = "absolute";
    this.element.height = this.height;
    this.element.width = this.width;

    if (this.direction === "left")
        this.x = window.innerWidth + this.width;
    else if (this.direction === "right")
        this.x = 0 - this.width;

    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
    
    c.appendChild(this.element);

}

Fish.prototype.moveFishes = function () {
    if (this.direction === "left") {
        this.x -= this.speedX;
        
    }
    else if (this.direction === "right") {
        this.x += this.speedX;
    }

    if(this.direction === "left" && (parseInt(this.element.style.left) + this.width)+200 <= 0 )
      this.direction = "right" ; 
    
  if(this.direction === "right" && (parseInt(this.element.style.left) - this.width)-200 >= window.innerWidth )
      this.direction = "left" ; 
   
      this.element.style.left = this.x + "px";

}