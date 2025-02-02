// player 

var p1X= 300;
var p1Y= 475;
var pWidth = 50;
var pHeight= 30;
var pSpeed= 3;

// rounders
var a1X = 50;
var a1Y = 150;
var aWidth=40;
var aHeight= 40;
//first line
var a2X = 110;
var a2Y = 150;
var a3X = 170;
var a3Y = 150;
var a4X = 230;
var a4Y = 150;
var a5X = 290;
var a5Y = 150;
var a6X = 350;
var a6Y = 150;
var a7X = 410;
var a7Y = 150;
var a8X = 470;
var a8Y = 150;
var a9X = 530;
var a9Y = 150;

//second line
var a10X = 50;
var a10Y = 210;
var a11X = 110;
var a11Y = 210;
var a12X = 170;
var a12Y = 210;
var a13X = 230;
var a13Y = 210;
var a14X = 290;
var a14Y = 210;
var a15X = 350;
var a15Y = 210;
var a16X = 410;
var a16Y = 210;
var a17X = 470;
var a17Y = 210;
var a18X = 530;
var a18Y = 210;


//rounders bullets
var m1X = 100;
var m1Y = 400;
var m1Size= 50;
var m2X = 300;
var m2Y = 400;
var m2Size= 50;
var m3X = 500;
var m3Y = 400;
var m3Size= 50;



//rocket bullets
var r1X= p1X;
var r1Y = p1Y;
var r1Position = 0;
var rWidth = 7;
var rHeight = 20;
var rSpeed=5;
var fire= false;

//scoreboard
var score=0;
//levels
var stage= 0;
// stage 0 = tittleScreen
// stage 1 =game
// stage 2 = win
// stage 3 = lose



var totalTime;
var screenTime;
var gameTime;
var timeLimit= 60; 

// font
var tittleFont;
var bodyFont;
//sounds
var fireSound;
var explosionSound;
var backgroundMusic;


function setup() {
  createCanvas(600,500);
  
  rectMode(CENTER);
  
  textAlign(CENTER);
  
  //bg audio
  backgroundMusic.play();
}



function draw(){
  
  // start timmer
  totalTime = millis();
  
  if (stage == 0){
    screen();
  }
  
  
  if (stage == 1){
  game();
 }
  
  if(stage ==2 ){
    win();
  }
  
  if(stage ==3 ){
    lose();
  }
  
  
 // starts the game when screen is pressed 
  if (mouseIsPressed == true){
    stage= 1;
  }
  
  
}


function screen(){
  // start time
  screenTime = totalTime;
  
  
  background('#fff');
  
  //border
  stroke(0, 162, 255);
  noFill();
  strokeWeight(10);
  rect(width/2, height/2, width, height)
 
  //scoreboard
  noStroke();
  
  // tittle screen introduction
  fill(255, 132, 0);// orange
  textSize(25);
  textFont(tittleFont);
  text ('BATTLE OF THE SHAPES', width/2 , 100)
 
  
  textSize(20);
  textFont(tittleFont);
  text ('HOW TO PLAY', width/2 , 220)
  
  textSize(15);
  textFont(bodyFont);
  text('Press  <  and  >  arrows to move', width/2 , 290)
  text('Press   z   to launch rockets', width/2 , 330)
  text('Destroy all Rounders WIN!!!', width/2 , 370)
  text('Click screen to begin', width/2 , 440)
  
}

// screen when you win 
function win(){
  background('#fff');
  
  //border
  stroke(0, 162, 255);
  noFill();
  strokeWeight(10);
  rect(width/2, height/2, width, height)
 
  //scoreboard
  noStroke();
  
  fill(255, 132, 0);
  textSize(45);
  textFont(tittleFont);
  text ('VICTORY!!!', width/2 , 250)
 
  
  textSize(20);
  textFont(bodyFont);
  text ('Refresh to play again', width/2 , 400)
  
}

// screen when you lose 
function lose(){
  background(255,0,0);
  
  //border
  stroke(0, 162, 255);
  noFill();
  strokeWeight(10);
  rect(width/2, height/2, width, height)
 
  //scoreboard
  noStroke();
  
  fill(255, 132, 0);
  textSize(45);
  textFont(tittleFont);
  text ('YOU LOSE', width/2 , 250)
 
  
  textSize(20);
  textFont(bodyFont);
  text ('Refresh to play again', width/2 , 400)
  
}





