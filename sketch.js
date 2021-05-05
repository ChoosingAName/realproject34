const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var ground1, division
var engine, world
var END = 0
var PLAY = 1
var START = 2
var CLICK = 3
var gameState = START
var thescorething

function preload(){

}

function setup() {
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
   ground1 = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    { 
      plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("score:"+ score, 40, 45)
 //text("Score : "+score,20,30);
  Engine.update(engine);
if(gameState == CLICK||gameState == END){
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
   }
  if(gameState == CLICK){
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-250, width/2+250), 10,10));
     thescorething = (random(1,4))
     if(thescorething >= 1 && thescorething < 2){
       score = score + 100
     }
     if(thescorething >= 2 && thescorething < 3){
      score = score + 200
    }
    if(thescorething >= 3 && thescorething <= 4){
      score = score + 500
    }
   }
  }
   for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  if(frameCount > 350){
    gameState = END
    frameCount = 0
  }
  if(gameState == END){
    text("Game has ended", 350, 400)
  }
   ground1.display();
}
}

function mousePressed(){
  frameCount = 0
  gameState = CLICK
}
