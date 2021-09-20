//ART 150 template

var cloMel = 222;
var rMel = 444;
 

let y = 100;

function setup() {
  createCanvas(800, 800); //draw a canvas 800 pixels wide by 800 pixels high

  background(105, 80, 225); //set background to RGB
 
}
function draw() {
  melbatoast();
  
  { if (mouseIsPressed) {
 strokeWeight(0);
    stroke(0);
      fill(70, 20, 90,30);
    } else {strokeWeight(0);
      fill(50, 20, 190,10);
    }
    ellipse(mouseX, mouseY, 40, 200);
  
  
   
}

  //why can't I see the grid numbers when i move my mouse?
  //noFill(); //don't fill in the ellipse
  //ellipse(100, 200, 20); //ellipse(x,y,w) this draws an ellipse with a center point at (20,20) and 20 pixels wide.

  //fill(0);
  /*set fill to black. I need this fill because the noFill above would make these invisible. Try changing the 0 to an R,G,B value */
  //textSize(14);//changes the font size
  //text(mouseX,400,20);//displays the x coordinate
  //text(mouseY,20,400);//displays the y coordinate

  // Set colors
  fill(204, 101, 100, 127);
  // stroke(127, 63, 120);

  textSize(32);

fill(200,250,250);
text('happy when it rains', 400, 90);
 

  //FACE
melFace();

  // HAIR

  melbatoast();
  
  //BODY
  
  melBody();
 
  var m = 0;
  while (m <= height) {
  fill(150, 140, 220);
  strokeWeight (1);
ellipse(55, m, 20, 20);
   m = m + 10;
}
}

/*
    arc(400, 60, 400, 250, 330, PI,  QUARTER_PI);
    arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(250, 255, 60, 60, HALF_PI, PI);
arc(250, 255, 70, 70, PI, PI + QUARTER_PI);
arc(250, 255, 80, 80, PI + QUARTER_PI, TWO_PI);
    arc(330, 180, 100, 120, PI, PI + QUARTER_PI);
  arc(330, 180, 100, 120, PI + QUARTER_PI, TWO_PI);
    
strokeWeight(0);
point(84, 91);
point(68, 19);
point(21, 17);
point(32, 91);
strokeWeight(1);

noFill();
beginShape();
curveVertex(84, 91);
curveVertex(84, 91);
curveVertex(68, 19);
curveVertex(21, 17);
curveVertex(32, 91);
curveVertex(32, 91);
endShape();


    //curved lines
    
  {  noFill(90);
    stroke(55, 102, 0);
    curve(288, 236, 245, 236, 273, 224, 273, 261);
    stroke(0);
    curve(225, 226, 273, 224, 273, 261, 215, 265);
    stroke(255, 102, 0);
    curve(273, 224, 273, 261, 215, 265, 215, 265);
  }
*/

//LOOPS

//LOOP attempt 1
//modified example from Coding Train video
//https://www.youtube.com/watch?v=cnRD9o6odjk


//LOOPING attempt 2
//https://p5js.org/examples/structure-loop.html
// The statements in the setup() function
// execute once when the program begins
//function setup() {
//createCanvas(720, 400); // Size must be the first statement
// stroke(255); // Set line drawing color to white
//frameRate(30);
// }

//LOOP attempt 3
//https://p5js.org/reference/#/p5/loop

//     let x = 0;

//     x = x + 0.1;
//     if (x > width) {
//       x = 0;
//     }
//     line(x, 0, x, height);
//   }

//   function mousePressed() {
//     loop();
//   }

//   function mouseReleased() {
//     noLoop();
//   }
//}

function melbatoast() {
  fill(255, 20, 100);

  //front of hair
  ellipse(300, 250, 240, 90);
  ellipse(320, 250, 200, 30);
  ellipse(300, 230, 200, 10);
  ellipse(320, 270, 200, 20);
  //ellipse (280,250,200,40);

  // L side of hair
  arc(cloMel, 316, 10, 100, 170, 180);
  arc(cloMel + 10, 266, 5, 100, 150, 130);

  arc(cloMel + 15, 276, 30, 30, 180, 190);
  arc(cloMel - 2, 360, 10, 100, 180, 200);
  arc(cloMel - 25, 376, 10, 100, 180, 200);
  arc(cloMel - 13, 340, 10, 100, 180, 200);
  arc(cloMel - 14, 395, 10, 100, 180, 200);
  arc(cloMel + 8, 340, 10, 100, 180, 200);

  arc(cloMel, 416, 10, 100, 170, 180);
  arc(cloMel + 10, 430, 5, 100, 150, 130);

  arc(cloMel + 25, 360, 30, 30, 180, 190);
  arc(cloMel + 2, 400, 10, 100, 180, 200);
  arc(cloMel + 5, 380, 10, 100, 180, 200);
  arc(cloMel - 10, 470, 10, 100, 180, 200);
  arc(cloMel - 15, 405, 10, 100, 180, 200);
  arc(cloMel + 18, 490, 10, 100, 180, 200);

  //R side of hair

  arc(rMel, 316, 10, 100, 170, 180);
  arc(rMel - 10, 266, 5, 100, 150, 130);

  arc(rMel - 15, 276, 30, 30, 180, 190);
  arc(rMel - 12, 360, 10, 100, 180, 200);
  arc(rMel - 25, 276, 10, 100, 180, 200);
  arc(rMel - 13, 340, 10, 100, 180, 200);
  arc(rMel - 14, 395, 10, 100, 180, 200);
  arc(rMel + 8, 340, 10, 100, 180, 200);

  arc(rMel, 416, 10, 100, 170, 180);
  arc(rMel + 10, 366, 5, 100, 150, 130);

  arc(rMel + 15, 376, 30, 30, 180, 190);
  arc(rMel - 2, 460, 10, 100, 180, 200);
  arc(rMel - 25, 476, 10, 100, 180, 200);
  arc(rMel - 13, 440, 10, 100, 180, 200);
  arc(rMel - 14, 495, 10, 100, 180, 200);
  arc(rMel + 8, 440, 10, 100, 180, 200);
}



function melFace()  

// A rectangle face
{fill(255, 195, 220);
  rect(220, 220, 220, 250, 130);

  // ellipse eyes
  fill(80, 35, 15);
  //set the fill color
  ellipse(310, 345, 30, 25);
  ellipse(410, 330, 30, 25);

  // A triangle nose
  fill(250, 140, 135, 195);
  triangle(360, 350, 370, 380, 350, 380);

  //mouth
  fill(255, 40, 145, 90);
  strokeWeight(1);
  arc(360, 410, 20, 20, 100, 160);}



function melBody()


{ //legs
  fill(255, 195, 220);
  strokeWeight(0);
  rect(285, 650, 35, 155);
  rect(360, 650, 35, 155);

  //shoes

  fill(20, 40, 100);
  ellipse(300, 795, 30, 25);

  fill(20, 40, 100);
  ellipse(390, 795, 30, 25);

  //BODY
  fill(255, 195, 220);
  strokeWeight(0);

  triangle(460, 650, 170, 680, 350, 450);

  //dress
  fill(55, 5, 20);
  strokeWeight(1);
  triangle(460, 650, 170, 680, 350, 480);
  rect(330, 470, 35, 55);

  //hands
  fill(255, 195, 220);
  strokeWeight(0);
  ellipse(460, 650, 30, 30);
  ellipse(180, 660, 30, 30);}