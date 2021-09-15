

function setup() {
  createCanvas(900, 700);
}

function draw() {
  background("#FFEFE0");
  fill(0); 
  hair()
  face()
  body()
  beard()
  handleft()
  handright()

  
  
function hair(){
  fill(0)
  beginShape();
  vertex(150, 275);
  vertex(160, 278);
  vertex(200, 180);
  vertex(240, 220);
  vertex(239, 180);
  vertex(300, 215);  
  vertex(290, 180);
  vertex(423, 246);
  vertex(392, 210);
  vertex(490, 250);
  vertex(482, 220);
  vertex(545, 252);
  vertex(570, 278);
  vertex(583, 275);
  vertex(587, 205);
  vertex(560, 123);
  vertex(486, 33);
  vertex(390, 7);
  vertex(238, 24);
  vertex(155, 83);
  vertex(133, 155);
  vertex(140, 225);
endShape(CLOSE);
}
  
function face(){
  fill("#FFEFE0")
bezier(165, 250, 200, 400, 300, 430,370,450)
bezier(370,450,440,430,540,400,575,250)
  fill("#FFEFE0")
bezier(237, 282, 255, 259,274, 264,290,282)
bezier(503, 282, 485, 259,466, 264,450,282)    
  fill("#FFEFE0")
line(371,312,371,338)  
  fill("#FFEFE0")
bezier(371,338,340,347,360,367,371,370)
  fill("#FFEFE0")
arc(365,390,80,50,TWO_PI,PI)
}

  
  

function body(){
  fill("#84A1FF")
  arc(370,700,280,500,PI,TWO_PI)
}
}

function beard (){
 var b = 310
while (b <= 430) {
  line (b, 370, b, 385)
    b = b + 5
}
}

function handleft(){
  if (keyCode === 85){
    
  fill("#FFEFE0")
beginShape();
  vertex(260, 543);
  vertex(144, 479);
  vertex(144, 458);
  vertex(129, 439);
  vertex(102, 455);
  vertex(102, 480);
  vertex(121, 496);
  vertex(253, 559);
endShape(CLOSE);
 
  }else{
  noFill ()
  fill("#FFEFE0")
beginShape();
  vertex(260, 543);
  vertex(130, 522);
  vertex(130, 501);
  vertex(115, 482);
  vertex(88, 498);
  vertex(88, 523);
  vertex(107, 539);
  vertex(253, 559);
endShape(CLOSE);  
  }
}

function handright(){
  if (keyCode === 85){
    
  fill("#FFEFE0")
fill("#FFEFE0")
beginShape();
  vertex(480, 543);
  vertex(364, 479);
  vertex(364, 458);
  vertex(349, 439);
  vertex(322, 455);
  vertex(322, 480);
  vertex(341, 496);
  vertex(473, 559);
endShape(CLOSE);
 
  }else{
  noFill ()
  fill("#FFEFE0")
beginShape();
  vertex(480, 543);
  vertex(350, 522);
  vertex(350, 501);
  vertex(335,482);
  vertex(308, 498);
  vertex(308, 523);
  vertex(327, 539);
  vertex(473, 559);
endShape(CLOSE);  
  }
}




