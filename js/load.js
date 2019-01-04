let lod=document.getElementById("load");

let loaderOut = function () {
  lod.classList.add("fadeOut") ;
  lod.style.display = "none" ;  
}


setTimeout( 

  document.addEventListener("DOMContentLoaded", function(event) { 
    loaderOut() ; 
    })

, 5000)  ; 
