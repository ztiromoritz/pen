(function(pen){
	var LIVES = '••••••••••••••••••••••••••••••••••••••••';
	
	var ui = {};
	
	
	
	ui.setLives = function( points ){
		jQuery('#lives').text(LIVES.substr(0,points));
	};
	
	
	ui.showDrawMessage = function(){
		jQuery('#message').text(
			"Enemies within reach. Discord seeder activated."
		);
	};
	
	
	ui.showInstruction = function(){
		jQuery('#instructions').css('z-index','5');
	};
	
	ui.hideInstruction = function(){
		jQuery('#instructions').css('z-index','-1');
	};
	
	pen.ui = ui;
	
	
	
})(this.pen);
