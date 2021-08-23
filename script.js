$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});//working of scroll button
        $('html').css("scrollBehavior", "auto");
    });


    $('.navbar .menu li a').click(function(){
       
        $('html').css("scrollBehavior", "smooth");//buttons smooth transition to tops
    });


    var a;
    $('.menu-btn').on('click', function clicked(){
        if(a===0)
        {
            $(".navbar .menu").css({'left':'0%','height':'100%','color':'#331343'});
                a++
            }
        else
        {
        $(".navbar .menu").css({'left':'-100%'});a=0;
        }
        });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Designer", "YouTuber", "Developer", "Dancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    
});
