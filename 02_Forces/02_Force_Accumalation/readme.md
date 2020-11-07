# Force Accumalation

1. [mover](mover/)

The first part the setting up of the mover, and our setup of the canvas and mover has not changed, when it comes to draw we are adding the gravity

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
  var gravity = createVector(0, .01); //new line added

  background(255);

  mover.applyForce(wind);
  mover.applyForce(gravity); // new line added

  mover.checkEdges();
  mover.update();
  mover.display();
}
```
<img src ="img/force.gif"/>
