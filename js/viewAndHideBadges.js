let viewBadges = function (){
    badgeDiv.style.display = "block" ;
    badgeDiv.classList.add("bounceInLeft") ;
    badgeDiv.classList.remove("bounceOutLeft") ;
}

let hideBadges = function (){
    badgeDiv.classList.add("bounceOutLeft") ;
    badgeDiv.classList.remove("bounceInLeft") ;
    setTimeout(function(){
    badgeDiv.style.display = "none" ;
  } , 1000) 

}
