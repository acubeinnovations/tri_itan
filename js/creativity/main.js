

var main = {
	init: function() {
		$.fn.hoverscroll.params = $.extend($.fn.hoverscroll.params, {
			debug: true
		});
		
		$('#my-horizontal-list, #my-list').hoverscroll();
		$('#my-vertical-list').hoverscroll({
			vertical: true,
			width: 1366,
			height: 768,
            fixedArrows: true
		});
//        $("#my-horizontal-list")[0].startMoving(1, 5);
		
		$('#maintabs').tabs();
		
		$('.tablink').click(function() {
			var tab = $(this).attr('rel');
			if (tab != null && tab != "") {
				$('#maintabs').tabs('select', tab);
			}
			return false;
		});
		
		$('#viewExampleSource').click(
			function() {$('#example-source').slideToggle('slow');return false;}
		);
		
		$('#example-source').hide();
	}
};

$(document).ready(function() {
	main.init();
});
