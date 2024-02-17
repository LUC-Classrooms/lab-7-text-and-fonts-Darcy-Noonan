/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(600, 240);
  textFont("Comic Sans");
}

function draw() {
  background(200);
  if(mouseIsPressed){
  textSize(20);
  text("Its as easy as 01 10 11.", 20, 140);}
  else {
    textSize(30);
    text("How easy is it to count in binary code?", 20, 140);}
}