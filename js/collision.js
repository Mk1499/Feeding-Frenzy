let eatSound = document.getElementById("eatSound") ; 
function playAudio() { 
      eatSound.play(); 
    } 

let collisionCheck = function(){
    for (let i = 0 ; i<fishEnemiesList.length ; i++){
        
            if ( parseInt(fishPlayer.style.left) < fishEnemiesList[i].x + fishEnemiesList[i].width 
                  && 
                  parseInt(fishPlayer.style.left) + fishPlayer.width > fishEnemiesList[i].x 
                  &&
                  parseInt(fishPlayer.style.top) < fishEnemiesList[i].y + fishEnemiesList[i].height
                  &&
                  parseInt(fishPlayer.style.top) + fishPlayer.height > fishEnemiesList[i].y 
                 ){
                console.log("There is Collision Between fish number "+ i+1) ;
                /*fishEnemiesList[j].element.src = "./images/space.png" ; 
                
               */fishEnemiesList[i].element.src = "./images/done.png" ; 
               playAudio() ;  
               score++ ; 
              fishEnemiesList.splice(i,1) ;
            
        } 
    }
    }