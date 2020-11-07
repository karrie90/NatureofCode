# Vector Motion Velocity

1. [mover01.js](mover/)

```js
var mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover();  
}
```

```js
function draw() {
  background(51);

  mover.update();
  mover.checkEdges();
  mover.display();
}

```
<img src ="img/vectors.gif"/>
