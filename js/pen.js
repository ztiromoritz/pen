pen.loadResources(function(){
	var canvas = document.getElementById("mainCanvas");
	var stage = new createjs.Stage(canvas);
	//Global Event Dispatcher
	//Have to learn more about event handling
	window.GED = stage;
	var game = new pen.Game({},stage);
	

	pen.snd.themeLoop();
	
	game.addEnemy();
	game.addEnemy();

	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener('tick', function(event){game.tick(event);} );


	//ui.hideInstructions();	
});
