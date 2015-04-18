(function(pen){
	
	var velocity = 0.4;
	
	var Ship = function(options){
		options = options || {};
		
		this.Container_constructor();
		this.body = new createjs.Shape();
		this.addChild(this.body);
		
		
		this.keyUp 		= KEY_W || options.keyUp;
		this.keyDown 	= KEY_S || options.keyDown;
		this.keyLeft	= KEY_A || options.keyLeft;
		this.keyRight 	= KEY_D || optione.keyRight;
	
		
		this.initBody();
	};
	
	var ship = createjs.extend(Ship, createjs.Container);
	
	ship.updatePosition = function(){
		this.x = 100;
		this.y = 100;
	};
	
	ship.initBody = function(){
		this.body.graphics.beginStroke('#000000').setStrokeStyle(4).drawRect(0,0,30,30);
		
		this.updatePosition();
	};
	
	
	ship.tick = function(event, state){
		var V = velocity * event.delta;  
		
		if(state.keys.contains(this.keyUp)){
			this.y -= V;
		}
		
		if(state.keys.contains(this.keyDown)){
			this.y += V;
		}
		
		if(state.keys.contains(this.keyLeft)){
			this.x -= V;
		}
		
		if(state.keys.contains(this.keyRight)){
			this.x += V;
		}
		
		
		this.updatePosition;
	};
	
	
	pen.Ship = createjs.promote(Ship,"Container");
	
})(this.pen);
