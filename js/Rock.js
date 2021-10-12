class Rock{
    constructor() {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic: false
        }
        this.rock = loadImage("rock.png");
        this.body = Bodies.circle(50,10,40,options);
        this.width = 40;
        this.height = 40;
        World.add(world, this.body);
    }
    display(){
        push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    image(this.rock, 0, 0, this.width, this.height);
    //ellipse(0,0, this.width, this.height);
    pop();
    }
    

    
}