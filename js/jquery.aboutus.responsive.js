
$(function(){
  var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: false,
	 keyboardControl: true,
	speed:300,
	 cssWidthAndHeight: true
	  //etc..
  });
$('#next').click(function(){ 
mySwiper.swipeNext();
});
$('#prev').click(function(){ 
mySwiper.swipePrev();
});
function resize_slide(){
var window_width_ipad=$(window).width();
var window_height_ipad=$(window).height();
if (window_width_ipad<='1024' && window_height_ipad<='768')
{
var container_height=$(window).height()-190;
var container_width=$(window).width();
$('.swiper-container').css("height",container_height);
$('.swiper-container').css("left",0);

//slide content and img
		slide_hieght=container_height;
		slide_hieght=slide_hieght-30;
		slide_width=window_width_ipad;
		var slide_img_width=(slide_width*30)/100;
		var slide_content_width=(slide_width*60)/100;
		var slide_content_margin_left=slide_content_width-(slide_content_width*40)/100;
		$('.slide-content-div').css("margin-left",slide_content_margin_left);
		$('.slide-img-div').css("width",slide_img_width);
		$('.slide-img-div').css("padding-left",'15');
		$('.slide-content-div').css("width",slide_content_width);
		$('.slide-img-div').css("height",slide_hieght);
		$('.slide-content-div').css("height",slide_hieght);
		var slide_img_reponsive_width=slide_img_width+10;
		var slide_img_reponsive_hieght=slide_hieght-80;
		var slide_content_reponsive_width=slide_content_width;
		var slide_content_reponsive_hieght=slide_hieght-80;
		$('.slide-img').css("width",slide_img_reponsive_width);
		$('.slide-img').css("height",slide_img_reponsive_hieght);
		$('.slide-content').css("width",slide_content_reponsive_width);
		$('.slide-content').css("height",slide_content_reponsive_hieght);
		var preferredWidth = 1024;
		var slide_content_font_size=$('.slide-content').css("font-size");
		var displayWidth = window.innerWidth;
		var percentage = displayWidth / preferredWidth;
		var slide_title_font_size = 25;
		var slide_title_responsive_font_size = Math.floor(slide_title_font_size * percentage);
		var slide_content_responsive_font_size = Math.floor(slide_content_font_size * percentage);
		$('.slide-content').css("font-size",slide_content_responsive_font_size);
		$('.slide-title').css("font-size",slide_title_responsive_font_size);

}else{
var container_height=$(window).height()-190;
var container_width=$(window).width()-300;
$('.swiper-container').css("height",container_height);
$('.inner-horizontal').css("width",container_width);

//slide content and img
		slide_hieght=container_height;
		slide_hieght=slide_hieght-30;
		slide_width=container_width;
		var slide_img_width=(slide_width*30)/100;
		var slide_content_width=(slide_width*60)/100;
		var slide_content_margin_left=slide_content_width-(slide_content_width*40)/100;
		$('.slide-content-div').css("margin-left",slide_content_margin_left);
		$('.slide-img-div').css("width",slide_img_width);
		$('.slide-img-div').css("padding-left",'15');
		$('.slide-content-div').css("width",slide_content_width);
		$('.slide-img-div').css("height",slide_hieght);
		$('.slide-content-div').css("height",slide_hieght);
		var slide_img_reponsive_width=slide_img_width+10;
		var slide_img_reponsive_hieght=slide_hieght-80;
		var slide_content_reponsive_width=slide_content_width;
		var slide_content_reponsive_hieght=slide_hieght-80;
		$('.slide-img').css("width",slide_img_reponsive_width);
		$('.slide-img').css("height",slide_img_reponsive_hieght);
		$('.slide-content').css("width",slide_content_reponsive_width);
		$('.slide-content').css("height",slide_content_reponsive_hieght);
		var preferredWidth = 1024;
		var slide_content_font_size=$('.slide-content').css("font-size");
		var displayWidth = window.innerWidth;
		var percentage = displayWidth / preferredWidth;
		var slide_title_font_size = 25;
		var slide_title_responsive_font_size = Math.floor(slide_title_font_size * percentage);
		var slide_content_responsive_font_size = Math.floor(slide_content_font_size * percentage);
		$('.slide-content').css("font-size",slide_content_responsive_font_size);
		$('.slide-title').css("font-size",slide_title_responsive_font_size);

}
}
resize_slide();
var zoom = $( window ).width();;
$(window).resize(function() {
    var zoomNew = $( window ).width();

    if (zoom != zoomNew) {
		resize_slide();
    }
});

})
