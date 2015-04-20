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
		
		this.elims = [];
		
		this.enemyPool = function() {
			var pool = new Garfunkel.Pool(30, pen.Enemy, pen.Enemy.prototype.init);
			var nextId = 0;
	
			var live = {};
			
			var liveCount = 0;
	
			var ep = {};
	
			ep.get = function(options) {
				var enemy = pool.get(options);
				var liveId = nextId++;
				enemy.liveId = liveId;
				live[liveId] = enemy;
				++liveCount;
				return enemy;
			};
	
			ep.dispose = function(enemy) {
				delete live[enemy.liveId];
				pool.dispose(enemy);
				--liveCount;
			};
	
			ep.forEach = function(func) {
				$.each(live, func);
			};
			
			ep.getLiveCount = function(){
				return liveCount;
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
		this.stage.on('enemiesInDraw', function(e){self.handleEnemiesInDraw(e);});
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
			_state.currentLevel = -1;
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

	

	Game.prototype.nextLevel = function(){
		this.switchPhase(ENTER);
		
		var currentLevel = ++this.state.currentLevel;
		if( currentLevel >= pen.levels.length){			
			this.switchPhase(WON);
		}else{
			var level = pen.levels[currentLevel];
			var n = level.enemies.length;
			while(n--)
				this.addEnemy(level.enemies[n]);
		}
		
		
	};

	Game.prototype.handleEnemiesInDraw = function(){
		var self = this;
		if(this.state.phase == ENTER){
			this.switchPhase(DRAW);
			//TODO: this.ui.enableDraw();
			setTimeout(
				function(level){ 
					var currentLevel = level;
					return function(){
						if(self.state.phase === DRAW && self.state.currentLevel === currentLevel ) //Still in draw of currentLevel?
							self.switchPhase(ATTACK);
					};	 
				}(this.state.currentLevel), 
				500
			);
		}
	};
	
	
	Game.prototype.handleHit = function(event){
		
		if(this.ship.vulnerable){
			this.state.lives--;
			
			pen.ui.setLives(this.state.lives);
			if(this.state.points == 0)
				console.log('GAME OVER');
			pen.snd.plong();
			
			this.ship.hit();
		}
		
	};
	
	
	Game.prototype.handleEnemyOutOfReach = function(event) {	
		//Remove Enemy 
		event.enemy.disposable = true;
	};
	
	

	
	Game.prototype.addEnemy = function(options) {
		var enemy = this.enemyPool.get(options);
		this.stage.addChild(enemy);
		return enemy;
	};
	
	Game.prototype.removeEnemy = function(enemy){
		this.stage.removeChild( enemy );
		this.enemyPool.dispose( enemy );
		console.log(this.enemyPool.getLiveCount());
		if(this.enemyPool.getLiveCount() === 0)
			this.switchPhase(INIT);
	};
	
	
	Game.prototype.addElimination = function(elim){
		this.elims.push(elim);
		this.stage.addChild(elim);
	};

	
	Game.prototype.tick = function(event) {
		var self = this;
		var ship = this.ship;
		var state = this.state;
		var background = this.background;
		var stage = this.stage;
		
		//clean up : TODO Eliminations here
		this.enemyPool.forEach(function(key, enemy) {
				if(enemy.disposable){
					//Remove Enemy 
					self.removeEnemy( enemy );
				}
			});
		
		
		//handle state
		if(state.phase == INIT)
		
		switch(state.phase) {
			case INIT:
				this.nextLevel();
				break;
		}

		//do collision and movement

		this.enemyPool.forEach( function(key, enemy) {
			enemy.tick( event, state );
			 
			if ( ship.collides(enemy) ) {
				var e = new createjs.Event('hit');
				e.enemy = enemy;
				GED.dispatchEvent(e);
			}
			
		});

		//do movement
		ship.tick(event, state);
		background.tick(event, state);
		
		var n = this.elims.length;
		while(n--){
			this.elims[n].tick(event, state);
		};
		

		stage.update(event);
	}; 

	pen.Game = Game;

})(this.pen);
