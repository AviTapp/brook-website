var main = function(){
	$('header').click(function(){
		$('p').hide();
		$(this).children('p').toggle();
	});

	$('#weeklyVid').click(function(){
		$('.weeklyVidPop').slideDown(900);
		$('.weeklyVidPop').children('.video').append("<iframe src='http://player.vimeo.com/video/116934944' width='100%' height='375' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
		$('#hideBG').fadeIn(1000);
	});

	$('#specialVid').click(function(){
		$('.specialVidPop').slideDown(900);
		$('#hideBG').fadeIn(1000);
	});

	$('#YBWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='https://db.tt/ZSAyiASk' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
	});

	$('#SBWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='https://db.tt/W6Rmfpvv' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
	});

	$('#TPWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='https://db.tt/M80pH6Du' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
	});
	
	$('#ATWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='https://db.tt/KThKGhqP' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
	});
	
	$('#CMWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='https://db.tt/f2YVNT9D' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
	});
	
	$('#RFWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='https://db.tt/zP4pjGjh' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
	});
	
	$('#RSWed').click(function(){
		$('.specialVidPop').children('.video').text("");
		$('.specialVidPop').children('.video').append("<video controls><source src='#' type='video/mp4'><p>Video is not visible, most likely your browser does not support HTML5 video</p></video>");
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