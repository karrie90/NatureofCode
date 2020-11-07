var movers = [];

function setup(){
     createCanvas(600, 600);
     
    for (var i = 0; i < 20; i++) {
     movers[i] = new Mover();
    }
}

function draw(){
        noStroke();
        background(255);
    for (var i = 0; i < 20; i++) {
        movers[i].render();
        movers[i].update();
        movers[i].checkEdge();
   }  
}