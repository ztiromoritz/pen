(function(pen){
	
		var velocity = 0.5;
	
		var Background = function(option){
			
			options = options || {};
			
			this.Container_constructor;
			this.bitmapA = new createjs.Bitmap('background.png'); // TODO: usw twice
			this.bitmapB = new createjs.Bitmap('background.png');
			
			this.addChild(this.bitmapA);
			
			this.initBody();
			
		};
		
		
		var bg = createjs.extend(Background, createjs.Container);
		
		
		bg.tick = function(event, state){
			var V = velocity * event.delta; 
			this.bitmapA.y += V;
			this.bitmapB.y += V;
		};
		
		bg.initBody = function(){
			
		};
		
		
	
	
})();
