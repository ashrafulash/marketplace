(function(){
  //button handlers
		$(".cate_btn").click(function(){
		
		$(".cate_list").slideToggle();
		
		
	})

  
	
	
})();


//fixed menu start
(function(){
    
    var menu = $(".menu");

    $(document).scroll(function(){
		
        
        var scroll = $(document).scrollTop();
        
        if(scroll > 200){
            
            menu.addClass("fixedMenu");
        }else{
            menu.removeClass("fixedMenu");
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





