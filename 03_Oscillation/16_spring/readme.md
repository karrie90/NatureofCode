# Spring

1. [bob](bob/)
2. [spring](spring/)

```js
// Mover object
var bob;

// Spring object
var spring;

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  // Create objects at starting position
  // Note third argument in Spring constructor is "rest length"
  spring = new Spring(width / 2, 10, 100);
  bob = new Bob(width / 2, 100);
}
```

```js
function draw() {

  background(51);

  // Apply a gravity force to the bob
  var gravity = createVector(0, 2);
  bob.applyForce(gravity);

  // Connect the bob to the spring (this calculates the force)
  spring.connect(bob);
  // Constrain spring distance between min and max
  spring.constrainLength(bob, 30, 200);

  // Update bob
  bob.update();

  // Draw everything
  spring.displayLine(bob); // Draw a line between spring and bob
  bob.display();
  spring.display();
}
```

```js
function mousePressed() {
  bob.handleClick(mouseX, mouseY);
}

function mouseDragged() {
  bob.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  bob.stopDragging();
}
```
<img src ="img/spring.gif"/>
