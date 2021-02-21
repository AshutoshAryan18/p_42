var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;
var score
var frameCount

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

    //create Obstacle and fruit Groups
    fruitGroup=createGroup();
    obstaclesGroup=createGroup();
  
  
}

function draw() { 
  background(0);

  stroke("black");
  textSize(20);
  fill("black");
   
  text("score:"+score,100,100);
  

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }

  if(obstaclesGroup.isTouching(player)){
    gameState===END
  }
}else if(gameState===END){
  backgr.velocityX=0
  player.visible=false

  //set lifetime of the game objects so that they are never destroyed
  fruitGroup.destroyEach();
  obstaclesGroup.destroyEach();

  textSize(30)
  fill(255)
  text("GAME OVER!!",300,220)


}
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
  if (gameState === END) {
     
    
     //both group velocity is zero
      
     fruitGroup.setVelocityXEach(0);
     obstaclesGroup.setVelocityXEach(0);
  
  }
 bananas()
 obstacles()

  drawSprites();

function bananas(){
  if(frameCount%80===0){
    banana=createSprite (600,250,40,10);                          banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    fruitGroup.add(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5;

    banana.lifetime=300;
    player.depth=banana.depth+1
    FoodGroup.add(banana)
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,320,20,20);
    obstacle.addImage(obstaclesImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5; 
  }
 }