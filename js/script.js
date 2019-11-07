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