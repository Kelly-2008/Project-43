function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);

}

function draw() {
  background(0,0,0);  

  translate(200,200);
  rotate (-90);
  
  var hr = hour();
  var min = minute();
  var sc = second();

  strokeWeight(7);
  stroke(221,160,221);
  noFill();
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  stroke(138,43,226);
  var minAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);

  stroke(0,255,255);
  noFill();
  var hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  stroke(221,160,221);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(138,43,226);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke(0,255,255);
  line(0,0,50,0);
  pop();
  
  strokeWeight(9)
  stroke(160,82,45);
  point(0,0);
}