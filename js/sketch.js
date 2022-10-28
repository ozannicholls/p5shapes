//Setup function runs once at the start
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
}

//Draw function runs at 60fps in a continuous loop
function draw() {
    background(220);//greyscale for background

    fill(255, 255, 255);
    ellipse(300, 300, 400);
    fill(0, 0, 0)
    square(270, 270, 60);
}