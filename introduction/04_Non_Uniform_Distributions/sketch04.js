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
