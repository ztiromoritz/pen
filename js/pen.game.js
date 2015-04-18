(function(pen){
	var game = {};
	
	var state = {};
	
	var onESC;
	
	game.clearState = function(){
		state.keys = new MinimalSet();
		state.phase = 'enter';  
	};
	game.clearState();
	
	
	var handleKeyDown = function(e){
		var evt = e || window.event;
		if(e.keyCode === 27 && !!onEESC) //ESC
			onESC();
		state.keys.add(e.keyCode);	
	};
	
	var handleKeyUp = function(e){
		var evt = e || window.event;
		state.keys.remove(e.keyCode);	
	};
	
	
	game.init = function(options){
		options = options || {};
		
		onESC = options.onESC || function(){};
	};

	game.bind = function(){
		window.onkeydown = handleKeyDown;
		window.onkeyup   = handleKeyUp;	
	};
	
	game.tick = function(stage, objects){
		
		object = objects || {};
		
		return function (event){
			var l = object.length;
			while(l--){
				object[l].tick(event, state);
			}
			stage.update(event);
		};
		
	};
	
	pen.game = game;
	
})(this.pen);
