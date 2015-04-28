(function(pen) {

	var velocity = BG_DRIFT;

	var Background = function(options) {

		options = options || {};

		this.Container_constructor();
		this.bitmapA = new createjs.Bitmap(pen.assets['background.png']);
		this.bitmapB = this.bitmapA.clone();
		
		
		this.height = this.bitmapA.getBounds().height;
		this.viewHeight = options.viewHeight || 600;
		

		this.addChild(this.bitmapA, this.bitmapB);

		this.initBody();

	};

	var bg = createjs.extend(Background, createjs.Container);

	bg.tick = function(event, state) {
		if(state.freeze)
			return;
		var V = velocity * event.delta;
		this.bitmapA.y += V;
		this.bitmapB.y += V;
		
		if(this.bitmapA.y > this.viewHeight)
			this.bitmapA.y = this.bitmapB.y - this.viewHeight;
			
		if(this.bitmapB.y >= this.viewHeight)
			this.bitmapB.y = this.bitmapA.y - this.viewHeight;
	};

	bg.initBody = function() {
		this.bitmapA.y = - this.viewHeight;
	};
	
	
	pen.Background = createjs.promote(Background, "Container");
	

})(this.pen);
