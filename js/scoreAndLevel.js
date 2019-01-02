let scoreAndLevel = function(){
    scoreRecord.innerHTML = score ; 
    levelRecord.innerHTML = level ; 
    HScoreRecord.innerHTML = localStorage.getItem("HScore") ; 

    if (score === 0){

        fishPlayer.height = 60 ;
        fishPlayer.width = 100 ; 
    } 
    else if (score === 10){

        fishPlayer.height = 100 ;
        fishPlayer.width = 150 ; 
    }
    
    if (score === 20 ){
        fishPlayer.height = 150 ;
        fishPlayer.width = 200 ; 
    }
    else if (score === 30){
        level++ ; 
        score = 0 ; 
    }

    if ((score + level *10) > localStorage.getItem("HScore"))
    localStorage.setItem("HScore",score) ; 
}