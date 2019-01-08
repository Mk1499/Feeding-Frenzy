


let getPlayersNames=function(){


  if (localStorage.playersNames)
  {
    return localStorage.playersNames.split(',');
  }
  else{

    localStorage.setItem("playersNames","");
  }

}

let pushNew
