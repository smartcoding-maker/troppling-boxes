const Engine=Matter.Engine       
const World= Matter.World 
const Bodies=Matter.Bodies
       
  
       
       function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create()
  world=engine.world
  G=new Ground(windowWidth/2,windowHeight-100,windowWidth,100)
  B1=new Box(300,100,100,50)
  B2=new Box(300,50,30,100)
}

function draw() {
  background(255,255,0);
  Engine.update(engine)
  G.display()
  B1.display()
  B2.display()
}