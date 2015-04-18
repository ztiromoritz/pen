(function(global) {
	if (!!!global.tools)
		global.tools = {};

	global.tools.resize = function(main, border) {
		border = typeof border !== 'undefined' ? border : 0.01;
		var mainWidth = jQuery(main).width();
		var mainHeight = jQuery(main).height();

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var widthRatio = windowWidth / mainWidth;
		var heightRatio = windowHeight / mainHeight;

		var ratio = Math.min(widthRatio, heightRatio) - border;

		jQuery(main).css('transform', 'scale(' + ratio + ')');
	};

})(this);
