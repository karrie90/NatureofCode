# Wave

```js
var angle = 0;
var angleVel = 0.2;

function setup() {
  createCanvas(640, 360);
  background(51);
  stroke(255);
  strokeWeight(2);
  noFill();

  beginShape();
  for (var x = 0; x <= width; x += 5) {
    var y = map(sin(angle), -1, 1, 0, height);
    vertex(x, y);
    angle += angleVel;
  }
  endShape();
}
```
<img src ="img/wave.png"/>
