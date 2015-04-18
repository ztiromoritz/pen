pen.loadResources(function(){
	var canvas = document.getElementById("mainCanvas");
	var stage = new createjs.Stage(canvas);
	var ctx = canvas.getContext('2d');
	
	pen.game.init({},stage);	
	
	//hack because i dont get the event handling
	window.stage = stage;
	
	var ship = new pen.Ship();
	var bg = new pen.Background();
	stage.addChild(bg);
	stage.addChild(ship);
	
	
	pen.game.addEnemy();

	
	createjs.Ticker.setFPS(50);
	createjs.Ticker.addEventListener('tick', pen.game.tick(stage,[ship,bg]) );
	
});
