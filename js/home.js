$(function(){
	var horizontal_slide = $('.swiper-container').swiper({
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 4,
		watchActiveIndex: true,
		keyboardControl: true,
		paginationClickable: true
		
	});


	var vertical1 = new Swiper('.swiper-vertical-container1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});

	var vertical2 = new Swiper('.swiper-vertical-container2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});

	var vertical3 = new Swiper('.swiper-vertical-container3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});



	var vertical4 = new Swiper('.swiper-vertical-container4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
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

});




