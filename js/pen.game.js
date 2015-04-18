(function(pen) {
	var game = {};

	var state = {};

	var _stage;

	var onESC;

	game.clearState = function() {
		state.keys = new MinimalSet();
		state.phase = 'enter';
	};
	game.clearState();

	var handleKeyDown = function(e) {
		var evt = e || window.event;
		if (e.keyCode === 27 && !!onEESC)//ESC
			onESC();
		state.keys.add(e.keyCode);
	};

	var handleKeyUp = function(e) {
		var evt = e || window.event;
		state.keys.remove(e.keyCode);
	};

	var enemyPool = function() {

		var pool = new Garfunkel.Pool(30, pen.Enemy, pen.Enemy.prototype.init);
		//TODO destructor???

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

	var handleEnemyOutOfReach = function(event) {

		stage.removeChild(event.enemy);
		enemyPool.dispose(event.enemy);

		var enemy = enemyPool.get();
		stage.addChild(enemy);
	};

	game.init = function(options, stage) {
		options = options || {};

		onESC = options.onESC ||
		function() {
		};

		_stage = stage;
		stage.on('boo', handleEnemyOutOfReach);

		window.onkeydown = handleKeyDown;
		window.onkeyup = handleKeyUp;
	};

	game.addEnemy = function(options) {
		var enemy = enemyPool.get(options);
		_stage.addChild(enemy);
	};

	game.tick = function(stage, objects) {

		object = objects || {};

		return function(event) {

			enemyPool.forEach(function(key, value) {
				value.tick(event, state);
			});

			var l = object.length;
			while (l--) {
				object[l].tick(event, state);
			}
			stage.update(event);
		};

	};

	pen.game = game;

})(this.pen);
