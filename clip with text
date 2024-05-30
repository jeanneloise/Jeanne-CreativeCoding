function setup() {
  createCanvas(700, 700);
  background(120,10,250);
  
  cnv4 = createGraphics(width, height); 
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(100, 200, 200); 
  ctx2.clip();  
  cnv4.fill(500, 10,50);  
  cnv4.circle(200, 310, 80); 
  image(cnv4, 160,30); 
  

  
  
  cnv3 = createGraphics(width, height);
  cnv3.fill(200,300,130);  
  cnv3.rect(160,200,350, 250 );  // x , y, width and height 
  cnv3.erase();
  cnv3.textSize(50);
  cnv3.text('this is text', 230, 340); // txt, x, y
  image(cnv3, 20, 10); // putting the sub canvas inside the main canvas 
  
}


