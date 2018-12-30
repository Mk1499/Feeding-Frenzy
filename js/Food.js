let Food = function (x, y) {

    this.food = new Image();
    this.food.src = "./images/food.png";

    this.x = x;
    this.y = y;

    this.width = 50;
    this.height = 50;
    this.speed = 3;

    this.drawFood = function (ctx) {
        ctx.drawImage(this.food,this.x,this.y,this.width,this.height);
    };


};