/************* Main Js File ************************
    Template Name: Fabon - Portfolio Template
    Author: Themescare
    Version: 1.0
    Copyright 2018
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Ripple Setup
02 - Animated Headline Setup
03 - Portfolio Image
04 - Testimonial Slider
05 - Preloader


-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		=================================================================
		01 - Ripple Setup
		=================================================================	
		*/

		$('#home').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		})

		/* 
		=================================================================
		02 - Animated Headline Setup
		=================================================================	
		*/


		$(function () {
			$('.caption-inner').animatedHeadline({
				animationType: 'clip'
			});
		})


		/* 
		=================================================================
		03 - Portfolio Image
		=================================================================	
		*/

		$('.zoom-img').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* 
		=================================================================
		04 - Testimonial Slider
		=================================================================	
		*/

		$(".fabon-testimonial-area .owl-carousel").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 30,
			touchDrag: true,
			mouseDrag: true,
			items: 1,
			nav: false,
			dots: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});


		/* 
		=================================================================
		05 - Preloader
		=================================================================	
		*/

		$('#preloader').delay(350).fadeOut('slow');


	});

}(jQuery));

	/* 
		=================================================================
		06 - form
		=================================================================	
*/
let $form = $('#js-form')
$form.submit(function(e) {
	$.ajax({
		url: $form.attr('action'),
		data: $form.serialize(),
		type: "POST",
		dataType: "xml",
		statusCode: {
			0: function() {
				//送信に成功したときの処理
				$form.slideUp()
				$('#js-success').slideDown()
			},
			200: function() {
				//送信にしっぱいした時の処理
				$form.slideUp()
				$('#js-error').slideDown()
			}
		}
	});

	return false;
});


