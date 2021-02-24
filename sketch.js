function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 0, 150);

  //Circle
  fill(100, 100, 0, 140) // transparency is 140
  strokeWeight(2); // strokeWeight causes the line to be thicker
  ellipseMode(CORNER); //puts the circle in the corner
  ellipse(300, 200, 500, 500);

  //Rectangle 
  fill(150) // GreyScale
  strokeWeight(5);
  rect(150, 20, 300, 350);

  // This is for the line
  strokeWeight(10);
  strokeCap(PROJECT);
  line(400, 300, 300, 75);
  
  // Giant Dot
  strokeWeight(50);
  point(300, 200)
}
