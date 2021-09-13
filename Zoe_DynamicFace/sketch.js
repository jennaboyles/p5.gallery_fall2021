//https://editor.p5js.org/claesjohnson/sketches/f0huO1Y4h - import images

//https://editor.p5js.org/Joemckay/sketches/oepBOzlii - mousepress

//Loading images created from Inkscape
function preload() {
  bFace = loadImage("Images/bFace.png");
  cheek = loadImage("Images/sCheek.png");
  eye = loadImage("Images/sEye.png");
  hair = loadImage("Images/hair.png");
  mouth = loadImage("Images/mouth.png");
  nose = loadImage("Images/nose.png");
  fFace = loadImage("Images/fFace.png");
}

//Global Variables
var scaL = 0.75;
var canV = 750;
var offSet = 7;
var press = false;

//Setup
function setup() {
  createCanvas(scaL * canV, scaL * canV);
  imageMode(CENTER);
}
//Grid
function grid() {
  stroke(0, 0, 0);
  for (var i = -width; i < width; i += 25) {
    line(i, -width, i, width);
    line(-height, i, height, i);
  }
}

function xyCOOR() {
  //helpful coordinates
  //translate(-canV / 2, -canV / 2);
  textSize(14);
  text(mouseX, 180, 20);
  text(mouseY, 20, 180);
  noFill();
  stroke(0, 0, 0);
}

function mousePressed() {
  press = !press;
}

//creating a function for the full face
function fullFace() {
  image(fFace, 170, 230);
}

//creating a function for static items
function staticFace() {
  image(bFace, 250, 250);
  image(nose, 250, 250);
  image(mouth, 250, 375);
  image(hair, 170, 210);
}
function dynamicFace() {
  //rotating objects

  //setting the angle for rotation, offSet scales the speed of rotation
  angleMode(degrees);
  ang = offSet * atan2(mouseY, mouseX);

  push();
  translate(150, 150);
  rotate(ang);
  image(eye, 0, 0);
  pop();

  push();
  translate(350, 150);
  rotate(-ang);
  image(eye, 0, 0);
  pop();

  push();
  translate(150, 150);
  rotate(-ang);
  image(eye, 0, 0);
  pop();

  push();
  translate(350, 150);
  rotate(ang);
  image(eye, 0, 0);
  pop();

  push();
  translate(150, 275);
  rotate(ang);
  image(cheek, 0, 0);
  pop();

  push();
  translate(350, 275);
  scale(-1, 1);
  rotate(ang);
  image(cheek, 0, 0);
  pop();
}

function draw() {
  colorMode(HSB);

  background(180 * atan2(mouseY, mouseX), 100, 100);

  //grid();
  //xyCOOR();
  scale(scaL);
  translate(canV / 4, canV / 4);
  if (press) {
    staticFace();
    dynamicFace();
  } else {
    fullFace();
  }
}
