class Ventana {
    constructor(x,y){
    this.speed = 0.05;
    this.x=x;
    this.y=y;
    rectMode(CENTER);
    this.body= Bodies.rectangle(this.x,this.y,120,99,{ isStatic:false });3
    this.image= loadImage("./sources/ventana.png");
    this.animation = [this.image];
    
    World.add(world,this.body);
    }
    
    
    display() {
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);
    
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,120,100);
        pop();
      }
    
    }