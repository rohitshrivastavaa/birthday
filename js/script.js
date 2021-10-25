$(document).ready(function(){
    AOS.init({
        offset: 200,
        delay: 0,
        duration: 700,
        easing: 'ease',
    });
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nevbar').addClass("sticky");
        }else{
            $('.nevbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $( ".defalt-prevent" ).click(function( event ){
        event.preventDefault();
    });

    $('.menu-a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    var typed = new Typed(".typing", {
        strings: ["Wife 👰", "Life partner 👫", "Heartbeat 💖", "Everything 🌎"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Wife 👰", "Life partner 👫", "Heartbeat 💖", "Everything 🌎"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        autoHeight: false,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});