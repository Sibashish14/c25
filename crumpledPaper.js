class crumpledPaper{
    constructor(){
        var options={
            restitution:1.5,
            friction:1.2,
            density:1.2
        }
        this.body = Bodies.rectangle(300,350,60,60,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop();
    }
}