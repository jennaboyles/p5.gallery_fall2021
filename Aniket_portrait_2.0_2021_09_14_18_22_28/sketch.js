let img;
function preload() {
  img = loadImage('matrix.png');
  myFont = loadFont('mtrx.ttf')
}

function setup() {
  createCanvas(500, 500);
}

var strWeight = 1;

function face() {
  // face outline
  fill(149, 94, 74)
  beginShape();
  vertex(345, 255);
  vertex(346, 242);
  vertex(340, 218);
  vertex(324, 203);
  vertex(308, 202);
  vertex(298, 209);
  vertex(278, 214);
  vertex(262, 213);
  vertex(237, 225);
  vertex(238, 239);
  vertex(224, 261);
  vertex(222, 280);
  vertex(214, 290);
  vertex(213, 284);
  vertex(209, 279);
  vertex(208, 267);
  vertex(201, 263);
  vertex(193, 264);
  vertex(192, 268);
  vertex(191, 287);
  vertex(202, 313);
  vertex(214, 314);
  vertex(220, 337);
  vertex(233, 349);
  vertex(276, 369);
  vertex(290, 372);
  vertex(314, 367);
  vertex(318, 364);
  vertex(342, 300);
  vertex(343, 267);
  vertex(345, 255);
  endShape(CLOSE);
  
  // hair outline
  fill(0)
  beginShape();
  vertex(350, 214);
  vertex(349, 207);
  vertex(355, 196);
  vertex(352, 192);
  vertex(332, 176);
  vertex(321, 162);
  vertex(295, 151);
  vertex(289, 154);
  vertex(271, 148);
  vertex(262, 152);
  vertex(259, 149);
  vertex(242, 158);
  vertex(228, 163);
  vertex(226, 166);
  vertex(216, 168);
  vertex(210, 182);
  vertex(214, 181);
  vertex(213, 184);
  vertex(201, 200);
  vertex(189, 240);
  vertex(196, 249);
  vertex(195, 263);
  vertex(201, 263);
  vertex(208, 267);
  vertex(209, 279);
  vertex(213, 284);
  vertex(214, 290);
  vertex(222, 280);
  vertex(225, 262);
  vertex(239, 238);
  vertex(237, 224);
  vertex(254, 218);
  vertex(266, 213);
  vertex(276, 214);
  vertex(298, 210);
  vertex(310, 203);
  vertex(326, 204);
  vertex(341, 220);
  vertex(346, 242);
  vertex(347, 227);
  vertex(350, 220);
  endShape(CLOSE);
  
}

