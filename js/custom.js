
      jQuery('.mobile-nav ').click(function () {
         jQuery('body').toggleClass('open-menu');
      });
      jQuery('.closeIcn > span, .overlay, .navmenus li a').click(function () {
         jQuery('body').removeClass('open-menu');
      });
      $(window).scroll(function () {
         if ($(window).scrollTop() > 0) {
            $("header").addClass('sticky');
         } else {
            $("header").removeClass('sticky');
         }
      });
	  

	  /******Animation js ******/
/*global $, jQuery, console, alert, promp*/
$(window).on("load scroll", function () {
	"use strict";
	$(".wow").css("animation-play-state", "paused");
	$(".wow").each(function () {
		if (!($(this).data("wow-duration"))) {
			$(this).data("wow-duration", "3s");
		}
		if ($(this).data("wow-offset") + $(this).offset().top <= $(window).scrollTop() + $(window).height() || (!($(this).data("wow-offset")) && $(this).offset().top <= $(window).scrollTop() + $(window).height())) {
			$(this).css("animation-play-state", "running ");
			$(this).css({
				"animationDuration": $(this).data("wow-duration"),
				"animationDelay": $(this).data("wow-delay"),
				"animationIterationCount": $(this).data("wow-iteration")
			});
		}
	});
});