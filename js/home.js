$(function(){
	var horizontal_slide = $('.swiper-container').swiper({
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 4,
		watchActiveIndex: true,
		keyboardControl: true,
		paginationClickable: true,
		grabCursor: true
		
	});


	var vertical1 = new Swiper('.swiper-vertical-container1',{
		keyboardControl: true,
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});

	var vertical2 = new Swiper('.swiper-vertical-container2',{
		keyboardControl: true,
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});

	var vertical3 = new Swiper('.swiper-vertical-container3',{
		keyboardControl: true,
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});



	var vertical4 = new Swiper('.swiper-vertical-container4',{
		keyboardControl: true,
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		mode: 'vertical'
		});
	
		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
			} else if (code == 39) {
				horizontal_slide.swipeNext();
			}
		});

});




