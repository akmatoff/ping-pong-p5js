/* eslint-disable no-undef, no-unused-vars */

var puck;
var player;
var gate1;
var gate2;
var gateHeight;
var gateWidth;
var fieldWidth = 1200;
var fieldHeight = 700;

var playerScore1 = 0;
var playerScore2 = 0;

var mouseSpeed = 0;

function setup() {
  createCanvas(fieldWidth, fieldHeight);
  noCursor();

  gateHeight = 280;
  gateWidth = 15;
  gate1 = new Gate(0, fieldHeight / 2 - gateHeight / 2, gateWidth, gateHeight);
  gate2 = new Gate(
    fieldWidth - gateWidth,
    fieldHeight / 2 - gateHeight / 2,
    gateWidth,
    gateHeight
  );
  puck = new Puck(fieldWidth / 2, fieldHeight / 2, 50);
  player = new Player(150, fieldHeight / 2, 80);
}

function draw() {
  background("#599460");

  gate1.draw();
  gate2.draw();
  puck.draw();
  player.draw();

  // gate1.checkCollision(puck);
  gate2.checkCollision(puck);
  puck.checkBoundaryCollision();
  player.checkBoundaryCollision();
  player.checkCollision(puck);

  mouseSpeed = abs(mouseX - pmouseX);
}

windowResized = function () {
  resizeCanvas(fieldWidth, fieldHeight);
};
