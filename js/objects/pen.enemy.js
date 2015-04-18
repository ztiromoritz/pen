(function(pen){
	
	
	var velocity = ENEMY_ENTER;
	
	
	
	var c = function(color){
		
		switch(color){
			case 'red':
				return '#EE1111';
			case 'blue':
				return '#11FF22';
			case 'green':
				return '#1122EE';
			
		}
		
	};
	
	var getVelocity =  function(state){
		switch(state.phase){
			case 'enter':
				return ENEMY_ENTER;
			case 'draw':
				return ENEMY_DRAW;
			case 'attack':
				return ENEMY_ATTACK;
			default:
				return 0;	
		}
		
	};
	
	
	
	
	var Enemy = function(options){
		
		options = options || {};
		
		this.Container_constructor();
		this.body = new createjs.Shape();
		this.addChild(this.body);
		
		
		this.colors = options.colors || ['red', 'blue', 'green'];
		
		
		this.initBody();
		
		this.x = 200;
		this.y = -50;
		
	};
	
	var enemy = createjs.extend(Enemy, createjs.Container);


	enemy.initBody = function() {
		var g = this.body.graphics;
		g.beginStroke(null);
		
		var l = this.colors.length;
		while(l--){
			g.beginFill(c(this.colors[l])).drawCircle(0,0,(l + 1 )*10);
		}
	};
	
	
	enemy.tick = function(event, state){
		var v = getVelocity(state) * event.delta;
		this.y += v;
	};
	
	pen.Enemy = createjs.promote(Enemy, "Container");
	
	
})(this.pen);
