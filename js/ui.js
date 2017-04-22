$(function(){

/*------------------
슬라이드
------------------*/
	var gallery = $(".gallery"),
			galleryL = $(".gallery").length;
			
	if(galleryL > 0) {
		$(".gallery").slick({
	    dots: true,
	    infinite: false,
	    autoplay: true,
	    responsive: true,
	    slidesToShow: 1,
	    prevArrow: '.slick-prev', //prev 버튼
	    nextArrow: '.slick-next' //netx 버튼
	  });
  }

  var menu = $(".mb-gnb");
 	
 	if(!menu.hasClass("is-disable")) {
 		menu.addClass("is-disable");

		/*------------------
		메뉴
		------------------*/
		var body = $("body"),
				hamBerg = $(".menu-toggle"),
				mbGnb = $(".mb-gnb"),
				mbGnbBg = $(".mb-gnb-bg"),
				current = mbGnb.css("display");
	  mbGnbBg.click(function(){
        mbGnb.addClass("is-disable");
	  });	  		
 	}
 	$(".menu-toggle").click(function(){
 		menu.removeClass("is-disable");  		 		
 	});
});