function faceFeatures() {
  // right eyebrow
  fill(0);
  beginShape();
  vertex(245, 244);
  vertex(265, 230);
  vertex(286, 232);
  vertex(289, 237);
  vertex(262, 238);
  vertex(245, 244);
  endShape(CLOSE);
  
  // left eyebrow
  fill(0);
  beginShape();
  vertex(319, 242);
  vertex(318, 240);
  vertex(321, 237);
  vertex(339, 242);
  vertex(344, 248);
  vertex(338, 245);
  endShape(CLOSE);
  
  // ear lines
  noFill();
  beginShape();
  vertex(192, 268);
  vertex(198, 269);
  vertex(203, 274);
  vertex(205, 279);
  endShape();
  
  line(192, 288, 196, 276)
  
  noFill();
  beginShape();
  vertex(209, 282);
  vertex(208, 284);
  vertex(205, 279);
  vertex(201, 286);
  endShape();
  
  noFill();
  beginShape();
  vertex(209, 290);
  vertex(214, 297);
  vertex(213, 298);
  vertex(203, 295);
  vertex(201, 292);
  endShape();
  
  // eye lines
  noFill();
  beginShape();
  vertex(247, 250);
  vertex(262, 244);
  vertex(281, 242);
  vertex(289, 248);
  endShape();
  
  fill(255);
  beginShape();
  vertex(255, 250);
  vertex(256, 248);
  vertex(271, 245);
  vertex(278, 246);
  vertex(286, 252);
  endShape();
  
  fill(0);
  ellipse(272, 248, 7, 5);

  // eyes
  noFill();
  beginShape();
  vertex(315, 250);
  vertex(320, 248);
  vertex(330, 249);
  endShape();
  
  fill(255);
  beginShape();
  vertex(316, 256);
  vertex(327, 250);
  vertex(338, 254);
  vertex(339, 256);
  vertex(338, 257)
  endShape();
  
  fill(0);
  ellipse(330, 254, 6.5, 4.5)
  
  // nose outline
  noFill();
  beginShape();
  vertex(315, 250);
  vertex(323, 288);
  vertex(317, 292);
  vertex(310, 293);
  vertex(300, 286);
  vertex(292, 291);
  vertex(295, 293);
  endShape();
  
  fill(0);
  beginShape();
  vertex(300, 286);
  vertex(293, 291);
  vertex(304, 290);
  endShape(CLOSE);
  
  // lips outline
  noFill();
  beginShape();
  vertex(276, 320);
  vertex(281, 320);
  vertex(289, 318);
  vertex(319, 317);
  vertex(321, 320);
  vertex(317, 324);
  endShape();
  
  noFill();
  beginShape();
  vertex(288, 323);
  vertex(294, 323);
  vertex(297, 325);
  endShape();
  
  noFill();
  beginShape();
  vertex(292, 312);
  vertex(294, 311);
  vertex(301, 310);
  vertex(303, 311);
  endShape();
  
  noFill();
  beginShape();
  vertex(309, 313);
  vertex(311, 310);
  vertex(315, 309);
  vertex(316, 310);
  endShape();
  
  noFill();
  beginShape();
  vertex(306, 301);
  vertex(306, 304);
  vertex(308, 305);
  endShape();
}

function body() {
  // neck outline
  fill(58, 2, 2);
  beginShape();
  vertex(224, 341);
  vertex(218, 368);
  vertex(256, 392);
  vertex(276, 400);
  vertex(286, 402);
  vertex(296, 401);
  vertex(306, 398);
  vertex(316, 393);
  vertex(320, 387);
  vertex(315, 366);
  vertex(290, 372);
  vertex(276, 369);
  vertex(233, 349);
  endShape(CLOSE);
  
  // body outline
  fill(75, 9, 9);
  beginShape();
  vertex(116, 500);
  vertex(120, 470);
  vertex(144, 420);
  vertex(180, 389);
  vertex(218, 368);
  vertex(256, 392);
  vertex(276, 400);
  vertex(286, 402);
  vertex(296, 401);
  vertex(306, 398);
  vertex(316, 393);
  vertex(320, 387);
  vertex(330, 392);
  vertex(338, 396);
  vertex(346, 399);
  vertex(362, 406);
  vertex(378, 424);
  vertex(390, 453);
  vertex(393, 500);
  endShape();
  
  // lines to mark hands
  line(210, 500, 215, 480);
  line (350, 500, 347, 485); 
}

function draw() {
  background(0, 21, 80);
  // loads background image
  image(img, 0, 0, 500, 500);
  
  // prints growing tunnel over bg
  for (let i = 0; i < 501; i++) {
  stroke(random(255), random(255), random(255));
  strokeWeight(strWeight);
  fill(random(0, 10), random(20, 255), random(0, 10));
  arc(i, i, i/3, i/3, (i)*(i/2)*PI, (1 - (i/2))*PI);
  i += 5;
}
  // sets stroke to a different value
  stroke(0);
  strokeWeight(strWeight + 2);
  
  // functions are called here
  face();
  faceFeatures();
  body();
  
  // matrix logo starts flashing and "data transfer" speed quadruples
  if (keyIsPressed === true) {
    // text on shirt
    push();
    textSize(18);
    textFont(myFont)
    noStroke();
    frameRate(20);
    fill(0, random(40, 200), 0);
    text('M', 275, 390)
    pop();
  }
  
  // matrix logo is off and "data transfer" is slow
  else {
    push();
    textSize(18);
    textFont(myFont)
    noStroke();
    frameRate(5);
    fill(100, 100, 100);
    text('M', 275, 390)
    pop();
  }
  
}