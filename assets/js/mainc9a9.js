(function ($) {
	'use strict';
	$("#nav ul li a[href*='#']").click(function () {
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
		$("#contentz").mCustomScrollbar({
			theme: "dark-3",
			live: "on",
		});
	});
}(jQuery));