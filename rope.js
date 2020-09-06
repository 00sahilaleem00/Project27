class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var constraintoptions = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 150,
            stiffness: 1,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        this.chain = Constraint.create(constraintoptions);
        World.add(world,this.chain);

    }

    display(){
        var Anchor1X = this.chain.bodyA.position.x;
        var Anchor1Y = this.chain.bodyA.position.y;

        var Anchor2X = this.chain.bodyB.position.x + this.offsetX;
        var Anchor2Y = this.chain.bodyB.position.y + this.offsetY;

        strokeWeight(2);
        stroke("black");
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}