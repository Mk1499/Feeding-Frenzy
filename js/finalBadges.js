
let updateCurrentPlayerBadges = function () {


   let finalBadges = currentPlayerTempBadge;
   if (localStorage.getObj("highestScore").name == playerNa.value)
      finalBadges.push(true);
   else
      finalBadges.push(false);



   if (localStorage.getObj("highestNumLives").name == playerNa.value)
      finalBadges.push(true);
   else
      finalBadges.push(false);


   for (let i = 0; i < finalBadges.length; i++) {

      if (finalBadges[i])
         finalBadgesArr[i].style.display = "block";
      else
         finalBadgesArr[i].style.display = "none";
   }


   console.log(finalBadges);







}
