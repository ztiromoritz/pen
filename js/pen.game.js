(function(pen) {
	

	
	
	var Game = function(options, stage) {
			
		this.initObjects(options, stage);
		
		this.bindEvents(options);
		
		this.initState(options);
					
	};
	
	
	Game.prototype.initObjects = function(options, stage){
		options = options || {};
		this.stage = stage;
		this.ship = new pen.Ship();
		this.background = new pen.Background();
		stage.addChild(this.background);
		stage.addChild(this.ship);
		
		this.enemyPool = function() {
			var pool = new Garfunkel.Pool(30, pen.Enemy, pen.Enemy.prototype.init);
			var nextId = 0;
	
			var live = {};
	
			var ep = {};
	
			ep.get = function(options) {
				var enemy = pool.get(options);
				var liveId = nextId++;
				enemy.liveId = liveId;
				live[liveId] = enemy;
				return enemy;
			};
	
			ep.dispose = function(enemy) {
				pool.dispose(enemy);
				delete live[enemy.liveId];
			};
	
			ep.forEach = function(func) {
				$.each(live, func);
			};
	
			return ep;
		}();
		
		this.bindEvents();
	};
	
	Game.prototype.bindEvents = function(options){
		options = options || {};
		//Events
		var self = this;
		
		this.onESC = options.onESC || function() {}; 

		this.stage.on('boo', function(e){self.handleEnemyOutOfReach(e);});
		this.stage.on('hit', function(e){self.handleHit(e);} );
		window.onkeydown = function(e){
			self.handleKeyDown(e);};
		window.onkeyup = function(e){
			self.handleKeyUp(e);};
	};
	
	Game.prototype.initState = function(options){
		options = options || {};
		//State	
		this.state = function(){
			var keys = new MinimalSet();
			
			var _state = {};
			
			_state.hasKey = function(value) {
				return keys.contains(value);
			};
			
			_state.setKey = function(value){
				keys.add(value);
			};
			
			_state.removeKey = function(value){
				keys.remove(value);
			};
			
			_state.phase = INIT;
			_state.currentLevel = 0;
			_state.lives = 4;
			
			return _state;
			
		}();
		
		pen.ui.setLives(this.state.lives);	
	};


	Game.prototype.handleKeyDown = function(e) {
		var evt = e || window.event;
		if (e.keyCode === 27 && !!this.onESC)//ESC
			this.onESC();
		this.state.setKey(evt.keyCode);
	};

	Game.prototype.handleKeyUp = function(e) {
		var evt = e || window.event;
		this.state.removeKey(evt.keyCode);
	};

	
	
	Game.prototype.switchPhase = function(phase){
		var event = new createjs.Event('stopPhase');
		event.phase = this.state.phase;
		GED.dispatchEvent(event);
		if(pen.log)
			pen.log('switch phase '+ this.state.phase + ' -> ' + phase);
		this.state.phase = phase;
		
		
		var event = new createjs.Event('startPhase');
		event.phase = this.state.phase;
		GED.dispatchEvent(event);		
	};

	


	
	
	

	Game.prototype.handleEnemyOutOfReach = function(event) {	
		//Remove Enemy 
		this.stage.removeChild(event.enemy);
		this.enemyPool.dispose(event.enemy);
		

		//Add new Enemy
		var enemy = this.enemyPool.get();
		this.stage.addChild(enemy);
	};
	
	Game.prototype.handleHit = function(event){
		//this.stage.removeChild(event.enemy);
		//this.enemyPool.dispose(event.enemy);
		
		if(this.ship.vulnerable){
			this.state.lives--;
			
			pen.ui.setLives(this.state.lives);
			if(this.state.points == 0)
				console.log('GAME OVER');
			pen.snd.plong();
			
			this.ship.hit();
		}
		
		
	};

	
	Game.prototype.addEnemy = function(options) {
		var enemy = this.enemyPool.get(options);
		this.stage.addChild(enemy);
	};

	
	Game.prototype.tick = function(event) {
		var ship = this.ship;
		var state = this.state;
		var background = this.background;
		var stage = this.stage;
		
		//handle state
		switch(state.phase) {
		case INIT:
			this.switchPhase(ENTER);
			break;
		}

		//do collision and movement

		this.enemyPool.forEach( function(key, enemy) {
			enemy.tick(event, state);
			if ( ship.collides(enemy) ) {
				var e = new createjs.Event('hit');
				e.enemy = enemy;
				GED.dispatchEvent(e);
			}
			
		});

		//do movement
		ship.tick(event, state);
		background.tick(event, state);

		stage.update(event);
	}; 

	pen.Game = Game;

})(this.pen);
