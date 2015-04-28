(function(pen){
	
	var levels = [];
	
	
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue'], x: 200,  y: 0 }
			],
			timeout : 0
		});
		
		
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue', 'red', 'green'], x: 200,  y: 0 }
			],
			timeout : 0
		});
	
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue', 'red', 'green','blue','green'], x: 200,  y: 0 }
			],
			timeout : 0,
			message : 'they grow'
		});
		
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue', 'red', 'green','blue','green'], x: 200,  y: 0 }
			],
			timeout : 0,
			message : 'Press E for fire!'
			
	});	
	
	
	levels.push({ 
			enemies : [
				{colors : ['green'], x: 50,  y: 0 }
			],
			timeout : 0,
			message : 'Sorry'
			
	});	
		
	
	
		
	levels.push({ 
			enemies : [
				{colors : ['red', 'green'], x: 50,  y: 0 },
				{colors : ['red', 'green'], x: 350,  y: 0 }
			],
			timeout: 50,
			message : 'Two of them?!'
	});
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green'], x: 100,  y: 0 },
				{colors : ['red', 'green'], x: 300,  y: 0 }
			],
			message : 'They stop'
	});
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue', 'red', 'green','blue','green'], x: 90,  y: 0 },
				{colors : ['red', 'green', 'blue', 'red', 'green','blue','green'], x: 310,  y: 0 }
			],
			message : 'Ups!',
			timeout: 1000
	});
	
	
	
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue', 'beige', 'green','blue','green'], x: 100,  y: 0 },
				{colors : ['red', 'green', 'blue', 'beige', 'green','blue','green'], x: 300,  y: 0 }
			],
			message : '<span style="color: magenta;">Try to draw a line between them</span>',
			messageTimeout : 1200,
			timout: 5000
	});
	
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'green', 'blue', 'beige', 'green','blue','green'], x: 130,  y: 0 },
				{colors : ['red', 'green', 'blue', 'beige', 'green','blue','green'], x: 280,  y: 0 }
			],
			message : '<span style="color: magenta;">Try to draw a line between them</span>',
			messageTimeout : 1200,
			timout: 5000
	});
	
	
	levels.push({ 
			enemies : [
				{colors : ['red', 'genf', 'blue', 'beige', 'green','blue','green'], x: 100,  y: 0 },
				{colors : ['red', 'green', 'blue', 'beige', 'green','blue','green'], x: 300,  y: 0 }
			],
			timout: 3000
	});
	

	
	levels.push({ 
			enemies : [
				{colors : ['red', 'blue'], 	 x: 50 , y: -30 },
				{colors : ['red', 'blue'], 	 x: 100 , y: -50 },
				{colors : ['red', 'blue'], 	 x: 150 , y: -30 },
				{colors : ['red', 'blue'], 	 x: 200 , y: -50 },
				{colors : ['red', 'blue'],  x: 250,  y: -30 },
				{colors : ['red', 'blue'], x: 300,  y: -50 },
				{colors : ['red', 'blue'], x: 350,  y: -30 },
			]
		});
	
	
	
		
		
		
		levels.push({ 
			enemies : [
				{colors : ['red', 'genf'], 	 x: 50 , y: 0 },
				{colors : ['red', 'blue'], 	 x: 100 , y: 0 },
				{colors : ['red', 'red'], 	 x: 150 , y: 0 },
				{colors : ['red', 'green'], 	 x: 200 , y: 0 },
				{colors : ['red', 'purple'],  x: 250,  y: 0 },
				{colors : ['red', 'yellow'], x: 300,  y: 0 },
				{colors : ['red', 'beige'], x: 350,  y: 0 },
				
				
				{colors : ['red', 'genf'], 	 x: 50 , y: 50 },
				{colors : ['red', 'blue'], 	 x: 100 , y: 50 },
				{colors : ['red', 'red'], 	 x: 150 , y: 50 },
				{colors : ['red', 'green'], 	 x: 200 , y: 50},
				{colors : ['red', 'purple'],  x: 250,  y: 50 },
				{colors : ['red', 'yellow'], x: 300,  y: 50},
				{colors : ['red', 'beige'], x: 350,  y: 50 },
			],
			timeout: 3000
		});
		
		
		levels.push({ 
			enemies : [
				{colors : ['beige', 'genf'], x: 350,  y: 0},
				{colors : ['yellow', 'blue'], x: 300,  y: 0 },
				{colors : ['purple', 'red'],  x: 250,  y: 0 },
				{colors : ['green', 'green'], 	 x: 200 , y: 0 },
				{colors : ['red', 'purple'], 	 x: 150 , y: 0 },
				{colors : ['blue', 'yellow'], 	 x: 100 , y: 0 },
				{colors : ['genf', 'beige'], 	 x: 50 , y: 0 },
				
				
				{colors : ['beige', 'genf'], 	 x: 50 , y: 50 },
				{colors : ['yellow', 'blue'], 	 x: 100 , y: 50 },
				{colors : ['purple', 'red'], 	 x: 150 , y: 50 },
				{colors : ['green', 'green'], 	 x: 200 , y: 50},
				{colors : ['red', 'purple'],  x: 250,  y: 50 },
				{colors : ['blue', 'yellow'], x: 300,  y: 50},
				{colors : ['genf', 'beige'], x: 350,  y: 50 },
			],
			timeout: 3000
		});
		
		
		levels.push({ 
			enemies : [
				{colors : ['red', 'genf'], x: 350,  y: 0},
				{colors : ['genf', 'blue'], x: 300,  y: 0 },
				{colors : ['blue', 'red'],  x: 250,  y: 0 },
				{colors : ['purple', 'green'], 	 x: 200 , y: 0 },
				{colors : ['green', 'purple'], 	 x: 150 , y: 0 },
				{colors : ['beige', 'yellow'], 	 x: 100 , y: 0 },
				{colors : ['yellow', 'beige'], 	 x: 50 , y: 0 },
				
				
				{colors : ['beige', 'genf'], 	 x: 50 , y: 50 },
				{colors : ['yellow', 'blue'], 	 x: 100 , y: 50 },
				{colors : ['purple', 'red'], 	 x: 150 , y: 50 },
				{colors : ['green', 'green'], 	 x: 200 , y: 50},
				{colors : ['red', 'purple'],  x: 250,  y: 50 },
				{colors : ['blue', 'yellow'], x: 300,  y: 50},
				{colors : ['genf', 'beige'], x: 350,  y: 50 },
			],
			timeout: 3000
		});
		
		
		levels.push({ 
			enemies : [
				{colors : ['red', 'blue'], 	 x: 50 , y: 0 },
				{colors : ['red', 'blue'], 	 x: 100 , y: -20 },
				{colors : ['red', 'red'], 	 x: 150 , y: 0 },
				{colors : ['red', 'green'], 	 x: 200 , y: -20 },
				{colors : ['red', 'purple'],  x: 250,  y: 0 },
				{colors : ['red', 'yellow'], x: 300,  y: -20 },
				{colors : ['red', 'beige'], x: 350,  y: 0 },
			],
			timeout: 3000
		});
		
		
	
		
	
	
	pen.levels = levels;
	
	
})(this.pen);
