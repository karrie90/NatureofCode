var angle = 0; //setting angle to zero
var aVelocity = 0; //
var aAcceleration= 0.001;

function setup() {
  createCanvas (640, 360); // Creating the canvas
}

function draw() {
  background(225); // The background of the canvas

  stroke(0); // setting the stroke to zero
  fill(175); // setting the fill to a gray

  translate(width/2, height/2);  //
  rotate(angle); // rotating by the angle that as been pre-sent above
  line(-50, 0, 50, 0); // the line that is being  drawn between the two ellipse
  ellipse(50, 0, 8, 8); // drawing the first circle
  ellipse(-50, 0, 8, 8); //drawing the second circle

  aVelocity = aVelocity + aAcceleration; // adding acceleration to velocity
  angle = angle + aVelocity; // taking the velocity and adding it to the angle
}
