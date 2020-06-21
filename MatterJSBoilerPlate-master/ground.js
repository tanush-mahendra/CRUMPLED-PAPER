class Ground{
    constructor(){
        var options={
            isStatic:true,
            density:1.4,
            friction:0.8,
        }
        this.body=Bodies.rect(400,570,30,800,[options]);
        World.add(world,this.body);       
    }
    display(){
        var pos=this.body.position;
        this.body.shapeColor="yellow";
        rect(400,570,30,800);
    }
}


