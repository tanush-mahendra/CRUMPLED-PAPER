class Box{
  constructor(x,y){
      var options={
         isStatic:true,
          density:1.2,
          friction:1.0,
      }
      this.body=Bodies.rectangle(x,y,10,80,[options]);
      World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    rectMode(CENTER);
    rect(x,y,10,80,);
    this.body.shapColor="green";
  }
}