function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(150, 224, 255);
  
  //variables for the size and location of the clouds
  let ax=150;
  let ay=500;
  let bx=110;
  let by=475;
  let cx=160;
  let cy=475;
  let dx=200;
  let dy=480;

 //clouds in bottom left and top right 
  stroke(0)
line(150,170,220,230)
  {
  noStroke()
  fill(255,255,255)
  ellipse (ax,ay,200,50)
  ellipse(bx,by,75,75)
  ellipse(cx,cy, 80,100)
  ellipse(dx,dy,75,75)
  
   noStroke()
  fill(255,255,255)
  ellipse (ax+300,ay-400,200,50)
  ellipse(bx+300,by-400,75,75)
  ellipse(cx+300,cy-400, 80,100)
  ellipse(dx+300,dy-400,75,75)
  }
    //balloon fuction in any location
  drawBalloon(150,100,100)
  
   
  
  //hair
  fill(52,35,30)
  arc(360,225,100,100,PI,0)
  quad(310,225,410,225,410,300,310,300)
  
  //hands
  fill( 237, 188, 133 ) 
  stroke(217, 171, 119)
  circle(220,230,35)//left hand
  circle(445,410,35)//right hand
  
  //legs
  fill(0)
  noStroke()
  quad(325,400,325,525,355,525,365,400)//left leg
  quad(400,400,400,525,370,525,360,400)//right leg
  
  quad(355,525,325,525,300,545,355,545)//left foot
  quad(370,525,400,525,425,545,370,545)//right foot
  
  //arms
  fill(205, 184, 252) 
  stroke(157, 134, 207)
  quad(240,225,220,250,330,320,330,300)//left arm
  quad(300,275,425,275,400,400,325,400)//torso
  quad(425,275,415,315,430,398,460,398)//right arm

      
//         for (let lineY = 200; lineY <= 270; lineY += 30) {
//     line(lineY, 0, lineY, width);
  
    
  //head
  fill(237, 188, 133)
  stroke(217, 171, 119)
  triangle(360,245,340,275,380,275 )//neck
  ellipse(360,230,75,80)//head

  //eyes
  drawEye(345,220,10,12)//left eye
  drawEye(375,220,10,12)//right eye
  
  //mouth
  stroke(0)
  fill(255,255,255)
  line(345,240,375,240)
  arc(360,240,30,20,0,PI)
  
  //nose
  noFill()
  stroke(0)
  arc(360,230,10,8,0,PI)
  
  //eyebrows
  stroke(52,35,30)
  line(347,210,335,215)
  line(373,210,385,215)
  
//this is the pattern on my shirt
    for (let circleX = 325; circleX <= 400; circleX += 35) {
      fill(38, 115, 191)
      noStroke()
    circle(circleX, 310, 20);
  
  }
  
  
//balloon function
  function drawBalloon(circleX, circleY, circleDiameter) {
  fill(255,0,0)
  //stroke(199,0,0)
  circle(circleX, circleY, circleDiameter);
  triangle (circleX-15,circleY+70,circleX+15,circleY+70,circleX,circleY+50)
  fill(255,255,255)
    noStroke()
  circle(circleX, circleY, circleDiameter-20)
  fill(255,0,0)
  circle(circleX+5,circleY, circleDiameter-15)
  }
  
  //eye function
  function drawEye(ellipseX, ellipseY, ellipseDiameterX, ellipseDiameterY) {
    fill(255,255,255)
    stroke(0)
    ellipse(ellipseX, ellipseY, ellipseDiameterX, ellipseDiameterY);
    fill(0)
    circle(ellipseX, ellipseY-2.5, 5)
       }
  
  //pops balloon
  if (mouseIsPressed){
    noStroke()
    fill(237, 188, 133)
    rect(340, 237,40,20)
    
    //erases happy mouth
   if(mouseIsPressed){
       stroke(0)
  //fill(255,255,255)
 // line(345,250,375,250)
  arc(360,250,30,20,PI,0)
   }
    //sad mouth
   if (mouseIsPressed) {
     noStroke()
    fill(150, 224, 255)
     rect(100,50,100,120)


  }

  }

  }