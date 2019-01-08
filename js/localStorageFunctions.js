
let previousState;

let updateLocalStorage=function(){
if (gameCompleteFlag){
     if (lives>previousState.numberOfLives)
        {
          previousState.numberOfLives=lives;
          localStorage.setObj(playerNa.value,previousState);
        }
     if (currentPlayerLevel3Time<localStorage.getObj(playerNa.value).level3time)
        {
          previousState.level3time=currentPlayerLevel3Time;
          localStorage.setObj(playerNa.value,previousState);
        }
   }
else{
  switch(level){
      case 2:
      {
        if (currentPlayerLevel1Time<localStorage.getObj(playerNa.value).level1time)
        {
          previousState.level1time=currentPlayerLevel1Time;
          localStorage.setObj(playerNa.value,previousState);
        }
      }
      break;
      case 3:
      {
        if (currentPlayerLevel2Time<localStorage.getObj(playerNa.value).level2time)
        {
          previousState.level2time=currentPlayerLevel2Time;
          localStorage.setObj(playerNa.value,previousState);
        }
      }
      break;
  }
}
}
