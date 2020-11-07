var movers = [];
var liquid;

function setup() {
  createCanvas(640, 360);
  reset();
  liquid = new Liquid(0, height/2, width, height/2, 0.1);
}

function draw() {
  background(127);

  liquid.display();

  for (var i = 0; i < movers.length; i++){
    if (liquid.contains(movers[i])){
      var dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }
    var gravity = createVector(0, 0.1*movers[i].mass);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
