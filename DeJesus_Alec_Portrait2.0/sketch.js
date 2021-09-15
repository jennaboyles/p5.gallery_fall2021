let r, g, b;

function setup() {
  createCanvas(600, 600);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255-r, 255-g, 255-b);
  noStroke();
  fill(0);
  ellipse(50, 50, 50);

  //head
  fill(250, 230, 192);
  rect(160, 120, 280, 300);
  rect(200, 120, 200, 330);
  //ears
  rect(130, 200, 345, 90);
  //neck
  rect(250, 400, 100, 100);

  //hair
  fill(0);
  rect(220, 60, 220, 100);
  rect(160, 90, 55, 70);
  //mole
  rect(190, 305, 6);

  //earring
  fill(255, 215, 38);
  rect(450, 280, 17, 30);

  //mouth
  fill(255);
  rect(210, 350, 185, 30);
  rect(235, 380, 135, 15);

  //eyes
  fill(255);
  rect(200, 200, 65, 80);
  rect(330, 200, 65, 80);
  //iris
  fill(0);
  rect(215, 215, 35, 50);
  rect(345, 215, 35, 50);

  //shirt
  fill(r, g, b);
  rect(100, 490, 400);
}

//mousepress for random colors
function mousePressed() {
  let d = dist(mouseX, mouseY, 50, 50);
  if (d < 20) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
