let song;
let playButton;


function playSong() {
  song.play();
}
function stopSong(){
  song.stop();
}
function preload(){
  song = loadSound("Delayed.mp3");
}
let volumeSlider;
let cSlider;

function circleDesign(){
  for (x=0; x>= width; x++){
    fill(0, 0, 0);
    ellipse(x, 100, 25, 25);
    
  }
}

function setup() {
  
  createCanvas(800,800);
 song.setVolume(0.5);
 volumeSlider = createSlider(0, 1, 0.3, 0.01);
 volumeSlider.position(250, 270);
//song.play();

  colorMode(HSB);
  cSlider = createSlider(0, 360, 60, 5);
  cSlider.position(60, 180);   
  
playButton = createButton("");
  playButton.position(540, 285);
  playButton.size(10, 10);
  playButton.mousePressed(playSong);
  playButton.doubleClicked(stopSong);

}


let hairColor = (28, 20, 5);


function colorSlider(){
   let val = cSlider.value();
  background(val, 255, 255, 1);
}

function musicPlayer(){
    //Music Playback box
  fill(0, 0, 0); // shadow
  rect(110, 50,600 , 100, 25 ); 
  fill(102, 120, 209); // blue box
  rect(115, 50, 600, 95, 25);
  fill(0, 0, 0); //left arrow
  triangle(430, 110, 450, 100,450, 120 );
  rect(422, 100, 2, 20);
  //play button
  triangle(500, 110, 480, 100, 480, 120);
  //Right arrow
  triangle(550, 110, 530, 100, 530, 120  );
  rect(555, 100, 2, 20);
}

function neck(){

  //Neck
  fill(35, 63, 81);
  beginShape();
  vertex(372, 460);
  vertex(372, 480);
  vertex(375, 480);
  curveVertex(380, 480);
  curveVertex(380, 480);
  curveVertex(400, 492);
  curveVertex(420, 492);
  curveVertex(435, 480);
  curveVertex(450, 480);
  curveVertex(450, 460);
  curveVertex(450, 465);
  curveVertex(445, 460);
  curveVertex(445, 460);
  endShape(CLOSE);
  
  line(370, 460, 370, 475); //Left Neck line
  line(450, 460, 450, 480); //Right Neck line
}

function head(){
  fill(35, 63, 81); // skin color 
  ellipse(410, 340, 250); // head
}

function eyes(){
  fill(35, 89, 31); // eyes
  ellipse(360, 320, 50);
  ellipse(460, 320, 50); 
}

function glasses(){
  bezier(330, 295, 335, 370, 385, 370, 390, 295); // Left lens
  bezier(430, 295, 430, 370, 490, 370, 490, 295); // Right lens
  bezier(390, 300, 395, 295, 425, 295, 430, 300); // middle of frame
  line(330, 295, 390, 295); //Left Top of Lens
  line(430, 295, 490, 295); //Right Top of Lens
}

