let angle=45;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  translate (200,200);
  background(255);
  strokeWeight (1);
  

  rotate(angle);
  ellipse(0, 0, 100, 00);
  rotate(angle);
  ellipse(0, 0, 100, 00);  
  rotate(angle);
  ellipse(0, 0, 100, 00);
  rotate(angle);
  ellipse(0, 0, 100, 00);
  rotate(angle);
  ellipse(0, 0, 100, 00);
  rotate(angle);
  ellipse(0, 0, 100, 00);  
  rotate(angle);
  ellipse(0, 0, 100, 00);
  rotate(angle);
  ellipse(0, 0, 100, 00);
 
  
  angle +=0.1
}
