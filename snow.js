class Snow{
    constructor(x,y,r){
        var options= {
            isStatic:false,
            restitution:0,
            friction:0.01
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}