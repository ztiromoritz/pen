(function(pen) {

	var requested = 0;
	var loaded = 0;

	var images = ['background.png'];

	var assets = {};

	var _callback;

	var onLoaded = function() {
		loaded++;
		if (loaded === requested && !!_callback) {
			_callback();
		}
	};

	var loadImage = function(name) {
		var img = new Image();
		img.onload = onLoaded;
		img.src = './assets/' + name;
		assets[name] = img;
		requested++;
	};

	pen.loadResources = function(callback) {
		var l = images.length;
		while (l--) {
			loadImage(images[l]);
		}
		_callback = callback;
	};

	pen.assets = assets;

})(this.pen);
