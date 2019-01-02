let scoreAndLevel = function(){
    scoreRecord.innerHTML = score ; 
    levelRecord.innerHTML = level ; 

    if (score === 0){

        fishPlayer.height = 60 ;
        fishPlayer.width = 100 ; 
    } 
    else if (score === 2){

        fishPlayer.height = 100 ;
        fishPlayer.width = 150 ; 
    }
    
    if (score === 3 ){
        fishPlayer.height = 150 ;
        fishPlayer.width = 200 ; 
    }
    else if (score ===4){
        level++ ; 
        score = 0 ; 
    }
}