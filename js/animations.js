var $icons = $('.icons img');

$('.icons-section').waypoint( function() {
	$icons.eq(0).addClass('js-icons-delay-2');
	$icons.eq(2).addClass('js-icons-delay-1');

	$icons.addClass('js-icons-animate')
}, {offset:'60%'});
