jQuery(function ($) {
    'use strict';

	

	// scrollCue Animate
	scrollCue.init({
		enable: function() {
			var maxWidth = 768;
			return window.innerWidth < maxWidth;
		}
	});
	

	// Odometer JS 
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		// each la de lap qua tung phan tu cua jquery object
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
		
	}); 

	

}(jQuery));

