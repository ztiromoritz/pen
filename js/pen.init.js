window.pen = {};

var Vect = Garfunkel.Vect;
var Equation = Garfunkel.Equation;

var SHIP_VELOCITY = 0.2;
var ELIMINATION = 0.17;
var ENEMY_ENTER = 0.2;
var ENEMY_DRAW = 0.0;
var ENEMY_ATTACK = 0.2;
var BG_DRIFT = 0.8;


//Game Phases

var MENU		= 'menu';	
var INIT 		= 'init';
var ENTER 		= 'enter';
var DRAW 		= 'draw';
var DRAW_ELIMINATION = 'draw_elimination';
var ATTACK		= 'attack';
var WON			= 'won';
var LOST		= 'lost';

var LOGGING_ENABED = true;
pen.log = function(msg){
	if(LOGGING_ENABED)
		console.log(msg);
};


var getColor = function(color) {

	switch(color) {
	case 'red':
		return '#EE1111';
	case 'blue':
		return '#1122EE';
	case 'green':
		return '#11FF22';

	}
	
};

//FPS
var measure = 0;
createjs.Ticker.addEventListener('tick', function(event){
	measure = (measure + 1) % 60;
	if(measure == 0)
	{
		jQuery('#fps').text('fps: ' + createjs.Ticker.getMeasuredFPS());
	}
});



$(function(){
	tools.resize('#container', 0.1); //TODO: device dependend, responsive
});
