// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;

function setup() {
  createCanvas(700, 700);
  noFill();

  background(190, 180, 160);
  //background(10, 40, 70);
  noLoop();
  strokeWeight(1.8);
  myTurtle = new Turtle();

  // for (let i = 0; i < 700; i += 6) {
  //   stroke(225, 50, 50);
  //   ellipse(width / 2 + 200 + i / 10, 100, i);
  // }
}

function draw() {
  // for (let i = 0; i < 5; i++) {
  //   push();
  //   translate(width / 2, height / 2);
  //   rotate(20 * i);
  //   translate(random(-40, 40), random(-40, 40));
  scale(0.9);
  //   drawCrane();
  //   pop();
  // }
  drawCrane();
}

function drawCrane() {
  push();
  translate(0, -10);

  myTurtle.penUp();
  //tail
  stroke(0);
  myTurtle.turnTo(-80);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 + 40 + i * 2, 480 + i * 2);
    drawTail(60);
  }

  //legs
  stroke(225, 50, 50);
  myTurtle.turnTo(25);
  for (let i = 0; i < 8; i++) {
    myTurtle.moveTo(width / 2 + 45 + i * 2, 480 + i * 2);
    drawLeg(130);
  }
  myTurtle.turnTo(15);
  for (let i = 0; i < 8; i++) {
    myTurtle.moveTo(width / 2 + 55 + i * 2, 465 + i * 2);
    drawLeg2(130);
  }

  //thigh
  stroke(255);
  myTurtle.turnTo(-80);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 + 35 + i * 2, 485 + i * 2);
    drawTail(55);
  }

  //body
  stroke(255);
  myTurtle.turnTo(105);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 + 90 + i * 2, 390 + i * 2);
    drawBody(90);
    myTurtle.moveTo(width / 2 + 100 + i * 2, 395 + i * 2);
    drawBody(80);
  }
  //right wing
  stroke(255);
  myTurtle.turnTo(-20);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 + 50 + i * 2, 280 + i * 2);
    drawWing(140);
    myTurtle.moveTo(width / 2 + 50 + i * 2, 290 + i * 2);
    drawWing(130);
  }

  stroke(0);
  myTurtle.turnTo(-5);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 + 45 + i * 2, 360 + i * 2);
    drawWing(90);
  }
  //left wing
  stroke(255);
  myTurtle.turnTo(-20);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 - 50 + i * 2, 280 + i * 2);
    drawWing(170);
    myTurtle.moveTo(width / 2 - 50 + i * 2, 295 + i * 2);
    drawWing(160);
  }

  stroke(0);
  myTurtle.turnTo(-10);
  for (let i = 0; i < 5; i++) {
    myTurtle.moveTo(width / 2 - 35 + i * 2, 355 + i * 2);
    drawWing(110);
  }

  //neck
  stroke(255);
  myTurtle.turnTo(-20);
  for (let i = 0; i < 10; i++) {
    myTurtle.moveTo(width / 2 - 40 - i * 2, height / 2 + 50 + i * 2);
    drawUpper(12);
    myTurtle.moveTo(width / 2 - 40 - i * 2, height / 2 + 52 + i * 2);
    drawUpper(12);
  }

  //black neck
  myTurtle.turnTo(0);
  for (let i = 0; i < 8; i++) {
    myTurtle.moveTo(width / 2 - 122 - i * 2, height / 2 + 29 + i * 2);
    drawNeckBlack(8);
  }

  pop();
}

function drawWing(length) {
  if (length < 55) {
    return;
  }
  myTurtle.penDown();
  myTurtle.pushState();

  for (let i = 0; i < 6; i++) {
    myTurtle.turnLeft(i * 2.15);
    myTurtle.moveForward(length * 0.21);
  }
  myTurtle.turnRight(155);
  //myTurtle.moveForward(length * 0.18);
  for (let i = 0; i < 9; i++) {
    myTurtle.moveForward(length * 0.155);
    myTurtle.turnRight(14.4 - i * 2);
  }
  myTurtle.turnLeft(175);
  drawWing(length * 0.88);
  myTurtle.popState();
  myTurtle.penUp();
}

