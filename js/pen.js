jQuery(function(){
	var canvas = document.getElementById("mainCanvas");
	var stage = new createjs.Stage(canvas);
	var ctx = canvas.getContext('2d');
	
	var ship = new pen.Ship();
	
	var ticker = createjs.Ticker;
	
	ticker.addEventListener('tick', pen.game.tick(stage,[ship]) );
	
});
