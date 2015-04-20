pen.loadResources(function() {
	var canvas = document.getElementById('mainCanvas');
	var stage = new createjs.Stage(canvas);
	//Global Event Dispatcher
	//Have to learn more about event handling
	window.GED = stage;
	var game = new pen.Game({}, stage);

	pen.snd.themeLoop();

	/**
 
	 var e1 = game.addEnemy({
		x : 130,
		y : 10
	});
	var e2 = game.addEnemy({
		x : 270,
		y : -50
	});
	
	
	pen.test = function (){
		var elim = new pen.Elimination(e1,e2);
		game.addElimination(elim);
		//createjs.Ticker.addEventListener('tick', function(event) {elim.tick(event);});
		
	};
	
	*/
	
	
	

	createjs.Ticker.setFPS(30);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.addEventListener('tick', function(event) {
		game.tick(event);
	});
	
	
	
	
	
	
	
	//===============
	//==============
	//=======

	var paintCanvas = document.getElementById('paintCanvas');
	var paintStage = new createjs.Stage(paintCanvas);

	var p1 = null;
	var p2 = null;
	var draw = false;
	var drawColor = createjs.Graphics.getRGB(0xFFFFFF, 0.6);

	paintStage.enableDOMEvents(true);
	paintShape = new createjs.Shape();
	paintStage.addChild(paintShape);

	// add handler for stage mouse events:
	paintStage.on("stagemousedown", function(event) {
		p1 = new Vect(event.stageX, event.stageY);
		draw = true;
	});

	paintStage.on("stagemouseup", function(event) {
		if (p2 === null)
			p2 = new Vect();
		p2.x = event.stageX;
		p2.y = event.stageY;
		draw = false;
	});

	paintStage.on("mouseleave", function(event){
		//console.log("mouseleave");
		draw = false;
	});


	paintStage.on("stagemousemove", function(event) {
		//console.log("stagemousemove");
		if (draw) {
			if (p2 === null)
				p2 = new Vect();
			p2.x = event.stageX;
			p2.y = event.stageY;	
		}	
	});

	createjs.Ticker.addEventListener('tick', function(event) {
		if (p1 !== null && p2 !== null) {	
			
			paintShape.graphics.clear().beginStroke(drawColor).setStrokeStyle(10, "round").moveTo(p1.x, p1.y).lineTo(p2.x, p2.y);
			paintStage.update();
		}
	});

	var measure = 0;
	createjs.Ticker.addEventListener('tick', function(event){
		measure = (measure + 1) % 60;
		if(measure == 0)
		{
			jQuery('#fps').text('fps: ' + createjs.Ticker.getMeasuredFPS());
		}
	});

	
	

});
