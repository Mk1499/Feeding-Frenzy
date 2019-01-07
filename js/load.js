
let lod = document.getElementById("load");
let playerNa = document.getElementById("nameEnter");
let btnName=document.getElementById("btnGame");
var nameing=[];
var counting=0;
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}
if(localStorage.getItem("counter") ==="NaN" || localStorage.getItem("counter") ===null){
  localStorage.setItem("counter",0);
  }
let loaderOut = function () {
  
  lod.classList.add("fadeOutUp");

}
btnName.addEventListener('click',function(){
    if(playerNa.value !=""){
      var iii=parseInt(localStorage.getItem("counter"));
      localStorage.setObj(localStorage.getItem("counter"),playerNa.value);
      nameing[iii]=playerNa.value;
      iii++;
      localStorage.setItem("counter",iii);
      counting=iii;
    loaderOut();
    }
});

