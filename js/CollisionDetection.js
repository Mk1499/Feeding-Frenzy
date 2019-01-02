
let playAudio = function() {
      eatSound.play();
};

/**********************************
** this function to detect the collision between the player fish and the enemy fishes   
** inside the Game area and decide if the fish should be eaten or the lives of the player 
** fish should be reduced. and when the lives reach 0 it's gameover.
**
**Author (@ Mohamed Khaled)
**
************************************/

let detectCollisionBetweenPlayerFishAndEnemyFishes = function () {
      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (parseInt(fishPlayer.style.left) < fishEnemiesList[i].x + fishEnemiesList[i].width
                  &&
                  parseInt(fishPlayer.style.left) + fishPlayer.width > fishEnemiesList[i].x
                  &&
                  parseInt(fishPlayer.style.top) < fishEnemiesList[i].y + fishEnemiesList[i].height
                  &&
                  parseInt(fishPlayer.style.top) + fishPlayer.height > fishEnemiesList[i].y
            ) {
                  if (fishPlayer.height >= fishEnemiesList[i].height) {

                        container.removeChild(fishEnemiesList[i].element);
                        playAudio();
                        score++;
                        fishEnemiesList.splice(i, 1);
                  }
                  else {
                        lives--;
                        if (lives === 0)
                              gameover = true;
                        console.log("Game Over !!!");
                  }

            }
      }
};

/**********************************
** this function to detect the collision between the enemy fishes itself   
** inside the Game area and decide if one of the fishes is smaller in weight
** it will be eaten by the other fish.
**
**Author (@ Mohamed Gomaa)
**
************************************/

let detectCollisionBetweenEnemyFishes = function () {

      for (let i = 0; i < fishEnemiesList.length; i++) {
  
          if (fishEnemiesList[i].direction === "right") {
              for (let j = 0; j < fishEnemiesList.length; j++) {
                  if (i != j && fishEnemiesList[j].direction == "left"
                      && fishEnemiesList[i].weight != fishEnemiesList[j].weight) {
  
                      if (fishEnemiesList[j].x - fishEnemiesList[i].x <= fishEnemiesList[i].width
                          && fishEnemiesList[i].y === fishEnemiesList[j].y
                          && fishEnemiesList[i].x > 0
                          && fishEnemiesList[i].x <= window.innerWidth + fishEnemiesList[i].width
                          && fishEnemiesList[j].x > 0
                          && fishEnemiesList[j].x <= window.innerWidth) {
  
                          // console.log("collision happend between fish at x : " + fishEnemiesList[i].x
                          //     + " and y: " + fishEnemiesList[i].y + " and fish at x : " + fishEnemiesList[j].x
                          //     + " and y: " + fishEnemiesList[j].y + " and array length : " + fishEnemiesList.length);
  
                          if (fishEnemiesList[i].weight > fishEnemiesList[j].weight) {
                              container.removeChild(fishEnemiesList[j].element);
                              fishEnemiesList.splice(j, 1);
  
  
                          }
                          else if (fishEnemiesList[i].weight < fishEnemiesList[j].weight) {
                              container.removeChild(fishEnemiesList[i].element);
                              fishEnemiesList.splice(i, 1);
  
                          }
  
                      }
  
                  }
  
              }
  
          }
  
      }
  
  };