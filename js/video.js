var $dialog = $('#video')
var $placeholder = $('#video-placeholder')

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$placeholder.html('<iframe class="vid" src="http://player.vimeo.com/video/81360763?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$dialog.get(0).showModal();
});

$('#btn-close').on('click', function () {
	$placeholder.html('');
	$dialog.get(0).close();
});
