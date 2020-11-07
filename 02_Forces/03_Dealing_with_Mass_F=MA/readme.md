# Dealing with Mass F- ma

1. [mover](mover/)

This sketch we are incorporating mass by adding an instance variable to the mover class.  We will be drawing a circle with a radius of 10 this will show the mass of the object. Within this example movement of the small circles will fall faster then the bigger ones this is because of the mass of the circle small mass the faster it moves.

```js
var mover;

function setup() {
  createCanvas(640, 640);
  mover = new Mover();  
}
```

```js
function draw() {
  var wind = createVector(0.1, 0);
  var gravity = createVector(0, .05);

  background(255);

  mover.applyForce(wind);
  mover.applyForce(gravity);

  mover.checkEdges();
  mover.update();
  mover.display();
}
```

<img src ="img/mover.png"/>
