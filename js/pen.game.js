(function(pen){
	var game = {};
	
	var state = function(){
		state.keys = new MinimalSet();
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
