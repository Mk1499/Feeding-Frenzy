
let timer = function (){
    globalTimeInSeconds++;
    if (second < 59)
        second++ ;
    else {
        second = 0 ;
        minutes++ ;
    }
    if(minutes>=60){
        minutes = 0 ;
        hours++ ;
    }

    time = hours + " : " + minutes + " : "+second;

    /*timeDiv.innerHTML = (hours ? (hours>9?hours : "0"+hours) : "00" )+
                         " : "+
                         (minutes ? ( minutes>9?minutes : "0"+minutes) : "00") +
                         " : " +
                          (second ? (second>9?second: "0"+second):"00") ; */


    if (second < 9 ){
      secondNumArr[0].src ='images/Characters/numbers/0-blue.png' ;
      secondNumArr[1].src ='images/Characters/numbers/' + second + '-blue.png'
    }
    else {
      secondNumArr[0].src ='images/Characters/numbers/'+ (second - second%10)/10 +'-blue.png' ;
      secondNumArr[1].src ='images/Characters/numbers/' + second%10 + '-blue.png'
    }

    if (minutes < 9 ){

      minNumArr[0].src ='images/Characters/numbers/0-blue.png' ;
      minNumArr[1].src ='images/Characters/numbers/' + minutes + '-blue.png'
    }
    else {
      minNumArr[0].src ='images/Characters/numbers/'+ (minutes - minutes%10)/10 +'-blue.png' ;
      minNumArr[1].src ='images/Characters/numbers/' + minutes%10 + '-blue.png'
    }

    if (hours < 9 ){
      hourNumArr[0].src ='images/Characters/numbers/0-blue.png' ;
      hourNumArr[1].src ='images/Characters/numbers/' + hours + '-blue.png'
    }
    else {
      hourNumArr[0].src ='images/Characters/numbers/'+ (hours - hours%10)/10 +'-blue.png' ;
      hourNumArr[1].src ='images/Characters/numbers/' + hours%10 + '-blue.png'
    }
}
