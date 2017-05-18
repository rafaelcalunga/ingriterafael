$(function() {
	$('#countdown').countdown('2017/07/15 17:00:00', function(event) {
		$(this).text(event.strftime('%D dias %H:%M:%S') );
	});
})