let updateRandomMotion=function(){
    for (let i=0;i<randomMotionTimer.length;i++){
          randomMotionTimer[i]=randomMotionTimer[i]+1;
          randomMotionTimerY[i]=randomMotionTimerY[i]+1;
          if (randomMotionTimer[i]>=randomMotionCompletion[i]){
            randomMotionTimer[i]=0;
            randomMotionCompletion[i]=Math.floor(Math.random() * 301)+200;
            if (fishEnemiesList[i].direction=="right")
                {fishEnemiesList[i].direction="left";
                      fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("right", "left");
              }
            else
                {fishEnemiesList[i].direction="right";
              fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("left", "right");}
          }
    
          if (randomMotionTimerY[i]>=randomMotionCompletionY[i]){
            randomMotionTimerY[i]=0;
            randomMotionCompletionY[i]=Math.floor(Math.random() * 201)+100;
            if (fishEnemiesList[i].directionVertical==="top")
                fishEnemiesList[i].directionVertical="down";
            else
                fishEnemiesList[i].directionVertical="top";
          }
    }
    }
    
    let pushNewFishRandomMotion=function(){
    randomMotionTimer.push(0);
    randomMotionCompletion.push(Math.floor(Math.random() * 301)+200);
    randomMotionTimerY.push(0);
    randomMotionCompletionY.push(Math.floor(Math.random() * 201)+100);
    }
    
    let removeFishRandomMotion=function(k){
        randomMotionTimer.splice(k, 1);
        randomMotionCompletion.splice(k, 1);
        randomMotionTimerY.splice(k, 1);
        randomMotionCompletionY.splice(k, 1);
    }