//the game 

function game() {
  
  
  
 
  
  
  keyPressed();
  keyTyped();
  
  
  background('#ffff');
  
  //border
  stroke(0, 162, 255);
  
  noFill();
  strokeWeight(10);
  rect(width/2, height/2, width, height)
 
  //scoreboard
  noStroke();
  fill('#BD68F566');
  rect(width/2, 25, width,50);
  
  // my player
  noStroke();
  fill (0,255,0);
  rect( p1X, p1Y, pWidth, pHeight);
  
  
  // rounders
  
  fill(255, 132, 0);
  ellipse(a1X, a1Y, aWidth, aHeight);
  ellipse(a2X, a2Y, aWidth, aHeight);
  ellipse(a3X, a3Y, aWidth, aHeight);
  ellipse(a4X, a4Y, aWidth, aHeight);
  ellipse(a5X, a5Y, aWidth, aHeight);
  ellipse(a6X, a6Y, aWidth, aHeight);
  ellipse(a7X, a7Y, aWidth, aHeight);
  ellipse(a8X, a8Y, aWidth, aHeight);
  ellipse(a9X, a9Y, aWidth, aHeight);
  ellipse(a10X, a10Y, aWidth, aHeight);
  ellipse(a11X, a11Y, aWidth, aHeight);
  ellipse(a12X, a12Y, aWidth, aHeight);
  ellipse(a13X, a13Y, aWidth, aHeight);
  ellipse(a14X, a14Y, aWidth, aHeight);
  ellipse(a15X, a15Y, aWidth, aHeight);
  ellipse(a16X, a16Y, aWidth, aHeight);
  ellipse(a17X, a17Y, aWidth, aHeight);
  ellipse(a18X, a18Y, aWidth, aHeight);
  
  

  
  rockets();
  
  
  // crashing between rocket and rounders
 rounders();
  
  //bullet function 
  rounderBullets();
  
 /// start game time 
  screenTime = screenTime;
  gameTime = int((totalTime - screenTime)/1000);

  
  //score bar
  fill(0);
  textSize(25);
  textFont(tittleFont);
  text('Score:', 90, 40);
  textFont(bodyFont);
  textSize(25);
  text(score,180, 35);
  
  // timer
  textSize(25);
  textFont(tittleFont);
  text('Time:', 500, 40);
  textFont(bodyFont);
  textSize(25);
  text(timeLimit-gameTime,570, 35);
  

if (score>=18){
  stage = 2;
  }
  
  
  if (gameTime >= timeLimit){
    stage = 3 ;
    
  }
}






// rockets
function rockets(){
  
  //my rocket
  
  fill(26, 175, 255);
  rect(r1X, r1Y, rWidth, rHeight);
  
  
  //fire rockets
  if (fire == true && r1Position == 0){
    r1Position = 1;
  }
  
  
  if (r1Position == 1){
    r1X = r1X;
    r1Y = r1Y - rSpeed;
  
    if (r1Y <= 0 ){
      r1Position = 2;
    }
  }
  
  else{
    r1Y= p1Y;
    r1X=p1X;
  }
  
  
  
  // reload
   if(r1Position == 2){
     r1Y = p1Y;
     r1X = p1X;
     r1Position=0;
   }
}




// all the rounders to function each when hit 

