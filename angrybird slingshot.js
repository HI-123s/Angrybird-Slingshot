class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA=null
    }

    display(){
       image(this.image,200,20)
       image(this.image2,175,15)
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB
            strokeWeight(15)
            stroke(48,22,8)
            line(pointA.x-10,pointA.y,pointB.x+30,pointB.y)
            line(pointA.x-10,pointA.y,pointB.x-10,pointB.y)
        }
    }
    }