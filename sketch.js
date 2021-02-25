var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var score = 0;
var GameState = "PLAY";
var particles = [];
var divisionHeight=300;
var count = 0;
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  if (GameState === "PLAY") {
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
  

    
}



function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("Chances : "+count,650,30);
 
  Engine.update(engine);
   fill("white")
   textSize(35)
   text("500",5,550)
   text("500",80,550);
   text("500",160,550);
   text("500",240,550);
   text("100",320,550);
   text("100",400,550);
   text("100",480,550);
   text("200",560,550);
   text("200",640,550);
   text("200",720,550);

   console.log(GameState);

   if (GameState === "END") {
    text("GAME OVER!",300,400);
    //block = createSprite(400,400,800,800);
  }
   
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  if (particle != null) {
    particle.display();
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 300) {
        score = score + 500;
        particle = null;
        if (count >= 5) 
        GameState = "END";
      }
      else if(particle.body.position.x < 600 && particle.body.position.x > 301){
        score = score + 100;
        particle = null;
        if (count >= 5)
        GameState = "END";
      }
      else if(particle.body.position.x < 900 && particle.body.position.x > 600) {
        score = score + 200;
        particle = null;
        if (count >= 5) 
        GameState = "END";
      }
    }
  }
  for (var k = 0;k < divisions.length;k++) {
    divisions[k].display();
  }
}

function mousePressed() {
  if(GameState !== "END") {
    count = count + 1;
   //particle.display();
    particle = new Particle(mouseX,10,10,10);
  }
}