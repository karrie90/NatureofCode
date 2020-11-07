var angle = 0; //setting angle to zero
var aVelocity = 0; //
var aAcceleration= 0.002;

function setup() {
  createCanvas (640, 480); // Creating the canvas
}

function draw() {
  background(220); // The background of the canvas

  stroke(0); // setting the stroke to zero
  fill(127); // setting the fill to a gray

  push();//push - saves the drawing style
  translate(width / 2, height / 2);  //
  rotate(angle); // rotating by the angle that as been pre-sent above
  line(-60, 0, 60, 0); // the line that is being  drawn between the two ellipse
  ellipse(60, 0, 16, 16); // drawing the first circle
  ellipse(-60, 0, 16, 16); //drawing the second circle
  pop(); // restores the the these setting

  aVelocity = aVelocity + aAcceleration; // adding acceleration to velocity
  aVelocity = constrain(aVelocity, 0, 0.1); // adding the constrain to slow it donw
  angle = angle + aVelocity; // taking the velocity and adding it to the angle
}
