
var car, wall ;
var speed, weight ;

function setup() {
  createCanvas(1200,400);
  car=createSprite(50 ,200 , 50 ,50 );
  car.vrlocityX=speed;
  wall=createSprite(1500, 200 , 60, height/2);
  wall.shapecolor=color(80,80,80);
  speed=random(50,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(wall.width+car.width)/2){
   car.velocityX=0;
   var deformation=(0.5*weight*speed*speed)/25509;
   if (deformation>180)
   {
    car.shapecolor=color(250,0,0)
   }

   if (deformation<180 && deformation > 180) {
    car.shapecolor=color(230,230,0)
   }

   if (deformation<100){
    car.shapecolor=color(0,225,0)
   }
  }
  drawSprites();
}