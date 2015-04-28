(function(pen){
	var snd = {};
	
	
	
	var enabled = true;
	
	var loopEnabled = true;

	var play = function( filename ){
    		
    	var df = document.createDocumentFragment();
    	return function () {
    		if(!enabled)
    			return null;
	        var snd = new Audio( filename );
	        df.appendChild(snd); // keep in fragment until finished playing
	        snd.addEventListener('ended', function () {df.removeChild(snd);});
	        snd.play();
	        return snd;
    	};
    	
	
    };
    
  
  	snd.plong = play('data:audio/mp3;base64,' + effects.plong.wav);
  	snd.elim = play('data:audio/mp3;base64,' + effects.elim.wav);
  	snd.draw = play('data:audio/mp3;base64,' + effects.draw.wav);
  	snd.hit	 = play('data:audio/mp3;base64,' + effects.hit.wav);

    var themeLoop = function(){
    	if(!loopEnabled)
    		return;
    	var loop1 = jQuery('<audio id="audio_1" preload autoplay loop volume="0.2">')
    		.prop('volume', 0.2)
    		.append('<source id="mp3" src="data:audio/mp3;base64,'+raw.theme1.mp3+'"></source>')
    		.append('<source id="mp3" src="data:audio/ogg;base64,'+raw.theme1.ogg+'"></source>');
    	
   
    };
    
    
   	snd.themeLoop = themeLoop;
    
  
	
	pen.snd = snd;
})(this.pen);
