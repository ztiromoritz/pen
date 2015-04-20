(function(pen) {

	var velocity = ENEMY_ENTER;
	
	var START_OFFSET = -100;
	
	var DRAW_DISTANCE = 100;
	
	var EPSILON = 0.05;
	
	var trans = createjs.Graphics.getRGB(0xFFFFFF, 0.0);
	
	

	var Elimination = function(enemy1, enemy2) {
		this.Container_constructor();
		this.body = new createjs.Shape();
		this.addChild(this.body);
		
		
		this.e1 = enemy1;
		this.e2 = enemy2;
		
		this.r1 = this.e1.radius;
		this.r2 = this.e2.radius;
		
		this.p1 = new Vect(this.e1.x, this.e1.y);
		this.p2 = new Vect(this.e2.x, this.e2.y);
		
		//this.p1_current = this.p1.clone();
		//this.p2_current = this.p2.clone();
		
		this.connect = this.p2.clone().sub(this.p1);
		this.distance = this.connect.length();
	
		this.currentDistance = this.distance;
		this.position = 0; //  [0..1]
		
		
		
		this.color = this.e1.stealColor(); //color should be the same
		this.e2.stealColor();
		
		this.clear = false; 			//in clear anmation;
		this.disposable = false;		//clear animation finised
		
		this.init(); 	
	};
	
	

	var elimination = createjs.extend(Elimination, createjs.Container);
	
	elimination.init = function(){
		
	};
	
	
	 // Garfunkel: _.v(x,y)  -> _.v(p) 
	 // to copy external Vect to equation 	
	elimination.drawEliminate = function(p1_current, p2_current) {
		this.body.graphics
			.clear()
			.setStrokeStyle(null)
			.beginFill(getColor(this.color))
			.drawCircle(p1_current.x, p1_current.y, this.r1)
			.endFill()
			.beginFill(getColor(this.color))
			.drawCircle(p2_current.x, p2_current.y, this.r2);
			
	};
	
	elimination.drawClear = function(){
		var self = this;
		this.clear = true;
		createjs.Tween
			.get(this.body, {})
			.to({ alpha:0}, 300)
			.call(function(){self.disposable = true;});
	};

	elimination.tick = function(event, state) {
		if(this.clear)
			return;
		var v = ELIMINATION * event.delta;
		this.position += v;
		
		var pos = this.position / this.distance;
		
		var p1_current = this.p1.clone().add(this.connect.clone().mul(pos));
		var p2_current = this.p1.clone().add(this.connect.clone().mul(1-pos));
		var distance_current = p2_current.clone().sub(p1_current).length();
		
		//console.log(pos);
		if(pos > 0.5){
			this.drawClear();
		}else{
			this.drawEliminate(p1_current, p2_current);
		}
	};

	pen.Elimination = createjs.promote(Elimination, "Container");

})(this.pen);
