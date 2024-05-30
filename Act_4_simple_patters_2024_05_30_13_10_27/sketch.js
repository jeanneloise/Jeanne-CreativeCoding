function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  createCanvas(700, 700);
  background("#077A22");
  colorMode(HSB, 360, 100, 50, 245);
  rectMode(CENTER);
  palette = floor(random(5));
  frame = 5;
  numAcross = 8;
  size1 = (width - frame * 8) / numAcross;
  //noStroke();
  count = 60;
  // while (count < 1000) {
  //   getColor(floor(random(5)));
  //   fill(h, s, b, 255);
  //   rect(random(width), random(height), 30);
  //   count++;
  // }
  newCol = 0;

  for (x = frame; x < width - frame+1; x += size1) {
    for (y = frame; y < height - frame+1; y += size1) {
      col = floor(random(5));
      getColor(col);
      fill(h, s, b, 255);
      ellipse(x, y, size1);
      while (col == newCol) {
        newCol = floor(random(5));
      }
      getColor(newCol);
      fill(h, s, b, 255);
      rect (x, y, size1 * 0.85);
    }
  }
}

function getColor(col1) {
  h = int(table.get(palette, col1 * 3));
  s = int(table.get(palette, col1 * 3 + 1));
  b = int(table.get(palette, col1 * 3 + 2));
}
