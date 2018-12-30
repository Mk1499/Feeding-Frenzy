let Fish = function(x,y,src,character){

    this.fish = new Image();
    this.fish.src = src;
    
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 2;
    this.safe = true;
    this.weight = 2;
    this.direction = 0;
    this.ischaracter = character;

    this.drawFish = function(ctx) {
        
        if(this.ischaracter){
            if(!this.direction)
                this.fish.src = "./images/small_yellow_fish.gif";
            else
                this.fish.src = "./images/orange_fish.gif";

             ctx.drawImage(this.fish,this.x,this.y,this.width,this.height);    
        }else{
            ctx.drawImage(this.fish,this.x,this.y);  
        }  
       
    };

   
    this.moveLeft = function(){

        this.x -= this.speed;
    
    };

    this.moveRight = function(){

        this.x += this.speed;

    };

    this.moveUp = function(){

        this.y -= this.speed;

    };

    this.moveDown = function(){

        this.y += this.speed;

    };


};