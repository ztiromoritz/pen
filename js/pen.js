jQuery(function(){
	var canvas = document.getElementById("mainCanvas");
	var stage = new createjs.Stage(canvas);
	var ctx = canvas.getContext('2d');
	
	pen.game.init();
	pen.game.bind();
	
	var ship = new pen.Ship();
	
	var enemy = new pen.Enemy();
	
	var bg = new pen.Background();
	
	

	stage.addChild(bg);
	stage.addChild(ship);
	stage.addChild(enemy);
	
	
	
	createjs.Ticker.setFPS(50);
	createjs.Ticker.addEventListener('tick', pen.game.tick(stage,[ship,bg,enemy]) );
	
});
