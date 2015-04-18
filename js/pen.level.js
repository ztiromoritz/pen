(function(pen){
	
	var levels = [];
	
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue'], x: 200 , y: -50 },
				{colors : ['red', 'blue', 'green'], x: 150 , y: -50 },
				{colors : ['red', 'green', 'blue'], x: 250,  y: -50 }
			]
		});
	
	
	pen.levels = levels;
	
	
})(this.pen);
