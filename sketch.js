var gameState= 0;
var playerCount;
var database;
var form,player,game;
var distance=0;
var allPlayers;


function setup(){
    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
    background("white");
   
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}

