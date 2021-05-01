class Sand{

    constructor(x,y,r){
        var option={
            'density': 1,
            'friction' : 5,
            'restitution' : 0.3
        };
        this.x = x
        this.r = r
        this.y = y
        
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option);
        World.add(world,this.body)
    }
    
    display()
    {
        var sandpos=this.body.position;
        push();
        translate(sandpos.x,sandpos.y);
        strokeWeight(2)
        stroke("black")
        fill("yellow");
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();     
    }
    
    
    }
