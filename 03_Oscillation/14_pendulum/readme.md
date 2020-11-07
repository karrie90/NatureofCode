# Pendulum

1. [Pendulum](pemdulum/)

```js
var p;

function setup() {
  createCanvas(640, 360);
  // Make a new Pendulum with an origin position and armlength
  p = new Pendulum(createVector(width / 2, 0), 175);

}
```

```js
function draw() {
  background(51);
  p.go();
}

function mousePressed() {
  p.clicked(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}

```
<img src ="img/pendul.gif"/>