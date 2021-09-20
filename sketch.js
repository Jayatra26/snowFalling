var snowBackground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var snow,snowArr=[]
var olaf,olafImage;


function preload(){
  snowBackground = loadImage("snow1.jpg")
  olafImage = loadAnimation("Olaf/1.png","Olaf/2.png","Olaf/3.png","Olaf/4.png","Olaf/5.png","Olaf/6.png","Olaf/7.png","Olaf/8.png","Olaf/9.png","Olaf/10.png","Olaf/11.png","Olaf/12.png","Olaf/13.png","Olaf/14.png","Olaf/15.png","Olaf/16.png",)
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  olaf = createSprite(400, 200, 50, 50);
  olaf.addAnimation("olaf",olafImage);
}

function draw() {

  Engine.update(engine);
  background(snowBackground);  
  if(frameCount%5===0){
    snowArr.push(new Snow(random(0,800),0,30))
  }
  for(var i=0;i<snowArr.length;i++){
    snowArr[i].display();
  }

  drawSprites();
}