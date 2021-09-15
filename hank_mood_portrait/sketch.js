
function setup() {

  createCanvas(500, 1000);
}

function draw() {
  background(75, 168, 250)
  hairback() // I had to make multiple layers for the hair 
  head()
  face()
  facehair()
  beardlines()
  hairfront()
  shirt()
  happy()
}
//bit of the example grid I cannibalized
function XY (){
 fill(0); 
  textSize(14);//changes the font size
  text(mouseX,400,300);//displays the x coordinate
  text(mouseY,20,300);//displays the y coordinate
  }

function head (){
    fill (209, 149, 119)
  beginShape ()
  vertex (337, 657)
  vertex (274, 657)
  vertex (250, 1000)
  vertex (400, 1000)
  endShape (CLOSE)
  
  fill (209, 149, 119)
  ellipse (300, 500, 250, 350)  
}

function face (){
  fill (255)
  ellipse (215, 470, 40, 20)
  
  fill (255)
  ellipse (290, 470, 40, 20)
  //above are the eyeballs, below are the pupils
  fill (90, 166, 111)
  ellipse (215, 467, 15, 15)
  
  fill (90, 166, 111)
  ellipse (290, 467, 15, 15)
 
  line (255, 460, 246, 509)
  
  beginShape(LINES)
  vertex (236, 516)
  vertex (248, 526)
  vertex (248, 526)
  vertex (261, 519)
  endShape ()
}

function facehair(){
  fill (0)
  beginShape ()
  vertex (262, 523)
  vertex (300, 533)
  vertex (312, 569)
  vertex (288, 547)
  vertex (262, 530)
  endShape (CLOSE)
  
  fill (0)
  beginShape()
  vertex (241, 522)
  vertex (241, 530)
  vertex (213, 546)
  vertex (199, 562)
  vertex (207, 532)
  endShape (CLOSE)
  
  fill (0)
  rect (190, 455, 50, 10)
  
  fill (0)
  rect (270, 455, 50, 10)
}

function beardlines (){
  var x = 190;
  var y = 600
  while (x < 430){
    line (x, 570, x, y)
    x = x + 10;
    if (x < 255){
    y = y + 10;
    }else{
      y = y - 7
    }
    }  
}

function hairfront(){
  
  fill (184, 167, 114)
  beginShape ()
  vertex (289, 374)
  vertex (190, 396)
  vertex (208, 369)
  vertex (268, 320)
  vertex (323, 319)
  vertex (379, 356)
  vertex (379, 356)
  vertex (416, 420)
  vertex (429, 503)
  endShape (CLOSE)
  
  fill (184, 167, 114)
  beginShape ()
  vertex (373, 448)
  vertex (378, 594)
  vertex (397, 477)
  vertex (404, 577)
  vertex (423, 495)
  vertex (417, 559)
  vertex (426, 480)
  endShape (CLOSE)
  
  fill (184, 167, 114)
  beginShape()
  vertex (277, 374)
  vertex (329, 430)
  vertex (400, 459)
  vertex (346, 386)
  endShape (CLOSE)
  
  fill (184, 167, 114)
  beginShape ()
  vertex (282, 370)
  vertex (198, 422)
  vertex (151, 402)
  vertex (200, 390)
  endShape (CLOSE)
  
}

function hairback (){
  fill (184, 167, 114)
  beginShape ()
  vertex (185, 435)
  vertex (150, 509)
  vertex (201, 467)
  vertex (172, 576)
  vertex (213, 526)
  vertex (190, 634)
  vertex (277, 608)
  vertex (241, 670)
  endShape (CLOSE)
  
  fill (184, 167, 114)
  beginShape ()
  vertex (420, 500)
  vertex (441,615)
  vertex (389, 570)
  vertex (399, 653)
  vertex (353, 582)
  vertex (372, 717)
  vertex (334, 601)
  endShape (CLOSE)
}

function shirt (){
  fill (242, 99, 216)
  triangle (296, 1000, 410, 1000, 399, 957 )
  fill (242, 99, 216)
  triangle (236, 957, 230, 1000, 310, 1000)
}

function happy (){
  if (keyCode === 72){
    
  noFill ()
  arc (250,560, 70, 20, TWO_PI, PI, OPEN)
  }else{
  noFill ()
  arc (250,560, 70, 20, PI, TWO_PI, OPEN)
  }
}

function sad (){
  if (keyCode === 83){
    
  noFill ()
  arc (250,560, 70, 20, PI, TWO_PI, OPEN)
  }else{
  noFill ()
  arc (250,560, 70, 20, TWO_PI, PI, OPEN)
  }
}