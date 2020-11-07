# Force Accumulation - mover.js

The below in relation to our mover has not changed much we are still taking Newton's second Law into account but we have some problems not coding problems but what happens if we want to have multiple forces.

If Force(wind) and Force(gravity) are applied more then once well unfortunately the code we used would not allow for that to happen what do we need to add so we can add a line of code this.acceleration.mult(0) so that force can acceleration for each force this is added to our update loop and reset the acceleratoin to zero.

```js
var Mover = function () {

    this.location = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0); // new code added
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
    this.applyForce = function (force) { // new code added
        this.acceleration = force;
    }
}

```
