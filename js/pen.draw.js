var initDrawCanvas = function(){
	

	
	var paintCanvas = document.getElementById('paintCanvas');
	var paintStage = new createjs.Stage(paintCanvas);

	var p1 = null;
	var p2 = null;
	var direction = new Vect();
	var draw = false;
	var drawColor = createjs.Graphics.getRGB(0xFFFFFF, 0.6);
	var polyColor = createjs.Graphics.getRGB(0xFFFF00, 0.3);

	paintStage.enableDOMEvents(true);
	paintShape = new createjs.Shape();
	paintStage.addChild(paintShape);

	// add handler for stage mouse events:
	paintStage.on("stagemousedown", function(event) {
		p1 = new Vect(event.stageX, event.stageY);
		p2 = new Vect(event.stageX, event.stageY);
		draw = true;
		if(game.state.phase === DRAW)
		pen.snd.draw();
	});

	paintStage.on("stagemouseup", function(event) {
		if (p2 === null)
			p2 = new Vect();
		p2.x = event.stageX;
		p2.y = event.stageY;
		draw = false;
		
		if(p1 !== null && p2 !== null){	
			var event = new createjs.Event('drawLineFinished');
			event.p1 = p1.clone();
			event.p2 = p2.clone();
			GED.dispatchEvent(event);
		}
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
		
		if(game.state.phase === ATTACK){
			//optimize: Do this only once on switch to Attack handler.
			p1 = null;
			p2 = null;
			paintShape.graphics.clear();
			paintStage.update();
		}
		if (p1 !== null && p2 !== null) {			
			paintShape.graphics
				.clear()
				.beginStroke(drawColor)
				.setStrokeStyle(10, "round")
				.moveTo(p1.x, p1.y)
				.lineTo(p2.x, p2.y);
			
			direction.x = p1.x - p2.x;
			direction.y = p1.y - p2.y;
			direction.normalize();
			
			paintShape.graphics
				.beginStroke(drawColor)
				.setStrokeStyle(3)
				.moveTo(p1.x + 1000*direction.x, p1.y + 1000*direction.y)
				.lineTo(p1.x - 1000*direction.x, p1.y -1000*direction.y);
			
			if(draw)	
			{
				//	console.log(pen.ship.x);
				paintShape.graphics
					.setStrokeStyle(null)
					.beginFill(polyColor)
					.drawPolygon(0,0,pen.ship.x, pen.ship.y, p1.x, p1.y, p2.x, p2.y);
			}
			
			paintStage.update();
		}
	});
	
};
