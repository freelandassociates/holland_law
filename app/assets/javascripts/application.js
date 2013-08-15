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
//= require prettyphoto-rails
//= require superfish
//= require hoverIntent
//= require caroufredsel
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

	$("a[rel^='prettyPhoto']").prettyPhoto({
		default_width: 800,
		default_height: 544,
		social_tools: false
	});

	$("#carousel_items").carouFredSel({
		scroll: 1,
		items: 3
	});

	// if (window.location.href == 'http://pelican.holland-law-and-title.c66.me/' || window.location.href == 'http://www.hollandlawandtitle.com/' || window.location.href == 'http://localhost:3000/') {
	// 	$.prettyPhoto.open('http://www.youtube.com/watch?v=5eLCpcXw_J4&rel=0','Holland Law and Title - Lawyers Agent App','Holland Law and Title - Lawyers Agent App');
	// }

	if (window.location.href == 'http://pelican.holland-law-and-title.c66.me/welcome' || window.location.href == 'http://www.hollandlawandtitle.com/welcome' || window.location.href == 'http://localhost:3000/welcome') {
		$.prettyPhoto.open('http://www.youtube.com/watch?v=V4Fmwv7A2ic&rel=0','Title Insurance Explained','Title Insurance Explained');
	}

});


