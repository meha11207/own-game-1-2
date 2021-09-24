var bg,back;
var enemy,enemyImg;
var player,playerImg,playerImg2;
var PLAY,END;
var gameState = 1;
var flag = 0;

function preload(){
  bg = loadImage("back.jpg");
  enemyImg = loadImage("enemy.png")
  playerImg = loadImage("hunter.png")
  playerImg2 = loadImage("hunter2.png")
}

function setup() {
  createCanvas(1000,650);

  player = createSprite(100,550,50,50);
  player.addImage(playerImg)
  player.scale = 0.4
}

function draw() {
  background(bg);  

  if(gameState === 1){
    if(flag === 0){
      spawnEnemy();
      flag = 1
    }

    if(keyWentDown("space")){
      player.addImage(playerImg2)
      player.scale = 0.1
    }
    if(keyWentUp("space")){
      player.addImage(playerImg)
      player.scale = 0.4
    }
     if(keyDown("left")){
       player.velocityX = -3
     }
  
     if(keyDown("right")){
      player.velocityX = 3
    }
  
    if(keyDown("down")){
      player.velocityY = 3
    }
  
    if(keyDown("up")){
      player.velocityY = -3
    }  

    if(enemy.isTouching(player)){
      gameState = END
      player.destroy()
      enemy.destroy()
     
    }
 
  }
  
  if(gameState === END){
   console.log("game ended")
     textSize(100)
      fill("magenta")
      stroke(40)
      text("Game End",200,100)
    }
  
  
  drawSprites();
}

function spawnEnemy() {
   
    enemy = createSprite(900,500,40,10);
    enemy.y = Math.round(random(550,500));
    enemy.addImage(enemyImg);
    enemy.scale = 0.2;
    enemy.velocityX = -4
}