function rounders(){
  if (r1X >= a1X-aWidth/2 && r1X <= a1X+aWidth/2 && r1Y>= a1Y-aHeight/2 && r1Y <=a1Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a1X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a2X-aWidth/2 && r1X <= a2X+aWidth/2 && r1Y>= a2Y-aHeight/2 && r1Y <=a2Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a2X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a3X-aWidth/2 && r1X <= a3X+aWidth/2 && r1Y>= a3Y-aHeight/2 && r1Y <=a3Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a3X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a4X-aWidth/2 && r1X <= a4X+aWidth/2 && r1Y>= a4Y-aHeight/2 && r1Y <=a4Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a4X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a5X-aWidth/2 && r1X <= a5X+aWidth/2 && r1Y>= a5Y-aHeight/2 && r1Y <=a5Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a5X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a6X-aWidth/2 && r1X <= a6X+aWidth/2 && r1Y>= a6Y-aHeight/2 && r1Y <=a6Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a6X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a7X-aWidth/2 && r1X <= a7X+aWidth/2 && r1Y>= a7Y-aHeight/2 && r1Y <=a7Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a7X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a8X-aWidth/2 && r1X <= a8X+aWidth/2 && r1Y>= a8Y-aHeight/2 && r1Y <=a8Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a8X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a9X-aWidth/2 && r1X <= a9X+aWidth/2 && r1Y>= a9Y-aHeight/2 && r1Y <=a9Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a9X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a10X-aWidth/2 && r1X <= a10X+aWidth/2 && r1Y>= a10Y-aHeight/2 && r1Y <=a10Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a10X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a11X-aWidth/2 && r1X <= a11X+aWidth/2 && r1Y>= a11Y-aHeight/2 && r1Y <=a11Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a11X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a12X-aWidth/2 && r1X <= a12X+aWidth/2 && r1Y>= a12Y-aHeight/2 && r1Y <=a12Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a12X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a13X-aWidth/2 && r1X <= a13X+aWidth/2 && r1Y>= a13Y-aHeight/2 && r1Y <=a13Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a13X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a14X-aWidth/2 && r1X <= a14X+aWidth/2 && r1Y>= a14Y-aHeight/2 && r1Y <=a14Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a14X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a15X-aWidth/2 && r1X <= a15X+aWidth/2 && r1Y>= a15Y-aHeight/2 && r1Y <=a15Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a15X = -1000;// reload rocket
    r1Position= 2;
    }
  
  if (r1X >= a16X-aWidth/2 && r1X <= a16X+aWidth/2 && r1Y>= a16Y-aHeight/2 && r1Y <=a16Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a16X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a17X-aWidth/2 && r1X <= a17X+aWidth/2 && r1Y>= a17Y-aHeight/2 && r1Y <=a17Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a17X = -1000;// reload rocket
    r1Position= 2;
  }
  
  if (r1X >= a18X-aWidth/2 && r1X <= a18X+aWidth/2 && r1Y>= a18Y-aHeight/2 && r1Y <=a18Y + aHeight/2){
    //rocket hit rounders
    explosionSound.play();
    score = score+1;// adding points
    a18X = -1000;// reload rocket
    r1Position= 2;
  }
}




function rounderBullets(){
   fill(64, 52, 31)
   rect(m1X, m1Y, m1Size, m1Size);
   rect(m2X, m2Y, m2Size, m2Size);
   rect(m3X, m3Y, m3Size, m3Size);
  
  
  // bullet 1
  if (r1X >= m1X - m1Size/2 && r1X <= m1X + m1Size/2 && r1Y >= m1Y - m1Size/2 && r1Y <= m1Y+m1Size/2){
    if (m1Size >= 20){
      m1Size = m1Size-10;
      r1Position = 2 ;
      
    }
    else{
      m1X = -1000 ;
      r1Position =2;
      
    }
 }
  
  //bullet 2
  if (r1X >= m2X - m2Size/2 && r1X <= m2X + m1Size/2 && r1Y >= m2Y - m1Size/2 && r1Y <= m2Y+m2Size/2){
    if (m2Size >= 20){
      m2Size = m2Size-10;
      r1Position = 2 ;
      
    }
    else{
      m2X = -1000 ;
      r1Position =2;
      
    }
 }
  
  //bullet 3
  
  if (r1X >= m3X - m3Size/2 && r1X <= m3X + m3Size/2 && r1Y >= m3Y - m3Size/2 && r1Y <= m3Y+m3Size/2){
    if (m3Size >= 20){
      m3Size = m3Size-10;
      r1Position = 2 ;
      
    }
    else{
      m3X = -1000 ;
      r1Position =2;
      
    }
 }
}










//move the player
function keyPressed(){
  if(keyCode== LEFT_ARROW && keyIsPressed){
    p1X= p1X-pSpeed;
  }

  if(keyCode== RIGHT_ARROW && keyIsPressed){
    p1X= p1X+pSpeed;
  }
  
}


function keyTyped(){
  
  
   if (key == 'z' && keyIsPressed ){
     fire = true;
     fireSound.play();
   }
  else {
    fire= false;
  }
}








function preload(){

// font
  tittleFont= loadFont('PressStart2P-Regular.ttf')
  bodyFont= loadFont('ChakraPetch-Medium.ttf')
//sounds
  fireSound= loadSound('shoot02wav-14562.mp3')
  explosionSound=loadSound('low-impactwav-14905.mp3')
  backgroundMusic=  loadSound('8bit-music-for-game-68698.mp3')
}