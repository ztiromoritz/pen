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
		
		this.vulnerable = true;
		
		this.x = 200 ;
		this.y = 500;
	};

	var ship = createjs.extend(Ship, createjs.Container);


	ship.initBody = function() {
		this.body.graphics
			.beginFill('#FFFFFF')
			.beginStroke(null)
			.drawCircle(0, 0, this.radius);
			
		this.blinkTween = createjs.Tween.get(this.body,{loop:true, paused: true}).to({ alpha:0 }, 70).to({alpha: 1},70);
	};
	
	ship.hit = function(){
		var self = this;
		this.vulnerable = false;
		this.blinkTween.setPaused(false);
		setTimeout(
			function(){ 
				self.vulnerable = true; 
				self.blinkTween.setPaused(true); 
				self.body.alpha=1;
			}, 
			1500
		);
	};
	
	ship.blink = function(){
		//this.blinkTween.play(this.blinkTween);
		//createjs.Tween.play(this.blinkTween);
	};
	
	
	/**
	 * Garfunkel TODO Syntax:
	 *  _.v(enemy.x, enemy.y)  to  _(enemy.x, enemy.y)
	 * Equation.dispose(_);   to _.dispose();
	 * 
	 */
	ship.collides = function(enemy){
		var minDist = enemy.radius + this.radius;
		var dist = new Vect(enemy.x,enemy.y).sub(new Vect(this.x,this.y)).length();
		
		
		//var _ = Equation.get();
		
		/**
		 Strange Bug. Equation seems not to be stable
		var v_enemy = _.v(enemy.x,enemy.y);
		var v_ship = _.v(this.x,this.y);
		
		var dist = _.sub( v_enemy , v_ship ).length();	
		//console.log(" Vect " + enemy.x + " " + enemy.y  + "_.v "+ v_enemy );
		*/
		//Equation.dispose(_);
		
		return (dist <= minDist);			
	};

	ship.tick = function(event, state) {
		var V = velocity * event.delta;

		if (state.hasKey(this.keyUp)) {
			this.y -= V;
		}

		if (state.hasKey(this.keyDown)) {
			this.y += V;
		}

		if (state.hasKey(this.keyLeft)) {
			this.x -= V;
		}

		if (state.hasKey(this.keyRight)) {
			this.x += V;
		}			
	};

	pen.Ship = createjs.promote(Ship, "Container");

})(this.pen);
