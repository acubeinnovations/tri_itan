$(document).ready(function(){
	
	function responsive(){
		var window_width=$(window).width();
		var window_height=$(window).height();
		if(window_width<='857'){
		var appDiv1_width=(window_width*75)/100;
		var appDiv1_height=(window_height*42)/100;
		$('.address').css("padding-left",15);
		$('.address').css("padding-right",10);
		}else{
		if (window_width=='1024' && window_height=='768')
		{
		var appDiv1_width=(window_width*70)/100;
		var appDiv1_height=(window_height*45)/100;
		}else{
		var appDiv1_width=(window_width*70)/100;
		var appDiv1_height=(window_height*50)/100;
		}
		}
		var contact_box_1_width=(appDiv1_width*50)/100;
		var contact_box_1_height=appDiv1_height;
		var contact_form_width=(appDiv1_width*35)/100;
		var table_width=contact_form_width-40;
		//var table_height=contact_box_1_height-30;
		var address_width=(contact_box_1_width*40)/100;
		var address_height=(contact_box_1_height*50)/100;
		var textbox_size=contact_form_width-50;
		
		$('#apDiv1').css("width",appDiv1_width);
		$('#apDiv1').css("height",appDiv1_height);
		$('#contact_box_1').css("width",contact_box_1_width);
		$('#contact_box_1').css("height",contact_box_1_height);
		$('#contact_form').css("width",contact_form_width);
		$('#contact_form').css("height",contact_box_1_height);
		$('#contact-table').css("width",table_width);
		//$('#contact-table').css("height",table_height);
		$('.address').css("width",address_width);
		$('.address').css("height",address_height);
		$('#name').css("width",textbox_size);
		$('#company').css("width",textbox_size);
		$('#email').css("width",textbox_size);
		$('#message').css("width",textbox_size);
	}
	responsive();
	var zoom = $( window ).width();
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			responsive();
		}
	});
	


});
