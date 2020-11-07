# Spring Array - Spring

```js
class Spring {

  // Constructor
  constructor(a, b, len) {
    this.a = a;
    this.b = b;
    this.len = len;
    this.k = 0.2;
  }

  // Calculate spring force
  update() {
    // Vector pointing from anchor to bob position
    let force = p5.Vector.sub(this.a.position, this.b.position);
    // What is distance
    let d = force.mag();

    // Stretch is difference between current distance and rest length
    let stretch = d - this.len;

    // Calculate force according to Hooke's Law
    // F = k * stretch
    force.normalize();
    force.mult(-1 * this.k * stretch);
    this.a.applyForce(force);
    force.mult(-1);
    this.b.applyForce(force);
  }

  display() {
    strokeWeight(2);
    stroke(0);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
  }
}
```
