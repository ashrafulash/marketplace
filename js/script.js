$(document).ready(function(){


	// setting page icon change
	(function(){
		let btn = document.querySelectorAll(".setting_btn");
		btn = Array.from(btn);
		btn.map(function(pp){
			pp.addEventListener('click', function(e){
				changeIcon(e);
			})
		})
	  	function changeIcon(e){
			btn.map(function(exact){
				let icon = exact.childNodes;
					icon = Array.from(icon);
					icon = icon[2];
					icon.innerHTML = '<i class="fas fa-plus"></i>'
				if(e.target.getAttribute('aria-expanded') == 'false'){
					let minus = e.target;
					minus.childNodes;		
					minus.childNodes[2].innerHTML = '<i class="fas fa-minus"></i>'
				}
			})
		}

	}());
	
	
//javascript code for repay comment box
(function(){
	
	var btnList = document.querySelectorAll("#replay-btn");
	
	var ls = Array.from(btnList);
	
	ls.forEach(function(el){
		el.addEventListener("click", function(e){
			var dataTarget = el.dataset.target;
			
			const targetDOM = document.querySelector(dataTarget);
			
			var show = targetDOM.dataset.show;
			
			if(show === 'false'){
				targetDOM.setAttribute("data-show", "true");
			}
			else if(show === 'true'){
				targetDOM.setAttribute("data-show", "false");
				
			}
		
		})
	})
	
})();

	
(function(){
  //button handlers
	$(".cate_btn").click(function(){
		
		$(".cate_list").slideToggle();
		
	});
	
	$(".newItem_btn").click(function(){
		
		$(".newest_list").slideToggle();		
		
	});	
	
	//popup
	
	function popup(act){
		if(act == true){
			$(".popup").css({
				'display': 'block',
			})
			
			$("body").css({
				'overflow':'hidden',
			})
		}
		else if(act == false){
			$(".popup").css({
				'display': 'none',
			})
			
			$("body").css({
				'overflow':'unset',
			})
		}
	}
	
	//login/signup button

	$(".login_btn").click(function(){
		popup(true);
		
		$(".login_form").css({
			'display':'block',
		})
		
	})
	
	$(".login_close_btn").click(function(){	
		popup(false);
		
		$(".login_form").css({
			'display':'none',
		})
	})

	
})();


//fixed menu start
(function(){
    
    var menu = $(".menu");

    $(document).scroll(function(){
		
        
        var scroll = $(document).scrollTop();
        
        if(scroll > 400){
            
            menu.addClass("fixedMenu");
        }
		else if(scroll < 200){
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




})


