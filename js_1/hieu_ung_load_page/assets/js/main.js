jQuery(function ($) {
    'use strict';

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "992"
	}); 

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Sticky, Go To Top JS
	$(window).on('scroll', function() {  
		// Header Sticky JS 
		if ($(this).scrollTop() >150){   
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky"); 
		};
	});


	// Preloader Area
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
}(jQuery));

