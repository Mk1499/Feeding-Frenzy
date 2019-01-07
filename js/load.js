
let lod = document.getElementById("load");

let loaderOut = function () {
  
  lod.classList.add("fadeOutUp");

}

document.onreadystatechange = function () {

  if (document.readyState === 'interactive') {

    loaderOut();

  }

}