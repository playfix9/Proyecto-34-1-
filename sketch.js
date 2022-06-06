const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var tabiqueImg,ventanaImg,militarImg,backgrdImg;
var tabique,tabique1,ventana;
var ground;
var canvas,engine,world;
var per1 = 0;
var ventanas = [];
var tabiques = [];
var fruit,rope,rope2,fruit_con,fruit_con_2;
var button;
var boton = "inutilizado";

$('.force').on('click', function () {
  Body.applyForce( fruit, {x: fruit.position.x, y: fruit.position.y}, {x: 0.05, y: 0});
});

function preload(){
backgrdImg = loadImage("/sources/fondo.jpg");
canonball = loadImage("/sources/cannonball.png")
}

function setup(){

canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
angleMode(DEGREES);


rectMode(CENTER);
ground = Bodies.rectangle(770,592, 450 , 10 , { isStatic: true });
World.add(world, ground);


rope = new Rope(10,{x:100,y:90});
rope2 = new Rope(14,{x:500,y:90});

fruit = Bodies.circle(300,300,20);
Matter.Composite.add(rope.body,fruit);

fruit_con = new Link(rope,fruit);
fruit_con_2 = new Link(rope2,fruit);

button = createImg('cut_btn.png');
button.position(300,75);
button.size(50,50);
button.mouseClicked(drop);

for(var i = 0; i<9; i++){
  console.log("ola");
  
  }

}    

function draw(){
background(161,130,98);

image(backgrdImg, 0, 0, width, height);


Engine.update(engine);

push();
imageMode(CENTER);
if(fruit!=null){
    image(canonball,fruit.position.x,fruit.position.y,40,40);

  }
pop();



rope.show();
rope2.show();

showtabs();



fill("brown");
rect(ground.position.x, ground.position.y, 450, 15);
rectMode(CENTER);


}


function showtabs() {
  if (tabiques.length > 0) {
    if (
      tabiques.length < 5 
    ) {
      var positionsx = [726,726,726,726];
      var positionsy = [420,300,520,100];
      

      for(var i = 0; i < 5; i++) {
      var tabique = new ParedTab(positionsx[i],positionsy[i]);
      tabiques.push(tabique);

      }
    }
    for (var i = 0; i <5; i++) {

      tabiques[i].display();
    }
  } else {
    var tabique = new ParedTab(726,200) ;
    tabiques.push(tabique);
  }
}

$('.force').on('click', function () {
  Body.applyForce( fruit, {x: fruit.position.x, y: fruit.position.y}, {x: 0.05, y: 0});
});


function drop()
{if (boton==="inutilizado"){
  rope.break();
  fruit_con.dettach();
  fruit_con = null;
  boton = "utilizado";
}
  }
  