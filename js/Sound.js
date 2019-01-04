
let playUnderWaterSound = function () {
    underWaterSound.play();
};


let playEatingSound = function () {
    eatSound.play();
};

let playdyingSound = function () {
    dyingSound.play();
};

let playLevelUpSound = function () {
    levelUpSound.play();
};

let sizeSound1 = function(){
    if (!playedBefore1){
          sizeUpSound.play() ;
        }
          playedBefore1 = true  ; 

}
let sizeSound2 = function(){
    if (!playedBefore2){
          sizeUpSound.play() ;
        }
          playedBefore2 = true  ; 

}