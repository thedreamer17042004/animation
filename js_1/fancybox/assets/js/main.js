jQuery(function ($) {
    'use strict';

	

	// scrollCue Animate
	scrollCue.init({
		enable: function() {
			var maxWidth = 768;
			return window.innerWidth < maxWidth;
		}
	});

	
	
	

	// Portfolio Slider
	$('.portfolio-slider').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		dots: false,
		center: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>" ,
            "<i class='bx bx-chevron-right'></i>" ,
        ],  
		responsivee:{
			0:{ 
				items:1
			},
			570:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});



}(jQuery));

