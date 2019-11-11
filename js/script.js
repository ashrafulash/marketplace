
//fixed menu start
(function(){
    
    var menu = $(".menu");

    $(document).scroll(function(){
		
		var screen = $(window).height();
        
        var scroll = $(document).scrollTop();
        
        if(scroll > 200){
            
            menu.addClass("fixedMenu");
        }else{
            menu.removeClass("fixedMenu");
        }
		
		
		
		
	 //fixing product detail page
		
		var product_card = $(".detail_product_detail_page");
		var screen = $(window).height();
		var doc = $(document).height();
		var footer = $(".footer").height();
		var main = doc - footer;

		
		 if(scroll > screen / 2.3){
            
         product_card.addClass("fixed_card");
			 
		
	     	if((scroll + screen) > main){
				
			 product_card.removeClass("fixed_card");
			 product_card.addClass("footer_appear");
				 
		   }else{
			   
			product_card.removeClass("footer_appear");
			product_card.addClass("fixed_card")
		   }
	    
			 
        }else{
			product_card.removeClass("fixed_card")
		}
		  
        
    });
    
    
})();

//product detail page > product infomation slider

(function(){
    $('.product_info_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-angle-right detail_next_btn"></i>',
  prevArrow: '<i class="fas fa-angle-left detail_prev_btn"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    
    

    
    
})();