function setup(){
  createCanvas(800,600);
  background(135,206,235)
  
}
//set three variables in this, also added one for the for loop as lineX
function draw() {
  let brown = (126, 96, 77);
  let tan = (232, 190, 172);
  let a = 290;
//clouds, I wanted to add a little nice touch and make the clouds spread out throughout the sky, but this was the best I could manage.
  
  fill("white")
  noStroke()
  for (let lineX = 75; lineX <= 1000; lineX += 75) {
    ellipse(lineX+100,70,50,50)
    ellipse(lineX+20,50,60,40)
    ellipse(lineX,70,60,40)
  }
  let s = 'nice';
  fill(50);
  text(s, 120, 200, 100, 20); 
// i wanted to create arms for the body but I have no idea how to rotate shapes. I decided to combine an ellipse and rectngle to make a solid bodyframe
//body
  
  noStroke()
  fill("tan")
  fill("orange")
if (keyIsDown(LEFT_ARROW)) {
    fill(random(255),random(255),random(255));
  }

// utilized the keyisdown feature to change the color of the body and arms, I ALSO added arms as I wanted to add them previously, but wasn't sure how. 
  rect(298,420,150,500)
  ellipse(373,412,150,100)
  line(300,400,280,500);
  stroke("orange")
  if (keyIsDown(LEFT_ARROW)) {
    stroke(random(255),random(255),random(255));
  }
  strokeWeight(60)
  line(320,400,260,550);
  line(500,300,440,400);
    
//the bottom of the jaw has these 2 dots that I cannot get rid of, I used curveVertex to creat the jaw but was lost on how to remove the two points.  
//face structure
  
  
  fill("tan")
  strokeWeight(0);
  point(270, 180);
  point(270, 260);
  point(300, 340);
  point(320, 370);
  point(370, 380);
  point(420, 370);
  point(445, 340);
  point(465, 260);
  point(465, 180);
  point(270, 180);
  strokeWeight(0);
  noFill();
  beginShape();
  curveVertex(270, 180);
  curveVertex(270, 180);
  curveVertex(270, 260);
  curveVertex(300, 340);
  curveVertex(320, 370);
  curveVertex(320, 370);
  curveVertex(370, 390);
  curveVertex(420, 370);
  curveVertex(420, 370);
  curveVertex(445, 340);
  curveVertex(465, 260);
  curveVertex(465, 180);
  curveVertex(465, 180);
  line(270, 180, 465, 180); 
  fill("tan")
  
  endShape();
  noStroke()
  
// the curvevertex gets pretty messy sometimes, i need to comprehend why it won't connect dots at some points, where other times it does.
//I was able to use a while conditional at this point, which works as the hair is looped by 4 ellipses and stops once it reaches a certain x value. The a variable is in use here.
//hair 
  fill(126, 96, 77)
  while (a < 480) {
    ellipse(a,170,90,70);
    a = a+50;
}
  
//nose
  stroke(0)
  fill(0)
  strokeWeight(0);
  point(365, 270);
  point(355, 290);
  point(375, 300);
  strokeWeight(3);
  noFill();
  beginShape();
  curveVertex(365, 270);
  curveVertex(365, 270);
  curveVertex(355, 290);
  curveVertex(370, 300);
  curveVertex(370, 300);
  
  endShape();
  noStroke()
  
//mouth 
  fill(300)
  noStroke()
  arc(370, 330, 50, 30, 0, HALF_PI+ HALF_PI, CHORD)

//glasses, I wanted the glasses to be curved, so I added 20 to the rectangle to angle the corners.
  noStroke()
  fill("tan")
  stroke(0)
  line(345,255, 382,255)
  rect(290, 225, 55, 55, 20)
  rect(385, 225, 55, 55, 20);

//eyes,
  fill("brown")
  ellipse(320,245,20,20)
  ellipse(418,245,20,20)
  fill(300)
  noStroke()
  ellipse(322,240,8,8)
  ellipse(421,240,8,8)

  
}