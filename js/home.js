$(function(){
	var horizontal_slide = new Swiper('.swiper-container-horizontal',{
        calculateHeight: false,
        cssWidthAndHeight: true,
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 4,
		watchActiveIndex: true,
		keyboardControl: true,
		autoResize : false,	
		speed : 600,	
		paginationClickable: true
		
	});


	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical'
		});

	var vertical2 = new Swiper('.swiper-container-vertical-2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical'
		});

	var vertical3 = new Swiper('.swiper-container-vertical-3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical'
		});



	var vertical4 = new Swiper('.swiper-container-vertical-4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed: 600,	
		mode: 'vertical'
		});

	var v_slide = 1;

		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
				if(v_slide >1 && v_slide <= 4){
					v_slide =v_slide - 1;
				}
				
			} else if (code == 39) {
				horizontal_slide.swipeNext();
				if(v_slide >=1 && v_slide < 4){
					v_slide =v_slide + 1;
				}
				
			}else if (code == 40) {
				switch(v_slide)
				{
				case 1:
				  vertical1.swipeNext();
				  break;
				case 2:
				  vertical2.swipeNext();
				  break;
				case 3:
				  vertical3.swipeNext();
				  break;
				case 4:
				  vertical4.swipeNext();
				  break;
				}
			} else if (code == 38) {
				switch(v_slide)
				{
				case 1:
				  vertical1.swipePrev();
				  break;
				case 2:
				  vertical2.swipePrev();
				  break;
				case 3:
				  vertical3.swipePrev();
				  break;
				case 4:
				  vertical4.swipePrev();
				  break;
				}
			}


		});



		$('.nav_up').click(function(){
				switch(v_slide)
				{
				case 1:
				  vertical1.swipePrev();
				  break;
				case 2:
				  vertical2.swipePrev();
				  break;
				case 3:
				  vertical3.swipePrev();
				  break;
				case 4:
				  vertical4.swipePrev();
				  break;
				}

		});

		$('.nav_down').click(function(){
				switch(v_slide)
				{
				case 1:
				  vertical1.swipeNext();
				  break;
				case 2:
				  vertical2.swipeNext();
				  break;
				case 3:
				  vertical3.swipeNext();
				  break;
				case 4:
				  vertical4.swipeNext();
				  break;
				}
		});


		$('.swiper-pagination-switch').click(function(){
			v_slide = $( ".swiper-active-switch" ).index()+1 ;
		});
		$('.swiper-active-switch').change(function(){
			v_slide = $( ".swiper-active-switch" ).index()+1 ;
		});


        if (document.cookie.indexOf("visited") >= 0) {
            //Don't open any pop up here... You can do something here
            //alert("Demo already shown");
            //$("#keyboard_intro-home").hide();

        }
        else {
            // set a new cookie..
            var cookieExpiry = new Date();
            cookieExpiry.setTime(cookieExpiry.getTime() + (8 * 3600 * 1000)); // 8 hours
            document.cookie = "visited=yes; expires=" + cookieExpiry.toGMTString();
            //alert("Show demo here");//Do here something...
            $("#keyboard_intro-home").show();
			$("#keyboard_intro-home").fadeIn('slow').delay(6000).hide(100);

        }


	function change_slide_positions(){
	//$(".swiper-slide-horizontal").removeAttr("style");
	var outer_container = $("#swiper-container-horizontal");
	oc_offset=outer_container.offset();
	window_width = $( window ).width();
	window_height = $( window ).height();
	oc_top = -200;
	oc_left = 0;

	//alert(window_width);
	//alert(window_height);

	if(window_width <= 1600){
		oc_left = 0;
	}
	if(window_width <= 1366){
		oc_left = -100;
	}
	if(window_width <= 1200){
		oc_left = -300;
	}
	if(window_width <= 1024){
		oc_left = -350;
	}

	if(window_width <= 800){
		oc_left = -400;
	}
	
	if(window_width <= 700){
		oc_left = -430;
	}
	if(window_width <= 600){
		oc_left = -450;
	}
	



	if(window_height <= 768){
		oc_top = -250;
	}
	if(window_height <= 760){
		oc_top = -250;
	}

	if(window_height <= 700){
		oc_top = -310;
	}
	if(window_height <= 640){
		oc_top = -360;
	}

	if(window_height <= 623){
		oc_top = -370;
	}
	if(window_height <= 600){
		oc_top = -390;
	}
	
	if(window_height <= 550){
		oc_top = -400;
	}
	
	//alert(oc_left);


	outer_container.offset({ top: oc_top, left: oc_left });

	}
	
	change_slide_positions();


var zoom = $( window ).width();;
$(window).resize(function() {
    var zoomNew = $( window ).width();

    if (zoom != zoomNew) {
//alert (zoom);
//alert (zoomNew);
		change_slide_positions();
    }
});





});




