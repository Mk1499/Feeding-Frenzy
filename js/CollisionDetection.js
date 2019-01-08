let bom = document.createElement("img");

/**********************************
** Version 2 function to detect the collision between the player fish and the enemy fishes
** inside the Game area and decide if the fish should be eaten or the lives of the player
** fish should be reduced. and when the lives reach 0 it's gameover.
**
**Author (@ Mohamed Gomaa)
**
************************************/

let detectCollisionBetweenPlayerFishAndEnemyFishesV2 = function () {

      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (fishEnemiesList[i].direction === "right") {
                  if (parseInt(fishPlayer.style.left) > fishEnemiesList[i].x) {
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    boom();

                                    resetTheGameAfterThePlayerFishDies();


                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }


                        }

                  } else {

                        if (fishEnemiesList[i].x - parseInt(fishPlayer.style.left) <= fishPlayer.width
                              && fishEnemiesList[i].x - parseInt(fishPlayer.style.left) >= 0
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {


                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("right", "left");
                                    boom();

                                    resetTheGameAfterThePlayerFishDies();


                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }
                        }
                  }

            } else {

                  if (parseInt(fishPlayer.style.left) > fishEnemiesList[i].x) {
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("left", "right");

                                    boom();

                                    resetTheGameAfterThePlayerFishDies();

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }
                        }
                  } else {

                        if (fishEnemiesList[i].x - parseInt(fishPlayer.style.left) <= fishPlayer.width
                              && fishEnemiesList[i].x - parseInt(fishPlayer.style.left) >= 0
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    boom();
                                    resetTheGameAfterThePlayerFishDies();

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }

                        }
                  }

            }
      }

};

/**********************************
** this function to display the BOOM effect after the player fish dies.
** 
** Author (@ Mohamed Gomaa)
**
************************************/

let boom = function () {

      bom.src = "./images/Box_And_Boom/BOOOM.gif";
      bom.height = 300;
      bom.width = 300;
      bom.style.position = "absolute";
      bom.style.left = parseInt(fishPlayer.style.left) - containerBoundingRect.left + "px";
      bom.style.top = parseInt(fishPlayer.style.top) - containerBoundingRect.top + "px";

      container.appendChild(bom);
      setTimeout(() => container.removeChild(bom), 1000);

};

/**********************************
** this function to reset the game after the player fish dies
** 
** Author (@ Mohamed Gomaa)
**
************************************/

let resetTheGameAfterThePlayerFishDies = function () {

      lives--;
      fishPlayer.style.display = "none";
      clearInterval(interval);
      playdyingSound();

      setTimeout(() => {

            for (let i = 0; i < fishEnemiesList.length; i++)
                  container.removeChild(fishEnemiesList[i].element);

            fishEnemiesList = [];
            randomMotionTimer=[];
            randomMotionCompletion=[];
            randomMotionTimerY=[];
            randomMotionCompletionY=[];
            fishPlayer.style.display = "block";
            interval = setInterval(UpdateGameGrid, 20);


      }, 1000);

};

/**********************************
** Old function to detect the collision between the player fish and the enemy fishes
** inside the Game area and decide if the fish should be eaten or the lives of the player
** fish should be reduced. and when the lives reach 0 it's gameover.
**
**Author (@ Mohamed Khaled)
**
************************************/

let detectCollisionBetweenPlayerFishAndEnemyFishes = function () {

      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (fishEnemiesList[i].direction === "left") {
                  if (parseInt(fishPlayer.style.left) < fishEnemiesList[i].x + 0.7 * fishEnemiesList[i].width
                        &&
                        parseInt(fishPlayer.style.left) + fishPlayer.width > fishEnemiesList[i].x
                        &&
                        parseInt(fishPlayer.style.top) < fishEnemiesList[i].y + 0.8 * fishEnemiesList[i].height
                        &&
                        parseInt(fishPlayer.style.top) + fishPlayer.height > fishEnemiesList[i].y
                        + 0.2 * fishEnemiesList[i].height
                  ) {
                        // alert("collision") ;
                        if (fishPlayer.height >= fishEnemiesList[i].height) {

                              container.removeChild(fishEnemiesList[i].element);
                              playEatingSound();
                              score++;
                              fishEnemiesList.splice(i, 1);
                              removeFishRandomMotion(i);
                        }
                        else {
                              noCollision = false;
                        }
                  }
            }

            if (fishEnemiesList[i].direction === "right") {
                  if (parseInt(fishPlayer.style.left) > fishEnemiesList[i].x + 0.5 * fishEnemiesList[i].width
                        &&
                        parseInt(fishPlayer.style.left) < fishEnemiesList[i].x + 1 * fishEnemiesList[i].width
                        &&
                        parseInt(fishPlayer.style.top) < fishEnemiesList[i].y + 0.8 * fishEnemiesList[i].height
                        &&
                        parseInt(fishPlayer.style.top) + fishPlayer.height > fishEnemiesList[i].y
                        + 0.2 * fishEnemiesList[i].height
                  ) {
                        // alert("collision") ;
                        if (fishPlayer.height >= fishEnemiesList[i].height) {

                              container.removeChild(fishEnemiesList[i].element);
                              playEatingSound();
                              score++;
                              fishEnemiesList.splice(i, 1);
                              removeFishRandomMotion(i);
                        }
                        else {
                              noCollision = false;
                        }
                  }
            }

      }
      return noCollision;
}


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
                                    && fishEnemiesList[i].y >= fishEnemiesList[j].y - fishEnemiesList[i].height + (fishEnemiesList[i].height * 0.3)
                                    && fishEnemiesList[i].y <= fishEnemiesList[j].y + fishEnemiesList[j].height - (fishEnemiesList[i].height * 0.3)
                                    && fishEnemiesList[i].x >= fishEnemiesList[j].x - fishEnemiesList[i].width + (fishEnemiesList[i].width * 0.3)
                                    && fishEnemiesList[i].x <= fishEnemiesList[j].x + fishEnemiesList[j].width - (fishEnemiesList[i].width * 0.3)
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
                                          removeFishRandomMotion(i);


                                    }
                                    else if (fishEnemiesList[i].weight < fishEnemiesList[j].weight) {
                                          container.removeChild(fishEnemiesList[i].element);
                                          fishEnemiesList.splice(i, 1);
                                          removeFishRandomMotion(i);

                                    }

                              }

                        }

                  }

            }

      }

};


/**********************************
** this function to detect the collision between the player fish and the Sea Stars
**
**Author (@ Mostafa Hassan)
**
************************************/

function detectCollisionBetweenPlayerFishAndSeaStar(dragMe, rect){
  
  let object_1 = dragMe.getBoundingClientRect();
  let object_2 = rect.getBoundingClientRect();

  if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
		object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
    bonusAdd();
  }

}