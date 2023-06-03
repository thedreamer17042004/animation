jQuery(function ($) {
    'use strict';
	// scrollCue Animate
	scrollCue.init({
		enable: function() {
			var maxWidth = 768;
			return window.innerWidth < maxWidth;
		}
	});

}(jQuery));

