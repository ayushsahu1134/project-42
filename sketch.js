var canvas,backgroundImage;

var gameState = 0;
var playerCount=0;
var database;

var form,player,game;

var allPlayers;

var cars,car1,car2,car3,car4;

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount===4){
        game.updateState(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }
}