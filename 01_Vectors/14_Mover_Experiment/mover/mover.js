function Mover(){
    this.location = createVector(Math.floor(random(width)),
            Math.floor(random(height)));

    this.acceleration = createVector(0.2, 0.3);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(2);

    this.velocity = createVector(2, 5);

    this.render = function () {
        ellipse(this.location.x, this.location.y, 5, 5);
    }

    this.update = function(){
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);

        this.mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(this.mouse, this.location);
        this.acceleration.normalize();
    }
    this.checkEdge = function(){
        if(this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
};
