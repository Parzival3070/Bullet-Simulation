var bullet, speed, weight;
var wall, thickness;
var damage, speed;

var PLAY = 1;
var END = 0;
var gamestate = PLAY;


function setup() {

  createCanvas(windowWidth, windowHeight);

  background('black');

  bullet = createSprite(windowWidth/16, windowHeight/2, windowWidth/16, windowHeight/30);
  bullet.shapeColor = 'white';

  thickness = Math.round(random(22, 83))
  wall = createSprite(windowWidth - windowWidth/16, windowHeight/2, thickness, windowHeight);
  wall.shapeColor = 'grey';

}


function draw() {

  background('black');

  if (gamestate === PLAY) {

    if (keyDown('space')) {

    bullet.velocityX = Math.round(random(223, 321));
    speed = Math.round(random(223, 321));

    weight = Math.round(random(30, 52));
    damage = ((0.5 * weight * speed^2)/thickness^3);
    console.log(damage);

  }

  //console.log(bullet.velocityX);
  //console.log(weight);

}

  if (bullet.collide(wall)) {

    gamestate = END;
    

  }

  if (gamestate === END) {

    bullet.velocityX = 0;

    stroke('white');
    fill('white');
    textSize(50);
    text('Score:  ' + damage, windowWidth/2-100, windowHeight/2);

    if (damage > 10) {

      wall.shapeColor = 'red';

    }

    if (damage < 10) {

      wall.shapeColor = 'green';
 
    }

  }

  drawSprites();  
 
}