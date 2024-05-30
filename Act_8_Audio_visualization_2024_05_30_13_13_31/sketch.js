let mic; 
let vol;

function setup(){
  createCanvas( 800,800);
  colorMode(HSB);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  
  //get volume
  vol = mic.getLevel();
  
  
  background ('#DA582F');
  
//making the face 
  strokeWeight (8);
  fill(' #009688');
  //body 
  rect(width/7.8, height/2, 600);
  
  //head
    fill(' #929DDF');
  circle(width/2, height/3, 500);
  
  
// the eyes
  fill(0);
  circle(width/3.2 + 50, height/2 - 200, 50 + vol*300);
  circle(width/2 + 100, height/2 - 200, 50 + vol*300);
  
//the mouth
  arc (width/2, height/3, width/4, 100 + vol*24000, 0, PI, CHORD);
}

  


 