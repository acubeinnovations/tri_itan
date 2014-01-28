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


	var vertical = new Swiper('.swiper-vertical-container',{
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
	
});
