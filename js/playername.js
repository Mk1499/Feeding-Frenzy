let playerN = document.getElementById("playerName");
let playerBtn=document.getElementById("btnGame");
let out = function () {
  
    playerN.classList.add("fadeOutUp");
  }
  
  playerBtn.addEventListener('click',function(){
        out();
  });