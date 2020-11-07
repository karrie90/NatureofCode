var ball;
var liquid;

function setup() {
  createCanvas(640, 640);
  //_x, _y, _vx, _vy, _ax, _ay, mass
  ball = new Mover(200, 200, 2, 2, 0, 0, 5);

  //(x, y, w, h, c)
  liquid = new Liquid(50, 50, 200, 200, 50);
}

function draw() {
  background(127);

    liquid.display();
    ball.update();
    ball.display();
    ball.checkEdges();
}
