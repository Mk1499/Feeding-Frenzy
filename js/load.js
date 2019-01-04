let lod=document.getElementById("load");

let loaderOut = function () {
  lod.classList.add("fadeOutUp") ;
 // lod.style.display = "none" ;  
}


window.setTimeout( loaderOut() , 50000)  ; 
