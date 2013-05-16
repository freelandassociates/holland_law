// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require superfish
//= require hoverIntent
//= require caroufredsel
//= require fancybox
//= require_tree .

$(document).ready(function () {
    $("#accordion").accordion({ collapsible: true });
    if (window.location.href.indexOf("rate-calculators")>-1) {
		$("#accordion").accordion({ active: 2});
    } else if (window.location.href.indexOf("title-information")>-1) {
		$("#accordion").accordion({ active: 3});
	} else if (window.location.href.indexOf("information-library")>-1) {
		$("#accordion").accordion({ active: 4});
	} else {
		$("#accordion").accordion({ active: 0});
	}

	// carousel = new Carousel(
	// 	$('#carousel_items'),
	// 	{
	// 		onChange: function(items) {
	// 		// something when the items change
	// 	}
	// });

	$("#carousel_items").carouFredSel();
	$("#carousel_items a").fancybox({
		cyclic  : true,
		onStart : function() {
			$("#carousel_items").trigger("pause");
		},
		onClosed: function() {
			$("#carousel_items").trigger("play");
		}
	});



});

