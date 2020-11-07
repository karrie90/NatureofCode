# Dealing with Mass F- ma

You will see changes to the code the line this.mass = m with this line of code we can apply mass to force  There is also and new part introduced is the (m) this new Mover object with a defined mass. This is also used when it comes to drawing the circle.

```js
var Mover = function (m) {

    this.location = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = m;

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.display = function () {
        //pick a brush
        stroke(150);
        strokeWeight(2);
        fill(255, 0, 0, 50);

        //And draw an ellipse at the new location vector points
        ellipse(this.location.x, this.location.y, 30, 30);
    }
    this.checkEdges = function () {
        if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);
    }
}
```
