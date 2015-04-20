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
		pen.ship = this.ship; //Hack globaly available
		this.background = new pen.Background();
		stage.addChild(this.background);
		stage.addChild(this.ship);
		
		this.elims = [];
		
		this.enemyPool = function() {
			//var pool = new Garfunkel.Pool(30, pen.Enemy, pen.Enemy.prototype.init);
			var nextId = 0;
	
			var live = {};
			
			var liveCount = 0;
	
			var ep = {};
	
			ep.get = function(options) {
				var enemy = new pen.Enemy(options);//pool.get(options);
				var liveId = nextId++;
				enemy.liveId = liveId;
				live[liveId] = enemy;
				++liveCount;
				return enemy;
			};
	
			ep.dispose = function(enemy) {
				delete live[enemy.liveId];
				//pool.dispose(enemy);
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
		this.stage.on('drawLineFinished', function(e){self.handleLineFinished(e);});
		//this.stage.on('startPhase', function(e){self.handleStartPhase(e);});
		
		
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
		
		
		//HACK: user event listener
		if(this.state.phase === ATTACK){
			jQuery('#container').css('cursor', 'auto');
		}
		if(this.state.phase === DRAW){
			jQuery('#container').css('cursor', "url('./assets/cursor2.gif') 10 10,crosshair");
		}	
	};

	

	Game.prototype.nextLevel = function(){
		this.switchPhase(ENTER);
		
		var currentLevel = ++this.state.currentLevel;
		if( currentLevel >= pen.levels.length){			
			this.switchPhase(WON);
			pen.ui.showMessage('<span style="color: green;">The End</span>', 
				'Thanks for playing.<br>Reload for replay');
			
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
			jQuery('#container').css('cursor', "url('./assets/cursor2.gif') 10 10,crosshair");
			//jQuery('#container').css('cursor', "crosshair");
			//crosshair
			//TODO: this.ui.enableDraw();
			setTimeout(
				function(level){ 
					var currentLevel = level;
					return function(){
						if(self.state.phase === DRAW && self.state.currentLevel === currentLevel ) //Still in draw of currentLevel?
							self.switchPhase(ATTACK);
					};	 
				}(this.state.currentLevel), 
				3000
			);
		}
	};
	
	
	Game.prototype.handleHit = function(event){
		
		if(this.ship.vulnerable){
			this.state.lives--;
			this.state.currentLevel--;
			pen.snd.hit();
			this.ship.hit();
			pen.ui.setLives(this.state.lives);
			if(this.state.lives == 0){
				pen.ui.showMessage('<span style="color: red;">Game Over</span>', 
				'Reload for replay');
				this.state.phase = LOST;
				console.log('GAME OVER');
			}
		}
		
	};
	
	
	Game.prototype.handleEnemyOutOfReach = function(event) {	
		//Remove Enemy 
		event.enemy.disposable = true;
	};
	
	
	
	Game.prototype.eliminate = function(left, right){
		if(left.length === 0 || right.length === 0)
			return false;
		var leftEnemy = null;
		var rightEnemy = null;
		outer: for(var l = 0; l < left.length; l++){
			for(var r = 0; r < right.length; r++){
				leftEnemy = left[l];
				rightEnemy = right[r];
				if(leftEnemy.colors.length <= 0 || rightEnemy.colors.length <=0)
					continue outer; //Should not happen;
				
				if(leftEnemy.colors[leftEnemy.colors.length - 1] === rightEnemy.colors[rightEnemy.colors.length - 1]){
					if(leftEnemy.colors.length === 1)
						left.splice(l,1);
					if(rightEnemy.colors.length === 1)
						right.splice(r,1);
					this.addElimination(new pen.Elimination(leftEnemy, rightEnemy));
					console.log('hier');
					return true;
				}
			}
		}
		return false;
	};
	
	
	
	var execElim = function(g,left, right){
		if(g.eliminate(left,right)){
			pen.snd.plong();
			setTimeout(function(){execElim(g,left,right);}, 800);
		}else{
			g.switchPhase(DRAW);
			setTimeout(
				function(level){ 
					var currentLevel = level;
					return function(){
						if(g.state.phase === DRAW && g.state.currentLevel === currentLevel ) //Still in draw of currentLevel?
							g.switchPhase(ATTACK);
					};	 
				}(g.state.currentLevel), 
				1000
			);
		}
	};
	

	Game.prototype.handleLineFinished = function(event) {	
		console.log("finished");
		if(this.state.phase !== DRAW)
			return;
	 	this.switchPhase(DRAW_ELIMINATION);
	 	
	 	
	 	var self = this;
	 	var segment = new Garfunkel.Segment(event.p1, event.p2);
	 	
	 	var left = [];
	 	var right = [];
	 	
	 	this.enemyPool.forEach(function(key, enemy){
	 		var u = segment.clone().toCenter().p2;
	 		var v = new Vect(enemy.x - segment.p1.x, enemy.y - segment.p1.y);
	 		if(u.isLeftOf(v))
	 		{
	 			left.push(enemy);
	 		}else{
	 			right.push(enemy);
	 		}
	 	});
	 	
	 	
	 	execElim(self,left,right);	
		
	};

	
	Game.prototype.addEnemy = function(options) {
		var enemy = this.enemyPool.get(options);
		this.stage.addChild(enemy);
		return enemy;
	};
	
	Game.prototype.removeEnemy = function(enemy){
		this.stage.removeChild( enemy );
		this.enemyPool.dispose( enemy );
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
		
		if(state.phase == LOST || state.phase == WON)
			return;
		
		//clean up : TODO Eliminations here
		this.enemyPool.forEach(function(key, enemy) {
				if(enemy.disposable){
					//Remove Enemy 
					self.removeEnemy( enemy );
				}
			});
		
		
		//handle state
		if(state.phase == INIT)
			this.nextLevel();

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
