# Liquid Experiment - part 4 - mover.js

```js
var Mover = function (_x, _y, _vx, _vy, _ax, _ay, mass) {

    this.location = createVector(_x, _y);
    this.velocity = createVector(_vx, _vy);
    this.acceleration = createVector(_ax, _ay);
    this.mass = mass;


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
        ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
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
    };
}

```
