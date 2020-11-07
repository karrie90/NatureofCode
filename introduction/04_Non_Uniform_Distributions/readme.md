[Introduction](../)
# Uniform Distribution of Numbers
What is the uniform of Distribution of numbers if the system has a certain number of outcomes, what is the possibility of the same number coming out twice.

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
```
The below code we are setting up an array called probArray, within the array we are assigning each one is set to a value (1, 1, 2, 3, 3) similarly to a dice what are they chances of getting the number 2.  The above outcome shows that we have a 40% chance of the outcome being 2.  

```js
function Walker() {
  this.x = width / 2;
  this.y = height / 2;

  this.render = function (){
    strokeWeight(4);
    point(this.x, this.y);
  };

this.step = function () {
    var probArray = [];
    probArray[0] = 1;
    probArray[1] = 1;
    probArray[2] = 2;
    probArray[3] = 3;
    probArray[4] = 3;

    var index = floor(random(probArray.length));
    var r = probArray[index];

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  };
}
```
<img src ="img/uniform.gif" />
