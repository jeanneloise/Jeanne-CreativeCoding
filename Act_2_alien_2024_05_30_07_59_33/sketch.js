function setup() {
  createCanvas(400, 400); 
  background('#063B1B'); 
}

function draw() {
  
  
  translate (width/2 , height/2);
    fill("#00FF65");
    stroke("000000");
    strokeWeight(4);
    beginShape();
    curveVertex(50, -100);
    curveVertex(-50,-100);
    curveVertex(-30,0);
    curveVertex(30,0);
    curveVertex(50,-100);
    curveVertex(-50, -100);
    endShape(CLOSE);

//make ray from alien
  fill(20,40,280, 20);
  stroke(240,260,240,20);
  strokeWeight(4);  triangle(0,-100,-200,200,200,200);
  
//draw head
fill(150,100,200);
  ellipse(-1,-115,120,130);
  
//left eye
fill(0);
ellipse(-25,-140,30,20);
  
//right eye
ellipse (25, -140, 30, 20);
  
//mouth
noFill();
stroke(2, 0, 0);
beginShape ();
vertex(-20,-110);
bezierVertex(-10,-100,10,-100, 20, -110);
endShape();

//atena
 fill(255, 0, 255);
 ellipse(0,-160, 10, 40);
 ellipse(0, -180, 20, 20);

}