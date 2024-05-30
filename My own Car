let stars=[];

function setup() {
  createCanvas(500, 400);
  
  for (let i = 0; i<100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background("#8148E4");//background color
  //starting my loop for the stars
  for(let i = 0;i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
  }
  
}

// define class for drawing stars

class Star {
     
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 5);
    this.speed = random(1, 3);
  }

// the shape of the star 
  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
} 

  //moves the stars and resets star position when it goes off screen
  update() {
    this.x -= this.speed;
    if(this.x < -this.size) {
      this.x=width + this.size;
      this.y=random (height);
    
    }

  
  // wheels 
  fill ("#2E3730");
    
  // ellipse ( x, y, width, height)
  ellipse ( 155, 250, 50, 50);
  ellipse ( 330, 250, 50, 50);
  ellipse ( 155, 250, 20, 20);
  ellipse ( 330, 250, 20, 20);
  
  
  
  
  
  
  //roof
  fill("#0B661E");
  triangle(250, 200, 250, 150, 340, 200); 
  fill("#754040");
  triangle(255, 195, 255, 159, 328, 197); 
  
  
  // headlights
  fill ( "#F3C742");
  rect ( 95, 215, 30, 15);
  rect ( 355, 218, 30, 20);
  
  //taillights
  fill ( 255, 0, 0);
 rect ( 95, 225, 30, 15);
  rect ( 355, 230, 30, 10);
  
  //body 
  fill("#0B661E");
  rect(100, 200, 280, 50);
  
  //roof
  fill("#0B661E");
  rect ( 190, 150, 60, 50);
  fill("#754040");
   rect ( 199, 157, 50, 38);
  
  //door handle
  fill("#050505");
  rect ( 195, 205, 27, 5);
    
  }
  
}
