var mouse,mouse_img,mouse_happy,mouse_taunting
var cat,cat_img,cat_happy,cat_moving;
var garden

function preload() {
    //load the images here
 mouse_happy= loadAnimation("images/mouse1.png");
 mouse_img= loadAnimation("images/mouse2.png");
 mouse_taunting= loadAnimation("images/mouse3.png");
 cat_happy= loadAnimation("images/cat4.png");
 cat_img= loadAnimation("images/cat1.png");
 cat_moving= loadAnimation("images/cat2.png");
 garden=loadAnimation("images/garden.png");
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(800,400,20,20);
cat.addAnimation("cat",cat_img);
cat.scale=0.2;

mouse = createSprite(200,400,20,20);
mouse.addAnimation("mouse",mouse_img);
mouse.scale=0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < cat.width/2 - mouse.width/2 );
{
    console.log("entered the if condition");
    cat.addAnimation("cathappy",cat_happy);
    mouse.addAnimation("mousehappy",mouse_happy)
    cat.changeAnimation("cathappy");
    mouse.changeAnimation("mousehappy");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===RIGHT_ARROW)
  {   
      mouse.addAnimation("mousetaunt",mouse_taunting);
      mouse.changeAnimation("mousetaunt");
  }

  if(keyCode===LEFT_ARROW)
  {
    cat.addAnimation("catmoving",cat_moving)
    cat.changeAnimation("catmoving");
      cat.velocityX=-2;
  }
}
