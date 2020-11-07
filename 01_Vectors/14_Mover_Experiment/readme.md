# Mover Experiment

1. [mover.js](mover/)

```js
var movers = [];

function setup(){
     createCanvas(600, 600);

    for (var i = 0; i < 20; i++) {
     movers[i] = new Mover();
    }
}
```
```js
function draw(){
        noStroke();
        background(255);
    for (var i = 0; i < 20; i++) {
        movers[i].render();
        movers[i].update();
        movers[i].checkEdge();
   }  
}
```
