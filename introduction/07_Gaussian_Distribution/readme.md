[Introduction](../)

# Gaussian Distribution
The code below is showing how we are taking the standard Deviation and
multiplying it by the mean we have set the SD to xsd = 100 and the ysd = 40.

With the first part of the code we are getting the Gaussian random number by using
var xloc and the yloc to randomGaussian();.  As perivous stated the xsd and ysd is setting
is setting the standard deviation.

The mean value which is setting the middle of the screen along the x-axis.

```js
function setup() {
    createCanvas(640, 360);
    background(127);
}

function draw() {
  var xloc = randomGaussian();
  var yloc = randomGaussian();

  var xsd = 100;
  var ysd = 40;

var xMean = width / 2;
var yMean = height / 2;

xloc = (xloc * xsd) + xMean;
yloc = (yloc * ysd) + yMean;

var rColor = 233;

fill(rColor, 50);
noStroke();
ellipse(xloc, yloc, 16, 16);
}
```
The xMean and yMean is the scaling of the Gaussian random number, by using the
standard deviation and the mean.  The final line draws the circles in the position.

<img src ="img/gaussian.gif" />
