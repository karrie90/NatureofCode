# Liquid Experiment - part 3 - liquid.js

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

    this.contains = function(m){
        return m.location.y > this.location.y && m.location.y <
        this.location.y + this.height && m.location.x > this.location.x <
        m.location.x < this.location.x + this.width;
    }
}
```
