class Paper{
    constructor(){
        var options={
            restitution:2.0,
            density:1.2,
            friction:0.8,
        }
        this.body=Matter.Body.circle(85,85,3.5,[options],[0]);
        World.add(world,this.body);
    }

    display(){
       keypressed();
        var pos=this.body.position;
       this.body.shapeColor="red";
       circle(85,85,5.5); 
    }
}



