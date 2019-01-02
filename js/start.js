load = document.getElementById("start") ; 
load.style.minHeight = window.innerHeight + "px" ; 

setTimeout(console.log("done") , 3000) ; 
let up = function(){ 
    load.classList.add("bounceOutUp") ; 
}