
var userData = $.ajax('js/testimonials.json', {
	dataType: 'json'
});
userData.done(function (data){
	var say = Math.round( Math.random() * data.length - 1);
	$('.text-here').html(data[say].quote);
});