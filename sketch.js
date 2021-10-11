var trex, trex_img;
var ground ,groundImg;

function preload(){
  trex_img = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(400,400)
  trex = createSprite(200,200,50,50);
  trex.addAnimation("trex",trex_img);
  //create a trex sprite
  ground = createSprite(0,250,800,40);
  ground.addImage("ground",groundImg);
 
}

function draw(){
  background("black");
  
  drawSprites();
}
