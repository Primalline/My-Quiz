var gameState = 0;
var canvas;
var contestantCount, contestant;
var quiz, question, database;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz(425, 200);
}

function draw(){
  background("pink");

  quiz.getState();
  quiz.update();
  quiz.display();

  drawSprites();
}