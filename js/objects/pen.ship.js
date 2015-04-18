(function(pen) {

	var velocity = SHIP_VELOCITY;

	var Ship = function(options) {
		options = options || {};

		this.Container_constructor();
		this.body = new createjs.Shape();
		this.addChild(this.body);

		this.keyUp = KEY_W || options.keyUp;
		this.keyDown = KEY_S || options.keyDown;
		this.keyLeft = KEY_A || options.keyLeft;
		this.keyRight = KEY_D || optione.keyRight;
		
		this.radius = 30;

		this.initBody();
		
		this.x = 200 ;
		this.y = 500;
	};

	var ship = createjs.extend(Ship, createjs.Container);


	ship.initBody = function() {
		this.body.graphics
			.beginFill('#FFFFFF')
			.beginStroke(null)
			.drawCircle(0, 0, this.radius);
	};

	ship.tick = function(event, state) {
		var V = velocity * event.delta;

		if (state.keys.contains(this.keyUp)) {
			this.y -= V;
		}

		if (state.keys.contains(this.keyDown)) {
			this.y += V;
		}

		if (state.keys.contains(this.keyLeft)) {
			this.x -= V;
		}

		if (state.keys.contains(this.keyRight)) {
			this.x += V;
		}
	};

	pen.Ship = createjs.promote(Ship, "Container");

})(this.pen);
