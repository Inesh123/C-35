var canvas,backgroundImage,playerCount,database,form,player,game;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  
  
}


