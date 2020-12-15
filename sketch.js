var player;
var ground,groundImg;
var boy;
var building,buildImg,building2,building3,building1;
var build;
var move2,move1;
var atm,atmImg;
var waste,wasteImg;
var waste1;
var road,roadImg;

function preload(){
 
  boy = loadAnimation("boy-cutout.png","boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png");
 groundImg = loadImage("ground.jpg");
 buildImg = loadImage("build1.png");
 atmImg = loadImage("atm.png");
 wasteImg = loadImage("garbage.png");
 roadImg = loadImage("road.jpg");



}
function setup(){
  var canvas = createCanvas(1200,600);
  // ground = createSprite(600,900,800,150);
  // ground.addImage(groundImg);
  // ground.scale = 1;
  
  player = createSprite(100,200,50,50);
  player.addAnimation("running",boy);
  player.scale = 0.15;
  edges = createEdgeSprites();
  player.bounceOff(edges);
  atm = createSprite(1100,250,100,100);
  build2();
  atm.addImage(atmImg);
  atm.scale = 0.1;
 
  waste1 = new Garbage(100,100,20,20);
  // waste1.addImage(wasteImg);
  road = createSprite(310,300,100,600);
  // road.shapeColor("black");
  // road.addImage(roadImg);
  
  
  

}
function draw(){
  background("black");
  if(keyDown(UP_ARROW)){
    player.y = player.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5;
  }
  player.depth = building.depth-2;
  // player.depth = building1.depth-2;
  // player.depth = building2.depth-2;
  // player.depth = building3.depth-2;
  
  drawSprites();
  
}
function build2(){
  for (i = 100;i<650;i=i+150){
    building = new Build(200,i,50,100);
    building.display();
   
    building1 = new Build(600,i,50,100);
    building1.display();
  }
  for (i = 150;i<550;i=i+150){
    building3 = new Build(400,i,50,100);
    building3.display();
    building2 = new Build(800,i,50,100);
    building2.display();
  }
  move2 = new Build(400,450,50,100);
  // move1 = new Build(800,450,50,100);
  move2.display();
  // move1.display();

}