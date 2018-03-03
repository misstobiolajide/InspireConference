
(function ($) {
	'use strict';
	$("#nav ul li a[href*='#'], a[href*='#'] ").click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	
	$(".navbar-nav li a").click(function (event) {
		$(".navbar-collapse").collapse('hide');
	});
	$('.html-popup').magnificPopup({
		type: 'ajax',
		closeOnContentClick: false,
		closeBtnInside: true,
		closeOnBgClick: false
	});
	$('.image-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
	});
	$('.faqs dd').hide();
	$('.faqs dt').on({
		click: function () {
			$(this).next().slideToggle('normal');
		},
		mouseenter: function () {
			$(this).addClass('hover');
		},
		mouseleave: function () {
			$(this).removeClass('hover');
		}
	});
	var owl = $("#testimonial-carousel");
	owl.owlCarousel({
		navigation: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		transitionStyle: "fade"
	});
	$('.number').counterUp({
		delay: 10,
		time: 3000
	});
	document.addEventListener("touchstart", function () {}, true);
}(jQuery));


(function ($) {
	'use strict';
	$(window).load(function () {
		jQuery(window).stellar({
			horizontalScrolling: false
		});
		$("#nav-primary").sticky({
			topSpacing: 0,
		});
		$('#preload').delay(350).fadeOut('slow');
		// $("#contentz").mCustomScrollbar({
		// 	theme: "dark-3",
		// 	live: "on",
		// });
	});
}(jQuery));




jQuery(document).ready(function($){
	topLayerPosition();
  	$("#hotel-carousel").owlCarousel({
      itemsCustom : [
		[0, 1],
		[450, 1],
		[600, 2],
		[700, 3],
		[1000, 3],
		[1200, 3],
		],
      autoPlay: false,
      pagination: true,
      dots: true
	});


	$("#price-carousel").owlCarousel({
	      itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 3],
			[1000, 4],
			[1200, 4],
			],
	      autoPlay: false,
	      pagination: true,
	      dots:true
	  });
	
	
	$("#sponsors-carousel").owlCarousel({
	      itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 3],
			[1000, 6],
			[1200, 6],
			],
	      autoPlay: true,
	      pagination: true,
	      dots:true
	  });
	
	
	
		$("#DateCountdown").TimeCircles({
		"animation": "smooth",
		"use_background": false,
		"bg_width": 0,
		"fg_width": 0,
	
		"time": {
			"Days": {
				"text": "Days",
				"color": "#fac42b",
				"show": true
			},
			"Hours": {
				"text": "Hours",
				"color": "#fac42b",
				"show": true
			},
			"Minutes": {
				"text": "Minutes",
				"color": "#fac42b",
				"show": true
			},
			"Seconds": {
				"text": "Seconds",
				"color": "#fac42b",
				"show": true
			}
		}
	});
	
	//Top Layer
	function topLayerPosition() {
		var topLayerWidth = jQuery('img.top-layer').width();
		var leftMargin =  "-"+topLayerWidth/2;
		if (jQuery(window).width() <= 768) {
			jQuery('img.top-layer').css('margin-left', Number(leftMargin));
		}
		blur();
	}
	
	jQuery(window).resize(function() {
		topLayerPosition();
	});
	
	
	//Parallax
	var velocity = 0.05;
	
	function update(){ 
		var pos = $(window).scrollTop(); 
		$('#slider').each(function() { 
		    var $element = $(this);
		    // subtract some from the height b/c of the padding
		    var height = $element.height();
		    $(this).css('backgroundPosition', '50%' + Math.round((pos) * velocity) +  'px'); 
		}); 
	 };
	 
	 if (jQuery(window).width() > 768) {
	 	$(window).bind('scroll', update);
	 }
	 
	setTimeout(function(){
		topLayerPosition();
	}, 2000);
	 
});
