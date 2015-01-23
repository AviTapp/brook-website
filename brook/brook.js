var main = function(){
	$('header').click(function(){
		$('p').hide();
		$(this).children('p').toggle();
	});

	$('#weeklyVid').click(function(){
		$('.weeklyVidPop').slideDown(900);
		$('.weeklyVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117627853' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
		$('#hideBG').fadeIn(1000);
	});

	$('#specialVid').click(function(){
		$('.specialVidPop').slideDown(900);
		$('#hideBG').fadeIn(1000);
	});

	$('#YBWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104649' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});

	$('#SBWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104649' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});

	$('#TPWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104650' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});
	
	$('#ATWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104648' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});
	
	$('#CMWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104649' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});
	
	$('#RFWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104649' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});
	
	$('#RSWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/117104649' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
	});

	$('#archiveVid').click(function(){
		$('.archiveVidPop').slideDown(1200);
		$('#hideBG').fadeIn(1000);
	});

	$('.close').click(function(){
		$('.weeklyVidPop').slideUp(1200);
		$('.weeklyVidPop').children('.video').text("");
		$('.archiveVidPop').slideUp(1200);
		$('.specialVidPop').slideUp(1200);
		$('.specialVidPop').children('.video').text("");
		$('#hideBG').fadeOut(1000);
	});
};

$(document).ready(main);