class Ground{
    constructor(x,y,width,height){
        var optio = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, optio);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    };
