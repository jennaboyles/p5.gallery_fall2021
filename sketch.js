function setup() {
  createCanvas(500, 500);
  background(219, 189, 215);
 
}
let value = 0;
//Enables functions.
function draw(){
  //This for loop creates the white lines in the backgroud.
  
  stroke(255);
  strokeWeight(5);
  
  for (let lineX = 30; lineX <= 480; lineX += 30) {
    line(lineX, 0, lineX, height);
  }
  strokeWeight(2)
  portraitHairback();
  portraitFace();
  portraitHairfront();
  portraitLegs();
  portraitShirt();
  portraitNeck();
  portraitArmleft();
  portraitArmright();
  vinesMove();
  //Stuff for the mousepressed function below.
  fill(value);
  rect(90, 290, 98, 86);
  wordText();

}

//Left sleeve.
function portraitArmleft(){
  fill(78, 142, 245);
  triangle(250, 390, 270, 290, 270, 390); 
}

//Right sleeve.
function portraitArmright(){
   fill(78, 142, 245);
  triangle(380, 390, 380, 290, 400, 390);
}

//Facial features, head, and neck.
function portraitFace(){
  //Head
  noStroke();
  fill(240, 186, 120);
  ellipse(330, 200, 90,120);
  //Eyes
  fill(0)
  circle(307, 190, 10);
  circle(345, 190, 10); 
  //Neck
  fill(240, 186, 120)
  rect(315, 230, 35, 50)
  //Smile
  noFill();
  stroke(0);
  arc(330, 230, 30, 10, HALF_PI, PI); 
  //Ears
  fill(240, 186, 120);
  noStroke();
  circle(380, 200, 25)
}

function portraitNeck(){
  //Function is only for neck!
  noStroke();
  fill(240, 186, 120);
  triangle(330, 340, 315, 270, 350, 270);
}

//Chest part of shirt.
function portraitShirt(){
  fill(78, 142, 245);
  ellipse(330, 345, 100, 150);
  circle(290, 290, 45);
  circle(370, 290, 45);
}

//Legs!
function portraitLegs(){
  fill(126, 129, 135);
  noStroke();
  rect(295, 400, 30, 100);
  rect(335, 400, 30, 100); 
}

//Back of hair.
function portraitHairback(){
  fill(54, 39, 28);
  noStroke();
  rect(290, 145, 90, 120); 
}

//Front of hair, bangs.
function portraitHairfront(){
  fill(54, 39, 38);
  arc(330, 180, 100, 120, PI, PI + QUARTER_PI);
  arc(330, 180, 100, 120, PI + QUARTER_PI, TWO_PI);  
}

//Vines.
function vinesMove(){
  strokeWeight(10);
  stroke(70, 112, 72);
  line(40, 0, 40, 40);
  line(40, 40, 65, 40);
  line(65, 40, 65, 100);
  line(65, 100, 55, 100);
  line(55, 100, 55, 150);
  line(200, 0, 200, 100);
  line(110, 0, 110, 180);
  line(110, 180, 90, 180);
  line(90, 180, 90, 270);
  line(200, 100, 170, 100);
  line(170, 100, 170, 150);
  line(170, 150, 185, 150);
  line(185, 150, 185, 190);
  line(400, 0, 400, 50);
  line(400, 50, 420, 50);
  line(420, 50, 420, 100);
  line(420, 100, 400, 100);
  line(400, 100, 400, 150);
  line(450, 0, 450, 200);
  line(450, 200, 470, 200);
  line(470, 200, 470, 300);
}
//Text box with variable!
function wordText(){
  let a = 'Hello there!';
  fill(0);
  noStroke();
  textSize(32);
  text(a, 100, 300, 70, 80);  
}

//Mousepressed function! form p5 website
function mousePressed(){
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  
}
  