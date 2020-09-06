class Bob {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,20,options);

        World.add(world,this.body);
        this.body.position.x = x;
        this.body.position.y = y;
    }
    display(){
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,40,40);
    }
}