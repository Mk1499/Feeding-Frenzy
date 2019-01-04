let lod=document.getElementById("load");

let loaderOut = function () {
  lod.classList.add("fadeOutUp") ;
 // lod.style.display = "none" ;  
}

document.readyState(
window.setTimeout(
  
  loaderOut() , 50000)   
)