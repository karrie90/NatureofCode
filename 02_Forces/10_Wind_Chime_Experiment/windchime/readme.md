# Wind Chime Experiment - windchime.js

```js
function WindChime(_xpos, _ypos, _windMag, _startAngle, _endAngle) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.windMag = _windMag;
    this.startAngle = _startAngle;
    this.endAngle = _endAngle;
    this.windVec = createVector();
    this.time = 1000;

    this.update = function () {

        this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
        this.windVec = p5.Vector.fromAngle(radians(this.windDir));
        this.windVec.mult(this.windMag);

        this.time += 0.05;
    }

    this.display = function () {

        push();
        translate(this.xpos, this.ypos);
        scale(0.4, 0.4);

        fill(0);
        noStroke();
        textSize(20);
        textAlign(CENTER);
        text("Magnitude:" + this.windMag, 0, 120);
        this.string = str(this.windVec.heading() * 180 / PI);

        text("Wind Direction:" + this.string.substr(0, 6), 0, 150);

        stroke(0);
        strokeWeight(4);
        fill(255);

        //push();
        //rectMode(CENTER);

        ellipse(0, 0, 150, 150);
        rotate(this.windVec.heading());

        //pop();
        line(-65, 0, 65, 0);

        fill(0);
        triangle(40, -15, 65, 0, 40, 15);
        pop();

        //rect(0, 0 , 100, 100);
    }
}
```
