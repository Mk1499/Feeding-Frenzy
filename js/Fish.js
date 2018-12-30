let Fish = function(x,y){

    this.fish = new Image();
    this.fish.src = "./images/catcher1.png";
    
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 50;
    this.onAir = false;
    this.speed = 10;
    this.jump = 0;
    this.jumpUnit = 10;
    this.gravity = 10;
    this.safe = true;
    this.animation = 0;


    this.drawFish = function(ctx) {
        
        ctx.drawImage(this.fish,this.x,this.y,this.width,this.height);      

    };

   
    this.moveLeft = function(){

        this.x -= this.speed;
    
    };

    this.moveRight = function(){

        this.x += this.speed;

    };


};