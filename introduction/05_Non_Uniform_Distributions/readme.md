[Introduction](../)
# Uniform Distribution of Numbers
The first section reminds the same as the previous codes. It is only went we come down to the function walker that our code beings to change.

The below changes that have been made we removed the array and setup and if else function

```js
var walker;

function setup() {
    createCanvas(640, 320);
    background(127);
    walker = new Walker();
}

function draw() {
  walker.render();
  walker.step();
}

function Walker() {
  this.x = width / 2;
  this.y = height /2;

  this.render = function (){
    stroke(0);
    point(this.x, this.y);
  };

this.step = function () {
  var choice = floor(random(4));
  var r = random (1);
    //A 40% of moving to the right;
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
        this.x--;
    } else if (r < 0.8) {
        this.y++;
    } else {
        this.y--;
    }
    this.x = constrain(this.x, 0, width-1);
    this.y = constrain(this.y, 0, height-1);
  };

```

<img src ="img/uniform.gif" />
