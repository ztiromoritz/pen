(function(pen) {

	var velocity = ENEMY_ENTER;
	
	var START_OFFSET = -100;
	var OUT = 800;

	var c = function(color) {

		switch(color) {
		case 'red':
			return '#EE1111';
		case 'blue':
			return '#11FF22';
		case 'green':
			return '#1122EE';

		}

	};

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
		this.initBody();	
	};
	
	

	var enemy = createjs.extend(Enemy, createjs.Container);
	
	enemy.init = function(options){
		options = options || {};
		this.colors = def( options.colors, ['red', 'blue', 'green']);
		this.radius = this.colors.length * 10;
		this.x = def( options.x , 200 );
		this.y = def( options.x , 0 ) + START_OFFSET;
	};
	
	
	enemy.initBody = function() {
		var g = this.body.graphics;
		g.beginStroke(null);

		var l = this.colors.length;
		while (l--) {
			g.beginFill(c(this.colors[l])).drawCircle(0, 0, (l + 1 ) * 10);
		}
	};

	enemy.tick = function(event, state) {
		var v = getVelocity(state) * event.delta;
		this.y += v;
			
		if(this.y > OUT) 
		{
			var e = new createjs.Event('boo');
			e.enemy = this;
			GED.dispatchEvent(e);
		}	
	};

	pen.Enemy = createjs.promote(Enemy, "Container");

})(this.pen);
