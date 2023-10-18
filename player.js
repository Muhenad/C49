class Player{
    constructor(x,y,health){
    this.x=x
    this.y=y
    // this.img=img
    this.health=health
    this.image=loadImage("playerimage.png")  
    var man_behaviour={
        resitution:0.5,
        mass:2,
        friction:0.5
    }
    
this.man=Bodies.circle(x,y,50,man_behaviour)
Matter.World.add(world,this.man)
 
    }
    
    show(){
        var angle=this.man.angle
        push()
        rectMode(CENTER)
            image(this.image,this.man.position.x,this.man.position.y,200,200)
        pop()
    }
    
    move(){


    this.man.position.x=mouseX
    this.man.position.y=mouseY

}
    
    }




// class Player{
// constructor(x,y,color){


// var man_behaviour={
//     'resitution':1,
//     'friction':0.3,
//         'density':1.0
  
// }


// this.man=Bodies.circle(x,y,50,man_behaviour)
// Matter.World.add(world,this.man)
// this.image=loadImage("playerimage.png")

// this.x=x
// this.y=y
// this.color=color
// // this.img=img
// // this.health=health

// }

// show(){
//     var angle=this.man.angle
//     push()
//     ellipseMode(CENTER)
//     fill(this.color)
//     // image(this.image,this.man.position.x,this.man.position.y,200,200)
//     image(this.image,this.man.position.x,this.man.position.y,200,200)
//     pop()
// }


// move(){

//     if(keyDown("right_arrow")){
//         this.man.position.x += 1
//         console.log("right")
//     }
//     if(keyDown("left_arrow")){
//         this.man.position.x -=1
//         console.log("left")

//     }
// }



// }

