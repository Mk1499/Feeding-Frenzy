let adjustBoard = function (score, level, charID, lives) {

  fishMenu[0].src='images/Enemies/right/'+fishImages["level"+level][0];
  fishMenu[1].src='images/Enemies/right/'+fishImages["level"+level][1];
  fishMenu[2].src='images/Enemies/right/'+fishImages["level"+level][2];

  growthBarActual.style.width = ((score - (level-1) * 30)  / 30 * 100) + '%';

  let i = scoreNumArr.length - 1;

  while (score > 0) {

    scoreNumArr[i].src = 'images/Characters/numbers/' + (score % 10) + '-blue.png';
    i--;
    score = (score - (score % 10)) / 10;

  }

  charImg.src = 'images/Characters/player' + charID + "-right.gif";

  let j = liveNumArr.length - 1;

  while (lives > 0) {

    liveNumArr[j].src = 'images/Characters/numbers/' + (lives % 10) + '-blue.png';
    j--;
    lives = (lives - (lives % 10)) / 10;

  }

  levelNum.src = 'images/Characters/numbers/' + level + '-blue.png';
  seaStarImgNum.src='images/Characters/numbers/' + (seaStarNum % 6) + '-blue.png';
}