function drawUpper(length) {
  myTurtle.penDown();
  //neck right
  myTurtle.pushState();
  myTurtle.turnLeft(195);
  for (let i = 0; i < 14; i++) {
    myTurtle.turnRight(15 - i * 0.7);
    myTurtle.moveForward(length + i * 0.6);
  }

  //face
  stroke(255);
  for (let i = 0; i < 90; i++) {
    myTurtle.turnLeft(5);
    myTurtle.moveForward(i * 0.01 + length * 0.1 * sin(radians(2 * i + 60)));
  }

  //head red
  stroke(225, 50, 50);
  myTurtle.penUp();
  myTurtle.turnRight(95);
  myTurtle.moveForward(15);
  myTurtle.penDown();
  for (let i = 0; i < 35; i++) {
    myTurtle.moveForward(i * 0.01 + length * 0.15 * sin(radians(2 * i + 20)));
    myTurtle.turnLeft(6);
  }
  myTurtle.turnRight(55);
  myTurtle.moveForward(75);
  myTurtle.turnRight(185);
  myTurtle.moveForward(75);
  stroke(255);
  myTurtle.popState();
  myTurtle.penUp();
}

function drawNeckBlack(length) {
  myTurtle.penDown();
  stroke(0);
  myTurtle.pushState();
  myTurtle.turnLeft(160);
  for (let i = 0; i < 14; i++) {
    myTurtle.turnRight(14 - i * 1.2);
    myTurtle.moveForward(length + i * 0.4);
  }

  for (let i = 0; i < 90; i++) {
    myTurtle.turnLeft(5);
    myTurtle.moveForward(i * 0.01 + length * 0.1 * sin(radians(2 * i + 60)));
  }
  myTurtle.popState();
  myTurtle.penUp();
}

function drawTail(length) {
  if (length < 35) {
    return;
  }
  myTurtle.penDown();
  myTurtle.pushState();

  for (let i = 0; i < 9; i++) {
    myTurtle.turnRight(i * 2.15);
    myTurtle.moveForward(length * 0.21);
  }
  myTurtle.turnRight(165);
  //myTurtle.moveForward(length * 0.18);
  for (let i = 0; i < 9; i++) {
    myTurtle.moveForward(length * 0.16);
    myTurtle.turnLeft(15 - i * 2.2);
  }
  myTurtle.turnLeft(178);
  drawTail(length * 0.9);
  myTurtle.popState();
  myTurtle.penUp();
}

function drawBody(length) {
  if (length < 35) {
    return;
  }
  myTurtle.penDown();
  myTurtle.pushState();

  for (let i = 0; i < 9; i++) {
    myTurtle.turnRight(i * 2.15);
    myTurtle.moveForward(length * 0.21);
  }
  myTurtle.turnRight(165);

  for (let i = 0; i < 9; i++) {
    myTurtle.moveForward(length * 0.16);
    myTurtle.turnLeft(15 - i * 2.2);
  }
  myTurtle.turnLeft(178);
  drawBody(length * 0.9);
  myTurtle.popState();
  myTurtle.penUp();
}

function drawLeg(length) {
  myTurtle.penDown();
  myTurtle.pushState();
  myTurtle.moveForward(length * 0.8);
  myTurtle.turnRight(10);
  myTurtle.moveForward(length * 1.2);
  myTurtle.turnRight(15);
  myTurtle.moveForward(length * 0.3);
  myTurtle.moveBackward(length * 0.3);
  myTurtle.turnLeft(15);
  myTurtle.moveForward(length * 0.2);

  myTurtle.popState();
  myTurtle.penUp();
}
function drawLeg2(length) {
  myTurtle.penDown();
  myTurtle.pushState();
  myTurtle.moveForward(length * 0.8);
  myTurtle.turnRight(55);
  myTurtle.moveForward(length * 1.2);
  myTurtle.turnRight(-15);
  myTurtle.moveForward(length * 0.3);
  myTurtle.moveBackward(length * 0.3);
  myTurtle.turnLeft(15);
  myTurtle.moveForward(length * 0.2);
  myTurtle.popState();
  myTurtle.penUp();
}

function keyPressed() {
  if ((key = "a")) {
    save(frameCount + ".png");
  }
}
