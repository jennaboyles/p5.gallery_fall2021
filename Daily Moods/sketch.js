function setup() {
  createCanvas(360, 360);
}

function draw() {

  background(255,204,204);
  //noFill()
  //leave circle gray with outlline//
  fill(255,204,153)
  ellipse(180,100,160)
  
  

  
//  MOVED SECTION DOWN SO HAIR WAS IN FRONT OF BODY strokeWeight(100) 
  // fill(153, 102, 51)
  //beginShape()
  //making hair, trying to make it look wavy//
 // curveVertex(180,20)
 // curveVertex(mouseX, mouseY) messing around to see where i wanted to hair to lay//
 // curveVertex(130,100)
  //not what i wanted but think it looks cute since i have curly hair irl//
 // curveVertex(130,80)
 // curveVertex(130,200)
 // curveVertex(80, 288)

 // curveVertex(100,74)
 // curveVertex(118,60) mistakes 
 // curveVertex(100,60)
 // endShape(CLOSE)
  //wanted to refect the side but did not know how to without it messing up image//
  
  //fill(153, 102, 51)
//  beginShape()
 //curveVertex(180,20)
 // curveVertex(190,17)
//  //does the order you make points affecr the outcome?//
 // curveVertex(257,80)
  //curveVertex(250,288)
 // curveVertex(230,200)
 // curveVertex(257,99)
 //  endShape(CLOSE)
  //cannot move hair to front//
  
  
  fill(77,153,51)
  ellipse(180,350,270)
  //body
 // arc(130,260,100,100)//still cant figure out how to make arcs work
    //strokeWeight(100) 
   fill(153, 102, 51)
  beginShape()
  //making hair, trying to make it look wavy//
  curveVertex(180,20)
 // curveVertex(mouseX, mouseY) messing around to see where i wanted to hair to lay//
  curveVertex(130,100)
  //not what i wanted but think it looks cute since i have curly hair irl//
  curveVertex(130,80)
  curveVertex(130,200)
  curveVertex(80, 288)

  curveVertex(100,74)
 // curveVertex(118,60) mistakes 
 // curveVertex(100,60)
  endShape(CLOSE) 
  
   fill(153, 102, 51)
  beginShape()
 curveVertex(180,20)
  curveVertex(190,17)
  //does the order you make points affecr the outcome?//
  curveVertex(257,80)
  curveVertex(250,288)
  curveVertex(230,200)
  curveVertex(257,99)
   endShape(CLOSE)
  //cannot move hair to front//
  
  //sunglasses//
 fill(51,51,0)
  square(110, 60, 55, 20);
  square(190,60, 55, 20)
  strokeWeight(7)
  line(165,80,190,80)
  
  fill(255,204,153)
   ellipse(180, 200, 60,40);
 // ellipse(230,195, 45, 55) wanted to try to make neck out of ovals, did not work: wanted it same color as skin but did not like look 
  
  
    line(150,140,210,140)

   
  
  //function mouth2(){
  //smile//
  //scale(0.7);
  //rotate(PI); didnt work 
 // noStroke()  
   
  if (mouseIsPressed){
    fill(255,16,16)
     scale(0.7)  
  arc(257,199,100,100,TWO_PI,PI);
  }else{
    
  }
   
//let value = 0;
//function draw() {
//  fill(255,16,16);
 // scale(0.7)
// arc(265,199,100,100,TWO_PI,PI);
//}
//function keyPressed() {
//  if (value === 0) {
 //   value = 255,16,16;
  //} else {
  //  value = 0;
  //}
//}

  
  
  
  
  
 // fill(255,204,153)
  // ellipse(180, 200, 60,40);
 // ellipse(230,195, 45, 55) wanted to try to make neck out of ovals, did not work: wanted it same color as skin but did not like look 




}

