
let loaderOut = function () {

  load.classList.add("fadeOutUp");

}

document.onreadystatechange = function () {

  if (document.readyState === 'complete') {

    loaderOut();

  }

}

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

btnName.addEventListener('click',function(){
  if(playerNa.value !=""){

//    localStorage.setObj(playerNa.value,{scoreing:null,level1time:null,level2time:null,level3time:null,numberOfLives:lives});
    nameEnt.classList.add("fadeOutUp");
  }
});
