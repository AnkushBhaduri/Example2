var mario, mario_running, mario_collided;
var bg, bgImage, ground;
var bricksGroup, brickImage;
function preload(){
    bgImage=loadImage("images/bgnew.jpg");
    mario_running=loadAnimation("images/mar1.png", "images/mar2.png", "images/mar3.png", "images/mar4.png", "images/mar5.png", "images/mar6.png", "images/mar7.png");
brickImage=loadImage("images/brick.png")
}

function setup() {
createCanvas(1000, 600);
 bg=createSprite(580,300);
 bg.addImage(bgImage);
mario=createSprite(200,585,20,50);
mario.addAnimation("running", mario_running);
mario.scale=0.3;
bg.scale=0.5;
bg.velocityX= -6;
ground=createSprite(200,585,1500,10);
ground.visible=false;
bricksGroup= new Group();
}

function draw() {
    if(bg.x<100){
        bg.x=bg.width/4;
    }
if (mario.x<200){
    mario.x=200;
}
if(mario.y<50){
    mario.y=50
}
if(keyDown("space")){
    mario.velocityY= -16;

}
mario.velocityY+= 0.5;
generateBricks ();

mario.collide(ground);

/*for (var i=0; i< (bricksGroup).length; i++){
    var temp= (bricksGroup).get(i);
    if(temp.isTouching(mario)){
        mario.collide(temp);
    }
}*/
drawSprites()
}
function generateBricks(){
    if(frameCount%50===0){
var brick=createSprite(1200,120,40,10);
console.log(frameCount)
brick.y=random(50,450);
brick.addImage(brickImage);
brick.scale= 0.5;
brick.velocityX= -5;
brick.lifetime=250;
bricksGroup.add(brick)
    }
}