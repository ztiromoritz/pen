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
	
	
	ui.showInstructions = function(){
		jQuery('#instructions').css('z-index','5').show();
	};
	
	ui.hideInstructions = function(){
		jQuery('#instructions').css('z-index','-1').hide();
	};
	
	
	ui.showMessage = function(title, message){
		jQuery('#message').css('z-index','5').show();
		jQuery('#message h1').html(title);
		jQuery('#message p').html(message);
	};
	
	
	ui.hideMessage = function(){
		jQuery('#message').css('z-index','-1').hide();
	};
	
	pen.ui = ui;
	
	
	
})(this.pen);
