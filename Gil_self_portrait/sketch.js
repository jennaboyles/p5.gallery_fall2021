function setup() {
  createCanvas(600,800);
  

}





//the background did not want to change color when mouse moved around I got help from example of portraits but still cant make it work.



function draw() {
  colorMode(HSB);
  
  background(180 * atan2(mouseY, mouseX), 100, 100);
  
  scale(scaL);
  translate(canV / 4, canV / 4);
  if (press) {
    staticFace();
    dynamicFace();
  } else {
    fullFace();
  }
}

function draw() {
  //head
  background(196, 222, 179);
  

  
  // A rectangle
  rect(200, 200, 200, 300);


  endShape();

  //hair
  

 
  fill (0); 
  rect(210, 100, 210, 100);
  
  fill(0);
  
  endShape();
  
  
    // A rectangle
  rect(400, 200, 19, 80);
  fill(0)
  
  
  endShape();
  
  // A rectangle
  rect(170, 190, 40, 10);
  fill(0);
  
  
  endShape();
  
    // A rectangle
  rect(170, 200, 30, 80);
  
  fill(229, 174, 134)
  
  endShape();
  
  
  // A rectangle
  rect(170, 280, 30, 40);
  
  endShape();
  
  // A rectangle
  rect(400, 280, 30, 40);
  fill( 9);
  endShape();
  
  
  // A rectangle1
  rect(220, 240, 60, 20)
  
  fill(0 );
  
  endShape();
  
  
  // A rectangle1
  rect(320, 240, 60, 20)
  fill(255, 255, 255)
  
  endShape();
  
  
  // A rectangle
  rect(220, 270, 60, 70);
  fill(255, 255, 255);
  
  
  endShape();
  
  
  // A rectangle
  rect(320, 270, 60, 70);
  fill(229, 174, 134);
  
  
  endShape();


// A rectangle
  rect(275, 350, 50, 20);
  fill(0);
  
  
  endShape();
  
  // A rectangle
  rect(340, 310, 25, 25);
  fill(0);
  
  
  endShape();
  
  
   // A rectangle
  rect(240, 310, 25, 25);
  fill(255, 182, 193);
  
  endShape();
  
  
  
  // A rectangle
  rect(245, 410, 110, 5);
  fill(253, 218, 13);
  
  
  endShape();
  
    // A rectangle
  rect(180, 315, 7, 35);
  fill(229, 174, 134);
  
  
  
  endShape();
  
  
    // A rectangle
  rect(245, 500, 115, 70);
  fill(245, 245, 245);
  
  endShape();
  
  // A rectangle
  rect(155, 550, 300, 100);
  fill(229, 174, 134);
  
  
  endShape();
  
}  

  
  function setup() {
  createCanvas(600,800);
  background(0);
  stroke(153);
  strokeWeight(4);
  strokeCap(SQUARE);

  let a = 1;
  let b = 120;
  let c = 180;

  line(a, b, a + c, b);
  line(a, b + 10, a + c, b + 10);
  line(a, b + 20, a + c, b + 20);
  line(a, b + 30, a + c, b + 30);

  a = a + c;
  b = height - b;

  line(a, b, a + c, b);
  line(a, b + 10, a + c, b + 10);
  line(a, b + 20, a + c, b + 20);
  line(a, b + 30, a + c, b + 30);

  a = a + c;
  b = height - b;

  line(a, b, a + c, b);
  line(a, b + 10, a + c, b + 10);
  line(a, b + 20, a + c, b + 20);
  line(a, b + 30, a + c, b + 30);
  
  
  }
  
  
  

    
  
