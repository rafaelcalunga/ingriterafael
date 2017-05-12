$(function(){
	$("#countdown").countdown("2017/07/15", function(event) {
		$(this).text(
			event.strftime('%D dias %H:%M:%S')
		);
	});
})