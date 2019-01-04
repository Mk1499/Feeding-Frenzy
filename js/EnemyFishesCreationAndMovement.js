
let createEnemyFishes = function () {

    foodTimer++;
    if (foodTimer > 100 && fishEnemiesList.length <= 10) {

        let rand = Math.floor(Math.random() * fishImages.length);

        let rightFish = new EnemyFish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages[rand].src, fishImages[rand].weight, "right",verticalDirections[Math.round(Math.random())]);


        fishEnemiesList.push(rightFish);
        rightFish.createFish();
        pushNewFishRandomMotion();

        rand = Math.floor(Math.random() * fishImages.length);

        let leftFish = new EnemyFish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages[rand].src, fishImages[rand].weight, "left",verticalDirections[Math.round(Math.random())]);

        fishEnemiesList.push(leftFish);
        leftFish.createFish();
        pushNewFishRandomMotion();

        foodTimer = 0;
    }

}

let moveEnemyFishes = function () {

    for (let i = 0; i < fishEnemiesList.length; i++) {
        fishEnemiesList[i].moveFishes();
        if (fishEnemiesList[i].x < 0 - fishEnemiesList[i].width
            || fishEnemiesList[i].x > window.innerWidth + fishEnemiesList[i].width) {
            container.removeChild(fishEnemiesList[i].element);
            fishEnemiesList.splice(i, 1);
            removeFishRandomMotion(i);
        }
    }

}
