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

    this.calculateDrag = function (m){
        var speed = m.velocity.mag();
        var dragMagnitude = this.coefDrag * speed * speed;

        //Direction is inverse of velocity

        var dragForce = p5.Vector.mult(m.velocity,-1);

        //Scale according to magnitude
        //dragForce.setMag(dragMagnitude);
        dragForce.normalize();
        dragForce.mult(dragMagnitude);
        return dragForce;
    }
}
