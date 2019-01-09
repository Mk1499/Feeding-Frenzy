
let score = 0;
let level = 1;
let lives = 3;
let foodTimer = 0;

let currentPlayerLevel1Time = null;
let currentPlayerLevel2Time = null;
let currentPlayerLevel3Time = null;
let currentPlayerHeighestScore = null;
let currentPlayerFinishNumberOfLives = null;
let gameCompleteFlag = false;


let randomMotionTimer = [];
let randomMotionCompletion = [];
let randomMotionTimerY = [];
let randomMotionCompletionY = [];
let verticalDirections = ["top", "down"];
let seaStarTimer = 0;
let seaStarTimerMax = Math.floor(Math.random() * 501) + 500;
let seaStarPositionX;
let seaStarPositionY = 0;
let seaStarMovingFlag = false;
let seaStarNum = 0;
let gameover = false;
let specialFlag = 1;
let interval;
let specialFishInterval;
let backgroundSound;
let playerNumber;
let previousState;
let fishEnemiesList = [];
let fishEntryPositions = [0, 150, 300, 450, 600];
let fishImages = {
    level1: ["whiteFish.gif", "gray_fish.gif", "tuna.gif", "yellowFish.gif"],
    level2: ["gray_fish.gif", "tuna.gif", "yellowFish.gif", "blueFish.gif"],
    level3: ["tuna.gif", "yellowFish.gif", "blueFish.gif", "shark.gif"],
    weight: [0.8, 1.1, 1.4, 1.7]
}
let playedBefore1 = false;
let playedBefore2 = false;
let second = 0 ;
let minutes = 0 ;
let hours = 0 ;
let globalTimeInSeconds=0;
let currentPlayerTempBadge=[false,false,false];


let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");
let board = document.getElementById("board");
let eatSound = document.getElementById("eat");
let dyingSound = document.getElementById("die");
let levelUpSound = document.getElementById("level");
let underWaterSound = document.getElementById("underWater");
let sizeUpSound = document.getElementById("sizeUp");
let GOSound = document.getElementById("gameOverSound");
let badgeBTN = document.getElementById("badgeBtn") ;
let badgeDiv = document.getElementById("currentPlayerBadges") ;
let gameOverDiv = document.getElementById("gameOver");
let congDiv = document.getElementById("CongDiv");
let congSound = document.getElementById("congSound");
let scoreRecord = document.getElementById("score");
let levelRecord = document.getElementById("level");
let HScoreRecord = document.getElementById("HScore");
let scoreNumArr = document.getElementsByClassName('scoreNum');//4 images for score
let liveNumArr = document.getElementsByClassName('liveNum');//2 images for lives
let growthBarTotal = document.getElementById('growthBarTotal');// growth bar total div
let growthBarActual = document.getElementById('growthBarActual');// growth bar actual div
let charImg = document.getElementById('charImg');  // char img in live div
let levelNum = document.getElementById('levelNum'); //1 img for level number
let fishMenu = document.getElementsByClassName('menuChar');
let scoreDiv = document.getElementById('scoreDiv');
let growthDiv = document.getElementById('growthDiv');
let liveDiv = document.getElementById('liveDiv');
let levelDiv = document.getElementById('levelDiv');
let seaStarObj = document.getElementById('seaStar');
let seaStarImgNum = document.getElementById('seaStarNum');
let timeDiv = document.getElementById('timer');
let secondNumArr = document.getElementsByClassName('secondNum');
let minNumArr = document.getElementsByClassName('minNum');
let hourNumArr = document.getElementsByClassName('hourNum');
let backgroundVideo = document.getElementById("backgroundVideo");
let backgroundWebm = document.getElementById("backgroundWebm");
let containerBoundingRect = container.getBoundingClientRect();
let specialFish;
let badgrArr = document.getElementsByClassName('bad');

let load = document.getElementById("load");
let playerNa = document.getElementById("nameEnter");

let btnName=document.getElementById("btnGame");
let nameEnt=document.getElementById("EnterNameSec");
let finalBadgesArr=document.getElementsByClassName("finalBadges");
