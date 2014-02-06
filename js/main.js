var $items = $('.carousel-items img');
var $dialog = $('#video')
var $placeholder = $('#video-placeholder')
var $ships = $('.ships img');

var switchItems = function(outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function(){
		$items.eq(outgoing).attr('data-state', '').hide();
		$items.eq(incoming).attr('data-state', 'current');

	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next >= $items.length){
		next = 0;
	}
	
	switchItems(current, next);

});

$('.prev').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var prev = current - 1;
	
	if (prev < 0){
		prev = $items.length - 1;
	}
	
	switchItems(current, prev);

});

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$placeholder.html('<iframe class="vid" src="http://player.vimeo.com/video/81360763?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$dialog.get(0).showModal();
});

$('#btn-close').on('click', function () {
	$placeholder.html('');
	$dialog.get(0).close();
});

$('.ships-section').waypoint( function() {
	$ships.eq(0).addClass('js-ship-delay-2');
	$ships.eq(2).addClass('js-ship-delay-1');

	$ships.addClass('js-ships-animate')
}, {offset:'60%'});
