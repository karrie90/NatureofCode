# Pointing in Direction

1. [mover](mover/)

```js
var mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}
```

```js
function draw() {
  background(50);
  mover.update();
  mover.checkEdges();
  mover.display();
}

```
<img src ="img/mouse.gif"/>
