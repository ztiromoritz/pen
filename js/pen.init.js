window.pen = {};

var Vect = Garfunkel.Vect;
var Equation = Garfunkel.Equation;

var SHIP_VELOCITY = 0.4;
var ENEMY_ENTER = 0.2;
var ENEMY_DRAW = 0.0;
var ENEMY_ATTACK = 0.2;
var BG_DRIFT = 0.8;


//Game Phases

var MENU		= 'menu';	
var INIT 		= 'init';
var ENTER 		= 'enter';
var DRAW 		= 'draw';
var ATTACK		= 'attack';

var LOGGING_ENABED = true;
pen.log = function(msg){
	if(LOGGING_ENABED)
		console.log(msg);
};


$(function(){
	tools.resize('#container', 0.1); //TODO: device dependend, responsive
});
