var Engine = Matter.Engine
var Body = Matter.Body
var Bodies = Matter.Bodies
var World = Matter.World

var man_behaviour
var player1, engine, world, wall, randx, randy
var score=0
var diamondGroup

// diamonds,player,obstacles



function preload() {
    bgimg = loadImage("fighting_backround.jpg")
    diamondimg = loadImage("reward.png")
    playerimg=loadImage("playerimage.png")  

}

function setup() {
    createCanvas(800, 800)
    engine = Engine.create()
    world = engine.world

    wall = new Ground(width / 2, height - 30, width, 20)
    // player1 = new Player(100, 700, 200)
    player1 = createSprite(100,height-200)
player1.addImage(playerimg)
player1.scale=0.5

    diamondGroup=new Group

}

function draw() {
    background(bgimg)
 
    if(keyDown("right_arrow")){
        player1.x += 5
        console.log("right")
    }
    if(keyDown("left_arrow")){
        player1.x -=5
        console.log("left")

    }
    Appeardimaonds()


    for(var i=0;i<diamondGroup.length;i++){
        if(player1.isTouching(diamondGroup.get(i))){
    score +=1
    // diamondGroup.destroyEach()
    diamondGroup.get(i).remove()
        }
}


if(score>=2){
    textSize(100)
    fill("red")
text("GAME OVER",10,height/2)


}
    drawSprites()
textSize(40)
fill("red")
    text("SCORE :"+score,width/2,100)
}



function Appeardimaonds() {
    randx = Math.round(random(15, width - 20))
    randy = Math.round(random(200, height - 100))

    if (frameCount % 120 == 0) {
        diamond = createSprite(randx, randy)
        diamond.addImage(diamondimg)
        diamond.scale = 0.5
        diamondGroup.add(diamond)
        diamond.debut=true
        diamond.setCollider("circle",0,0,40)
    }
}


function move(){

    if(keyDown("right_arrow")){
        player1.x += 1
        console.log("right")
    }
    if(keyDown("left_arrow")){
        player1.x -=1
        console.log("left")

    }

    if(keyDown("up_arrow")){
        player1.y -=1
        console.log("up")

    }
    if(keyDown("down_arrow")){
        player1.y +=1
        console.log("down")

    }
}
