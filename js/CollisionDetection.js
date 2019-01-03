let bom = document.createElement("img");

let detectCollisionBetweenPlayerFishAndEnemyFishesV2 = function () {

      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (fishEnemiesList[i].direction === "right") {
                  if (parseInt(fishPlayer.style.left) > fishEnemiesList[i].x) {
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    boom(parseInt(fishPlayer.style.left) - fishPlayer.width, parseInt(fishPlayer.style.top));

                                    noCollision = false;

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playAudio();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                              }


                        }

                  } else {

                        if (fishEnemiesList[i].x - parseInt(fishPlayer.style.left) <= fishPlayer.width
                              && fishEnemiesList[i].x - parseInt(fishPlayer.style.left) >= 0
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {


                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("right", "left");
                                    console.log(" element src " + fishEnemiesList[i].element.src);
                                    boom(parseInt(fishPlayer.style.left) + fishPlayer.width, parseInt(fishPlayer.style.top));
                                    noCollision = false;

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playAudio();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
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
                                    console.log(" element src " + fishEnemiesList[i].element.src);
                                    boom(parseInt(fishPlayer.style.left) - fishPlayer.width, parseInt(fishPlayer.style.top));

                                    noCollision = false;

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playAudio();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                              }
                        }
                  } else {

                        if (fishEnemiesList[i].x - parseInt(fishPlayer.style.left) <= fishPlayer.width
                              && fishEnemiesList[i].x - parseInt(fishPlayer.style.left) >= 0
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 20) {

                              if (fishPlayer.height < fishEnemiesList[i].height) {
                                    boom(parseInt(fishPlayer.style.left) + fishPlayer.width, parseInt(fishPlayer.style.top));

                                    noCollision = false;

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playAudio();
                                    score++;
                                    fishEnemiesList.splice(i, 1);
                              }

                        }
                  }

            }
      }

      return noCollision;

};

let boom = function (x, y) {

      bom.src = "./images/Box_And_Boom/BOOOM.gif";
      bom.height = 150;
      bom.width = 150;
      bom.style.position = "absolute";
      bom.style.left = x + "px";
      bom.style.top = y + "px";

      console.log("BOOOM : " + parseInt(bom.style.left) + " " + parseInt(bom.style.top));
      container.appendChild(bom);
      setTimeout(() => container.removeChild(bom), 1000);

};

let wait = function (ms) {

      var start = new Date().getTime();
      var end = start;

      while (end < start + ms) {

            end = new Date().getTime();

      }
};

let playAudio = function () {
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
      //fishPlayer.style.border = "2px black solid" ;
      for (let i = 0; i < fishEnemiesList.length; i++) {

            /* if (parseInt(fishPlayer.style.left) < fishEnemiesList[i].x + fishEnemiesList[i].width
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
                   }*/





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
                              playAudio();
                              score++;
                              fishEnemiesList.splice(i, 1);
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
                              playAudio();
                              score++;
                              fishEnemiesList.splice(i, 1);
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
