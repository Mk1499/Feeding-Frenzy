
let scoreNumArr=document.getElementsByClassName('scoreNum');//4 images for score
let liveNumArr=document.getElementsByClassName('liveNum');//2 images for lives
let growthBarTotal=document.getElementById('growthBarTotal');// growth bar total div
let growthBarActual=document.getElementById('growthBarActual');// growth bar actual div
let charImg=document.getElementById('charImg');  // char img in live div
let levelNum=document.getElementById('levelNum'); //1 img for level number

let scoreDiv=document.getElementById('scoreDiv');
let growthDiv=document.getElementById('growthDiv');
let liveDiv=document.getElementById('liveDiv');
let levelDiv=document.getElementById('levelDiv');


let levelCompletionScores=[20,50,80];

function adjustBoard(score,level,charID,lives){

  growthBarActual.style.width=(score/levelCompletionScores[level-1])*100+'%';
  console.log(growthBarActual.style.width)

  let i=scoreNumArr.length-1;
  while(score>0){
     scoreNumArr[i].src = 'images/Characters/numbers/'+(score%10)+'-blue.png';
     i--;
     score=(score-(score%10))/10;
  }
  charImg.src='images/Characters/player'+charID+"-right.gif";
  let j=liveNumArr.length-1;
  while(lives>0){
     liveNumArr[j].src ='images/Characters/numbers/'+(lives%10)+'-blue.png';
     j--;
     lives=(lives-(lives%10))/10;
  }


  levelNum.src='images/Characters/numbers/'+level+'-blue.png';
}
