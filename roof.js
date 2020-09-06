class Roof {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(width/2,50,600,20,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(width/2,50,600,20);
    }
}