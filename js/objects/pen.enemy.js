(function(pen) {

	var velocity = ENEMY_ENTER;
	
	var START_OFFSET = -100;
	
	var DRAW_DISTANCE = 100;
	
	var trans = createjs.Graphics.getRGB(0xFFFFFF, 0.0);
	
	
	var OUT = 800;

	
	var getVelocity = function(state) {
		switch(state.phase) {
		case ENTER:
			return ENEMY_ENTER;
		case DRAW:
			return ENEMY_DRAW;
		case ATTACK:
			return ENEMY_ATTACK;
		default:
			return 0;
		}

	};

	var Enemy = function(options, stage) {
		this.Container_constructor();
		this.body = new createjs.Shape();
		this.addChild(this.body);
		this.init( options );
		this.redrawBody();	
	};
	
	

	var enemy = createjs.extend(Enemy, createjs.Container);
	
	enemy.init = function(options){
		options = options || {};
		this.colors = def( options.colors, ['red', 'blue', 'green']);
		this.radius = this.colors.length * 10;
		this.disposable = false;
		this.x = def( options.x , 200 );
		this.y = def( options.y , 0 ) + START_OFFSET;
	};
	
	// steal the outmost color
	enemy.stealColor = function(){
		var color = this.colors.pop();
		if(this.colors.length == 0)
			this.disposable = true;			
		this.radius = this.colors.length * 10;
		this.redrawBody();
		
		return color;		
	};
	
	
	enemy.redrawBody = function() {
		var g = this.body.graphics;
		g.clear();
		g.beginFill(trans);
		g.setStrokeStyle(null);

		var l = this.colors.length;
		while (l--) {
			g.beginFill(getColor(this.colors[l])).drawCircle(0, 0, (l + 1 ) * 10);
		}
	};

	enemy.tick = function(event, state) {
		var v = getVelocity(state) * event.delta;
		this.y += v;
			
		if(state.phase === ENTER && this.y > DRAW_DISTANCE){
			GED.dispatchEvent('enemiesInDraw');
		};
		
		if(this.y > OUT) 
		{
			var e = new createjs.Event('boo');
			e.enemy = this;
			GED.dispatchEvent(e);
		}	
	};

	pen.Enemy = createjs.promote(Enemy, "Container");

})(this.pen);
