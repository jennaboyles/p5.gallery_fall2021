function setup() {
  createCanvas(800, 800);
}
a = 0
b = 255

function draw() {
  if (mouseIsPressed){
    background(random(255),random(50),random(50));
  } else { 
  background(135,206,250);
  }
  
  fill(255,0,0);
  noStroke();
  rect(0,0,800,75)
  rect(200,675,405,75)
  rect(0,725,800,75)
    for (let w = 0; w < 800; w+=20){
      strokeWeight(2);
      stroke('Red')
      line(w,50,w,75) //Background
      line(w,100,w,125)
      line(w,150,w,175)
      line(w,200,w,225)
      line(w,250,w,275)
      line(w,300,w,325)
      line(w,350,w,375)
      line(w,400,w,425)
      line(w,450,w,475)     
      line(w,500,w,525)
      line(w,550,w,575)
      line(w,600,w,625)
      line(w,650,w,675)
      line(w,700,w,725)
      line(w,50,w+20,75)
      line(w,100,w+20,125)
      line(w,150,w+20,175)
      line(w,200,w+20,225)
      line(w,250,w+20,275)
      line(w,300,w+20,325)
      line(w,350,w+20,375)
      line(w,400,w+20,425)
      line(w,450,w+20,475)     
      line(w,500,w+20,525)
      line(w,550,w+20,575)
      line(w,600,w+20,625)
      line(w,650,w+20,675)
      line(w,700,w+20,725)
    
    }
  stroke(0);
  strokeWeight(5);
  fill(b,219,172);
  beginShape();
  vertex(625,300);//right ear
  vertex(645,290);
  vertex(650,300);
  vertex(650,400);
  vertex(630,420);
  vertex(625,415);
  endShape();
  
  
  
  strokeWeight(5);
  fill(b,219,172);
  beginShape();
  vertex(175,300);//left ear
  vertex(155,290);
  vertex(150,300);
  vertex(150,400);
  vertex(175,420);
  vertex(175,415);
  endShape(CLOSE);
  
  fill(a);
  strokeWeight(5);
  beginShape();
  vertex(275,540);
  vertex(300,560);
  vertex(480,560);
  vertex(520,520);
  endShape();

  fill(a);
  strokeCap(ROUND);
  beginShape();
  vertex(190,95);//hair
  vertex(175,260);
  vertex(200,200);
  vertex(600,200);
  vertex(625,255);
  vertex(600,100);
  endShape(CLOSE);

  fill(b,219,172);
  strokeWeight(5);
  beginShape();
  vertex(175,500);//Jawline
  vertex(200,545);
  vertex(250,600);
  vertex(300,645);
  vertex(350,670);
  vertex(400,680);
  vertex(450,670);
  vertex(500,645);
  vertex(550,600);
  vertex(600,545);
  vertex(625,500);
  vertex(626,260);
  vertex(600,200);
  vertex(200,200);
  vertex(175,250);
  vertex(175,500);
  endShape();
  
  strokeWeight(5);
  fill(a);
  line(390,440,385,450);
  line(410,440,415,450);
  
  fill(b);
  beginShape();
  vertex(225,320);// left eye
  vertex(230,340);
  vertex(240,355);
  vertex(253,365);
  vertex(270,370);
  vertex(290,372);
  vertex(315,375);
  vertex(335,370);
  vertex(355,360);
  vertex(350,355);
  vertex(340,345);
  vertex(330,340);
  vertex(315,335);
  vertex(280,325);
  vertex(265,323);
  vertex(245,321);
  vertex(225,321);
  endShape();
  
  fill(b);
  beginShape();
  vertex(575,320);// right eye
  vertex(570,340);
  vertex(560,355);
  vertex(547,365);
  vertex(530,370);
  vertex(510,372);
  vertex(485,375);
  vertex(465,370);
  vertex(445,360);
  vertex(450,355);
  vertex(460,345);
  vertex(470,340);
  vertex(486,335);
  vertex(520,325);
  vertex(535,323);
  vertex(555,321);
  vertex(575,321);
  endShape();
  
  
  fill(a);
  beginShape();
  vertex(220,260);// left eyebrow
  vertex(225,270);
  vertex(265,275);
  vertex(345,285);
  vertex(355,275);
  vertex(265,255);
  vertex(220,260);
  endShape();
  
  fill(a);
  beginShape();
  vertex(580,260);//right eyebrow
  vertex(575,270);
  vertex(535,275);
  vertex(455,285);
  vertex(445,275);
  vertex(535,255);
  vertex(580,260);
  endShape();
  
  line(275,540,300,560)
  line(300,560,480,560)
  line(480,560,520,520)

  fill(0);
  ellipse(160,400,7,7); //Left Earrings
  ellipse(640,400,7,7);
  
  stroke(2);
  line(160,400,160,430);
  line(640,400,640,430);
  
  stroke(0);
  rect(157,430,6,35);
  rect(149,465,20,5);

  
  stroke(0);
  rect(638,430,6,35);
  rect(631,465,20,5);
  
  
  if (mouseIsPressed){
    fill(255, 0, 0);
    ellipse(290,350,40,40);
    ellipse(510,350,40,40);
  } else {
    fill(111, 78, 5);
    ellipse(290,350,40,40);
    ellipse(510,350,40,40);  
  }

  if (mouseIsPressed){
    q = 255   
  } else {
    q = 0;
  }
  
  wordText();
function wordText(){
  let c = "Set Your Heart Ablaze!"  
  fill(q,0,0);
  textSize(40);
  text(c,200,720);
  


  fill(q,0,0);
  beginShape();
  vertex(155,470);
  vertex(155,578);
  vertex(163,573);
  vertex(163,470)
  endShape();
  
  fill(q,0,0);
  beginShape();
  vertex(645,470);
  vertex(645,578);
  vertex(637,573);
  vertex(637,470)
  endShape();
}

}