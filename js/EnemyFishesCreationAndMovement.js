let createEnemyFishes = function () {

    foodTimer++;
    if (foodTimer > 100/(level*0.9) && fishEnemiesList.length <= 9) {

        let rand = Math.floor(Math.random() * fishImages["level"+level].length);

        let rightFish = new EnemyFish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages["level"+level][rand], fishImages.weight[rand], "right",verticalDirections[Math.round(Math.random())]);


        fishEnemiesList.push(rightFish);
        rightFish.createFish();
        pushNewFishRandomMotion();

        rand = Math.floor(Math.random() * fishImages["level"+level].length);

        let leftFish = new EnemyFish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages["level"+level][rand], fishImages.weight[rand], "left",verticalDirections[Math.round(Math.random())]);

        fishEnemiesList.push(leftFish);
        leftFish.createFish();
        pushNewFishRandomMotion();

        foodTimer = 0;
    }

}

let moveEnemyFishes = function () {

    for (let i = 0; i < fishEnemiesList.length; i++) {
        fishEnemiesList[i].moveFishes();
        if (fishEnemiesList[i].y <= 0) {
            fishEnemiesList[i].directionVertical="down";
        }
        if (fishEnemiesList[i].x < 0 - fishEnemiesList[i].width
            || fishEnemiesList[i].x > window.innerWidth + fishEnemiesList[i].width
            || fishEnemiesList[i].y > window.innerHeight) {
            container.removeChild(fishEnemiesList[i].element);
            fishEnemiesList.splice(i, 1);
            removeFishRandomMotion(i);
        }




    }

}
