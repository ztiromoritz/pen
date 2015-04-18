(function(pen){
	
	var Ship = function(options){
		options = options || {};
		
		this.Container_constructor();
		this.body = new createjs.Shape();
		this.addChild(this.body);
		
		this.initBody();
	};
	
	var ship = createjs.extend(Ship, createjs.Container);
	
	ship.initBody = function(){
		this.body.graphics.beginFill('#0066FF').drawRect(0,0,30,30);
	};
	
	
	ship.tick = function(event){
		
	};
	
	
	pen.Ship = createjs.promote(Ship,"Container");
	
})(this.pen);
