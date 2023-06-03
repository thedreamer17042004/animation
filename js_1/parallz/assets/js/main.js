jQuery(function ($) {
    'use strict';

	

	// scrollCue Animate
	scrollCue.init({
		enable: function() {
			var maxWidth = 768;
			return window.innerWidth < maxWidth;
		}
	});

	


	

	// Portfolio Three Slider
	$('.portfolio-three-slider').owlCarousel({
		loop: true,
		margin: 0,
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
				items:3
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	// Portfolio Two Slider
	$('.portfolio-two-slider').owlCarousel({
		loop: true,
		margin: 24,
		nav: true,
		dots: false,
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
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:4
			}
		}
	});

	

}(jQuery));

