# Liquid Experiment - liquid.js

```js
var Liquid = function (x, y, w, h, c) {

    this.location = createVector(x, y);
    this.width =  w;
    this.height = h;
    this.coefdrag = c;

    this.display = function () {
        //pick a brush
        stroke(150);
        strokeWeight(2);
        fill(255, 0, 0, 50);

        //And draw an ellipse at the new location vector points
        rect(this.location.x, this.location.y, this.width, this.height);
    }
}
```
