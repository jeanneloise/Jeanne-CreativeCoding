var img, x, y;
function preload() {
img = loadImage("Image 59.jpg");
}

function setup() {
createCanvas (700, 700);
background(0);
noStroke();
}

function draw() {
background(0);
x = mouseX;
y = mouseY;
image( img, 0, 0);
var c = get(x, y);
fill(c);
rect(x, y, 30, 80);
}