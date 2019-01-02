let Fish = function (x, y, imgSrc, weight, direction) {

    this.x = x;
    this.y = y;
    this.width = 100 * weight;
    this.height = 60 * weight;
    this.imgSrc = "./images/Enemies" +"/"+direction+"/" +imgSrc;
    this.direction = direction;
    this.weight = weight;
    this.speedX = 3*level;
    this.speedY = 0;
    this.element;


};

Fish.prototype.createFish = function () {

    this.element = document.createElement("img");
    this.element.src = this.imgSrc;
    this.element.style.position = "absolute";
    this.element.height = this.height;
    this.element.width = this.width;
   // this.element.style.border = "2px red solid "

    if (this.direction === "left")
        this.x = window.innerWidth + this.width;
    else if (this.direction === "right")
        this.x = 0 - this.width;

    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";

    container.appendChild(this.element);

}

Fish.prototype.moveFishes = function () {
    if (this.direction === "left") {
        this.x -= this.speedX;

    }
    else if (this.direction === "right") {
        this.x += this.speedX;
    }

    if((this.direction === "left" && (parseInt(this.element.style.left) + this.width)+200 <= 0)
      ||
      (this.direction === "right" && (parseInt(this.element.style.left) - this.width)-200 >= window.innerWidth )

      ){
       // container.removeChild(this.element) ;
       /* this.direction = "right" ;
        this.imgSrc = "./images/Enemies" +"/right/" +imgSrc; */

    }

   /*
  if(this.direction === "right" && (parseInt(this.element.style.left) - this.width)-200 >= window.innerWidth ){

    this.direction = "left" ;
    this.imgSrc = "./images/Enemies" +"/left/" +imgSrc;
  }
     */

      this.element.style.left = this.x + "px";

}
