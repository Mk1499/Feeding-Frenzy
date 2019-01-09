
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
};

let updateLocalStorage = function () {

  if (gameCompleteFlag) {
    if (lives > previousState.numberOfLives) {
      previousState.numberOfLives = lives;
      localStorage.setObj(playerNa.value, previousState);
    }
    if (currentPlayerLevel3Time < localStorage.getObj(playerNa.value).level3time) {
      previousState.level3time = currentPlayerLevel3Time;
      localStorage.setObj(playerNa.value, previousState);
    }
  }

  else if (lives === 0) {
    if (score > previousState.scoreing) {
      previousState.scoreing = score;
      localStorage.setObj(playerNa.value, previousState);
    }
  }

  else {

    switch (level) {
      case 2:
        {
          if (currentPlayerLevel1Time < localStorage.getObj(playerNa.value).level1time) {
            previousState.level1time = currentPlayerLevel1Time;
            localStorage.setObj(playerNa.value, previousState);
          }
        }
        break;
      case 3:
        {
          if (currentPlayerLevel2Time < localStorage.getObj(playerNa.value).level2time) {
            previousState.level2time = currentPlayerLevel2Time;
            localStorage.setObj(playerNa.value, previousState);
          }
        }
        break;
    }
  }
}
