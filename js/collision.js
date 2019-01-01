
function playAudio() {
      eatSound.play();
}

let collisionCheck = function () {
      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (parseInt(fishPlayer.style.left) < fishEnemiesList[i].x + fishEnemiesList[i].width
                  &&
                  parseInt(fishPlayer.style.left) + fishPlayer.width > fishEnemiesList[i].x
                  &&
                  parseInt(fishPlayer.style.top) < fishEnemiesList[i].y + fishEnemiesList[i].height
                  &&
                  parseInt(fishPlayer.style.top) + fishPlayer.height > fishEnemiesList[i].y
            ) {
                 
                  container.removeChild(fishEnemiesList[i].element);
                  playAudio();
                  score++;
                  fishEnemiesList.splice(i, 1);
            }
      }
}