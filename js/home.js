$(function(){
	var horizontal_slide = new Swiper('.swiper-container-horizontal',{
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 4,
		watchActiveIndex: true,
		keyboardControl: true,
		autoResize : false,	
		speed : 500,	
		paginationClickable: true
		
	});


	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 500,	
		mode: 'vertical'
		});

	var vertical2 = new Swiper('.swiper-container-vertical-2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 500,	
		mode: 'vertical'
		});

	var vertical3 = new Swiper('.swiper-container-vertical-3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 500,	
		mode: 'vertical'
		});



	var vertical4 = new Swiper('.swiper-container-vertical-4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed: 500,	
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
			$("#keyboard_intro-home").fadeIn('slow').delay(5000).hide(100);

        }



});




