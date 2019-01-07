let EnemyFish = function (x, y, imgSrc, weight, direction,directionVertical) {

    this.x = x;
    this.y = y;
    this.width = 100 * weight;
    this.height = 60 * weight;
    this.imgSrc = "./images/Enemies" + "/" + direction + "/" + imgSrc;
    this.direction = direction;
    this.directionVertical=directionVertical;
    this.weight = weight;
    this.speedX = 3 * level;
    this.speedY = 0.3*level;
    this.element;


};

EnemyFish.prototype.createFish = function () {

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

    container.appendChild(this.element);

}

EnemyFish.prototype.moveFishes = function () {

    if (this.direction === "left") {
        this.x -= this.speedX;

    }
    else if (this.direction === "right") {
        this.x += this.speedX;
    }

    this.element.style.left = this.x + "px";

    if (this.directionVertical === "top") {
        this.y -= this.speedY;

    }
    else if (this.directionVertical === "down") {
        this.y += this.speedY;
    }
    this.element.style.top = this.y + "px";

}
