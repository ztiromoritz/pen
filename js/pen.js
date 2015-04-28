pen.loadResources(function() {
	


	var startGame = function(){
		var canvas = document.getElementById('mainCanvas');
		var stage = new createjs.Stage(canvas);
		//Global Event Dispatcher
		//Have to learn more about event handling, this seems to be a hack
		window.GED = stage;
		window.game = new pen.Game({}, stage);
	
		pen.snd.themeLoop();
		createjs.Ticker.setFPS(30);
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.addEventListener('tick', function(event) {
			game.tick(event);
		});
		
		initDrawCanvas();
	};
	
	
	window.onkeydown = function(e) {
		pen.ui.hideMessage();
		pen.ui.hideInstructions();
		startGame();		
	};

	
	pen.ui.hideInstructions();
	pen.ui.showMessage('<span style="color: red;">Discord Seeder</span>', 
	'<it>"If his forces are united, separate them."</it><br>-Sun Tzu, The Art of War <br><br>(Press any key to start)');
	pen.ui.showInstructions();
	

});