function hair(){
  line(410, 215, 410, 260); // part in the middle of hair

  // Left top part of hair
  noFill(); // upper line
  let x1 = 410,
    x2 = 230,
    x3 = 300,
    x4 = 220;
  let y1 = 215,
    y2 = 120,
    y3 = 280,
    y4 = 320;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(255);

  noFill(); // lower line
  let x5 = 410,
    x6 = 360,
    x7 = 300,
    x8 = 220;
  let y5 = 260,
    y6 = 240,
    y7 = 320,
    y8 = 320;
  bezier(x5, y5, x6, y6, x7, y7, x8, y8);
  fill(255);

  //Left middle part of hair
  noFill(); // upper line
  let x17 = 288,
    x18 = 240,
    x19 = 190,
    x20 = 180;
  let y17 = 305,
    y18 = 340,
    y19 = 360,
    y20 = 350;
  bezier(x17, y17, x18, y18, x19, y19, x20, y20);
  fill(255);

  noFill(); // lower line
  let x21 = 180,
    x22 = 240,
    x23 = 260,
    x24 = 300;
  let y21 = 350,
    y22 = 400,
    y23 = 390,
    y24 = 400;
  bezier(x21, y21, x22, y22, x23, y23, x24, y24);
  fill(255);

  // Left bottom part of hair
  noFill(); // upper line
  let x25 = 300,
    x26 = 240,
    x27 = 230,
    x28 = 175;
  let y25 = 400,
    y26 = 430,
    y27 = 430,
    y28 = 410;
  bezier(x25, y25, x26, y26, x27, y27, x28, y28);
  fill(255);

  noFill(); // lower line
  let x29 = 175,
    x30 = 200,
    x31 = 330,
    x32 = 350;
  let y29 = 410,
    y30 = 500,
    y31 = 500,
    y32 = 450;
  bezier(x29, y29, x30, y30, x31, y31, x32, y32);
  fill(255);

  // Right top side hair
  noFill(); // top line
  let x9 = 410,
    x10 = 630,
    x11 = 490,
    x12 = 610;
  let y9 = 215,
    y10 = 120,
    y11 = 220,
    y12 = 320;
  bezier(x9, y9, x10, y10, x11, y11, x12, y12);
  fill(255);

  noFill(); // bottom line
  let x13 = 410,
    x14 = 500,
    x15 = 480,
    x16 = 610;
  let y13 = 260,
    y14 = 240,
    y15 = 320,
    y16 = 320;
  bezier(x13, y13, x14, y14, x15, y15, x16, y16);
  fill(255);

  // Right middle part of hair
  noFill(); // top line
  let x33 = 530,
    x34 = 560,
    x35 = 570,
    x36 = 640;
  let y33 = 305,
    y34 = 320,
    y35 = 350,
    y36 = 350;
  bezier(x33, y33, x34, y34, x35, y35, x36, y36);
  fill(255);

  noFill(); // bottom line
  let x37 = 640,
    x38 = 580,
    x39 = 570,
    x40 = 520;
  let y37 = 350,
    y38 = 400,
    y39 = 400,
    y40 = 400;
  bezier(x37, y37, x38, y38, x39, y39, x40, y40);
  fill(255);

  // Right Bottom Part of Hair
  noFill(); // top line
  let x41 = 520,
    x42 = 540,
    x43 = 550,
    x44 = 640;
  let y41 = 400,
    y42 = 400,
    y43 = 450,
    y44 = 410;
  bezier(x41, y41, x42, y42, x43, y43, x44, y44);
  fill(255);

  noFill(); // bottom line
  let x45 = 640,
    x46 = 570,
    x47 = 500,
    x48 = 470;
  let y45 = 410,
    y46 = 490,
    y47 = 500,
    y48 = 450;
  bezier(x45, y45, x46, y46, x47, y47, x48, y48);
  fill(255);

  
  line(330, 275, 390, 275); //Left Eyebrow Top line
  line(390, 275, 380, 285); //Left Eyebrow right line
  line(380, 285, 325, 285); //Left Eyebrow bottom line
  line(325, 285, 330, 275); //Left Eyebrow left line

  line(430, 275, 490, 275); //Right Eyebrow Top line
  line(430, 275, 440, 285); //Right Eyebrow left line
  line(440, 285, 495, 285); //Right Eyebrow bottom line
  line(495, 285, 490, 275); //Right Eyebrow right line
  
  // Left Eyebrow
  fill(28, 20, 5);
  beginShape();
  vertex(330, 275);
  vertex(390, 275);
  vertex(380, 285);
  vertex(325, 285);
  vertex(330, 275);
  endShape(CLOSE);

  // Right Eyebrow
  fill(28, 20, 5);
  beginShape();
  vertex(430, 275);
  vertex(490, 275);
  vertex(430, 275);
  vertex(440, 285);
  vertex(495, 285);
  vertex(490, 275);
  endShape(CLOSE);

  // Left Top side of hair
  fill(28, 20, 5);
  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(300, 190);
  curveVertex(245, 300);
  curveVertex(x4, y4);
  curveVertex(250, 320);
  curveVertex(315, 290);
  curveVertex(350, 270);
  curveVertex(x5, y5);
  curveVertex(x5, y5);
  endShape(CLOSE);

  //Right Top Side of hair
  fill(28, 20, 5);
  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(537, 180);
  curveVertex(610, 300);
  curveVertex(620, 320);
  curveVertex(550, 310);
  curveVertex(530, 305);
  curveVertex(480, 270);
  curveVertex(x13, y13);
  curveVertex(x13, y13);
  endShape(CLOSE);

  //Left middle part of hair
  fill(28, 20, 5);
  beginShape();
  curveVertex(x17, y17);
  curveVertex(x17, y17);
  curveVertex(x18, 330);
  curveVertex(170, 340);
  curveVertex(x20, 350);
  curveVertex(x22, 390);
  curveVertex(270, 400);
  curveVertex(x24, y24);
  curveVertex(285, 340);
  curveVertex(285, 345);
  curveVertex(285, 345);
  endShape(CLOSE);

  //Left bottom part of hair
  fill(28, 20, 5);
  beginShape();
  curveVertex(x25, y25);
  curveVertex(x25, y25);
  curveVertex(x26, 410);
  curveVertex(x27, 410);
  curveVertex(x28, 400);
  curveVertex(x29, y29);
  curveVertex(185, 430);
  curveVertex(230, 475);
  curveVertex(x31, 478);
  curveVertex(x32, y32);
  curveVertex(x32, y32);
  endShape(CLOSE);

  //Right Middle Part of hair
  fill(28, 20, 5);
  beginShape();
  curveVertex(x33, y33);
  curveVertex(x33, y33);
  curveVertex(x34, 320);
  curveVertex(x35, 325);
  curveVertex(x37, y37);
  curveVertex(x38, 390);
  curveVertex(x39, 395);
  curveVertex(x40, y40);
  curveVertex(530, 380);
  curveVertex(535, 350);
  curveVertex(x33, y33);
  curveVertex(x33, y33);
  endShape(CLOSE);

  //Right Bottom Part of Hair
  fill(28, 20, 5);
  beginShape();
  curveVertex(x41, y41);
  curveVertex(x41, y41);
  curveVertex(x42, 410);
  curveVertex(x43, 410);
  curveVertex(x44, 400);
  curveVertex(x45, y45);
  curveVertex(x46, 475);
  curveVertex(x47, 475);
  curveVertex(x48, y48);
  curveVertex(x48, y48);
  endShape(CLOSE);
  
}

