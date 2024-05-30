let circleMask;
let myImage;

function setup() {
  createCanvas(400, 400);

  circleMask = createGraphics(128, 128);

  myImage = loadImage('pizza.jpg');
}

function draw() {
  background(255);

  circleMask.fill('rgba(0, 0, 0, 1)');

  circleMask.circle(64, 64, 158);

  myImage.mask(circleMask);

  image(myImage, 170 - 64, 200 - 64, 158, 138);
}