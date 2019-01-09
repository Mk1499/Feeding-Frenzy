
specialFish = new EnemyFish(-100, window.innerHeight / 2, "specialFish.gif", 0.4, "right", "");
specialFish.createFish();

let showSpecialFish = function () {

    if (level === 2 && score === 35 && specialFlag === 1) {

        specialFlag = 0;
        specialFish.speedX = 7;
        specialFish.speedY = 0;

        specialFishInterval = setInterval(function () {

            specialFish.moveFishes()

            detectCollisionBetweenPlayerAndSpecialFish();

            if (specialFish.x > window.innerWidth + specialFish.width) {
                container.removeChild(specialFish.element);
                clearInterval(specialFishInterval);
              
            }

        }, 20);

    }
};


let detectCollisionBetweenPlayerAndSpecialFish = function () {


    if (specialFish.width >= parseInt(fishPlayer.style.left) - specialFish.x
        && parseInt(fishPlayer.style.top) >= specialFish.y - fishPlayer.height
        && parseInt(fishPlayer.style.top) <= specialFish.y + specialFish.height) {

        container.removeChild(specialFish.element);

        for (let i = 0; i < fishEnemiesList.length; i++) {

            fishEnemiesList[i].height = 30;
            fishEnemiesList[i].width = 50;
            fishEnemiesList[i].element.height = 30;
            fishEnemiesList[i].element.width = 50;

        }

        clearInterval(specialFishInterval);
        return;

    }

};