let red = (255, 204, 0);
let purple = (126, 62, 131, 242);
let s = "I <3 Billy Strings";
let shirtcolor = 0;
function setup() {
  createCanvas(700, 500);
  startColor = color(255, 255, 255);
  newColor = color(random(255), random(255), random(255));
  amt = 0;

  background(startColor);
}

function draw() {
  //color changing shirt
  if (mouseIsPressed) {
    shirtcolor = color(random(255), random(255), random(255));
  }

  //color fading background loop
  background(lerpColor(startColor, newColor, amt));
  amt += 0.01;
  if (amt >= 1) {
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255), random(255), random(255));
  }

  //hairwave
  fill("purple");
  strokeWeight(1);
  stroke("purple");
  beginShape();
  vertex(230, 200);
  bezierVertex(230, 200, 220, 230, 230, 260);
  bezierVertex(230, 260, 240, 290, 230, 320);
  bezierVertex(230, 320, 220, 350, 230, 380);
  bezierVertex(240, 380, 350, 400, 460, 380);
  bezierVertex(470, 380, 480, 350, 470, 320);
  bezierVertex(470, 320, 460, 290, 470, 260);
  bezierVertex(470, 260, 480, 230, 470, 200);
  endShape(close);

  //hair top
  stroke("purple");
  fill("purple");
  arc(350, 210, 241, 210, -PI, 0);

  //head
  noStroke();
  fill("#F1C27D");
  circle(350, 250, 170);

  //hair bangs
  fill("purple");
  strokeWeight(1);
  stroke("purple");

  //bangs - bottom right
  beginShape();
  vertex(320, 160);
  bezierVertex(320, 160, 320, 240, 440, 240);
  endShape();

  //bangs - top right
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 430, 140, 435, 240);
  endShape();

  //bangs - bottom left
  beginShape();
  vertex(320, 160);
  bezierVertex(320, 160, 320, 240, 260, 240);
  endShape();

  //bangs - top left
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 265, 165, 260, 240);
  endShape();

  noStroke();

  //neck
  fill("#F1C27D");
  quad(330, 310, 370, 310, 380, 370, 320, 370);

  //body
  fill(shirtcolor);
  quad(320, 370, 380, 370, 510, 430, 190, 430);
  rect(190, 430, 320, 70);

  //mouth
  fill("red");
  strokeWeight(1);
  stroke("red");
  beginShape();
  vertex(330, 300);
  bezierVertex(330, 300, 340, 290, 350, 300);
  bezierVertex(350, 300, 360, 290, 370, 300);
  bezierVertex(370, 300, 350, 325, 330, 300);
  endShape(close);

  //nose
  noFill();
  strokeWeight(2);
  stroke(40);
  arc(342, 265, 20, 20, 0, HALF_PI);

  //piercings
  point(340, 270);
  point(357, 270);

  //eyes
  stroke(0, 0, 0);
  noFill();
  arc(315, 255, 40, 35, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);
  arc(380, 255, 40, 35, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

  //Blush
  noStroke();
  fill(250, 100, 0, 90);
  ellipse(300, 270, 15, 10);
  ellipse(390, 270, 15, 10);

  fill(50);
  text(s, 280, 50, 200, 400);
  textSize(20);
}
