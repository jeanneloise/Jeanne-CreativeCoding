var myFont;
function preload(){
  myFont=loadFont('Danfo-Regular-VariableFont_ELSH.ttf');
}

function setup(){
  createCanvas(700,400);
  background('#80AAFF')
  textFont(myFont);
  textSize(56);
  text('Bath Spa University', 60, 190);
}