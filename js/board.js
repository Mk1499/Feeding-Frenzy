
let adjustBoard = function (score, level, charID, lives) {

  growthBarActual.style.width = ((score - (level-1) * 30)  / levelCompletionScores[level - 1] * 100) + '%';

  let i = scoreNumArr.length - 1;

  while (score > 0) {

    scoreNumArr[i].src = 'images/Characters/numbers/' + (score % 10) + '-blue.png';
    i--;
    score = (score - (score % 10)) / 10;
  
  }

  charImg.src = 'images/Characters/player' + charID + "-right.gif";
  charImg.width = 60;
  charImg.height = 27;
  
  let j = liveNumArr.length - 1;
  
  while (lives > 0) {
  
    liveNumArr[j].src = 'images/Characters/numbers/' + (lives % 10) + '-blue.png';
    j--;
    lives = (lives - (lives % 10)) / 10;
  
  }

  levelNum.src = 'images/Characters/numbers/' + level + '-blue.png';

}