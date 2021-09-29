$(document).ready(function (){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky')
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass('show')
           
        }else{
            $('.scroll-up-btn').removeClass('show')

        }
    });
    // // slide up script
    // $('.scroll-up-btn').click(() => {
    //     $('html').animate((scrollTop 0));
    // };
    // typing aniimation scripting
    var typed = new Typed(".typing", {
        strings:["Web Developer", "Geospatial Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // Toggle Menu/Navbar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');

    });
    // owl carousel display
    $('.carousel').owlCarousel({
       margin: 20,
       loop: true,
       autoPlayTimeOut: 2000,
       autoPlayHoverPause: true,
       responsive: {
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }

       }
    })
})