function body(){
    line(220, 800, 220, 520); //Left outside of arm
  line(300, 800, 300, 600); //Left inside of arm
  line(380, 800, 380, 480); //Left side of jacket

  line(600, 800, 600, 520); //Right outside of arm
  line(520, 800, 520, 600); //Right inside of arm
  line(440, 800, 440, 480); //Right side of jacket

  //Left Side of Shirt
  fill(5, 30, 156);
  beginShape();
  vertex(220, 520);
  vertex(220, 800);
  vertex(300, 800);
  vertex(300, 600);
  vertex(300, 800);
  vertex(380, 800);
  vertex(380, 480);
  vertex(300, 480);
  endShape();
  fill(5, 30, 156);
  beginShape();
  curveVertex(220, 520);
  curveVertex(220, 520);
  curveVertex(240, 500);
  curveVertex(280, 485);
  curveVertex(380, 480);
  curveVertex(380, 480);
  endShape();

  line(320, 480, 360, 530); //Left jcollar left line
  line(360, 530, 380, 480); //Left jcollar right line

  //Right Side of Shirt
  fill(5, 30, 156);
  beginShape();
  vertex(600, 520);
  vertex(600, 800);
  vertex(520, 800);
  vertex(520, 600);
  vertex(520, 800);
  vertex(440, 800);
  vertex(440, 480);
  vertex(500, 480);
  endShape();
  fill(5, 30, 156);
  beginShape();
  curveVertex(440, 480);
  curveVertex(440, 480);
  curveVertex(520, 480);
  curveVertex(560, 500);
  curveVertex(600, 520);
  curveVertex(600, 520);
  endShape();
  bezier(440, 480, 520, 480, 560, 470, 600, 520); // Right shoulder
  line(600, 800, 600, 520); //Right outside of arm
  line(520, 800, 520, 600); //Right inside of arm
  line(440, 800, 440, 480); //Right side of jacket

  line(500, 480, 460, 530); //Right jcollar right line
  line(460, 530, 440, 480); //Right jcollar left line

  noFill();
  bezier(380, 480, 390, 500, 420, 500, 440, 480); //Shirt collar
  bezier(380, 500, 390, 510, 420, 510, 440, 500); //Shirt collar bottom
  bezier(220, 520, 240, 500, 280, 470, 380, 480); // Left shoulder
  bezier(440, 480, 520, 480, 560, 470, 600, 520); // Right shoulder
}

//function mousePressed(){
  //let d = (480, mouseY)
  //let d2 = (mouseX, 100)
  //if (d>480,d<=500 , d2>=100, d2<=120){
    //song.play();  
  //}
//}

//function doubleClicked(){
   //let e = mouseY
  //let e2 = mouseX
  //if (e2>=600, e2<=620, e>=100, e<=120){
    //song.stop();    
  //}
//}

//function mousePressed(){
  ///let d= dist(mouseX, mouseY, 50, 50)
  //if(d>480, d<500){
    //song.play();
  //}
//}


function draw(){
song.setVolume(volumeSlider.value());
colorSlider();
strokeWeight(4);
// circle pattern
for (x=0; x<= width; x+=100){
    fill(0, 0, 0);
    ellipse(x, x+50, 25, 25);
    ellipse(x+60, x+50, 25, 25);
    ellipse(x+120, x+50, 25, 25);
    ellipse(x+180, x+50, 25, 25);
}
head();
glasses();
eyes();
musicPlayer();
hair();
neck();
body();  
}







