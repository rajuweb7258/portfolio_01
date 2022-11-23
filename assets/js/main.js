// Header Scroll ------

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide ------
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel -------------
jQuery(document).ready(function($){

    //owl-Carousel
    $(".case-staudy-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
    });

    //Scrill-bar web design
    $("#web-design-skillbar").circleProgress({
        value: 0.78,
        size: 180,
        thickness: 8,
        fill: '#FD4766'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skil-count-no').html(Math.round(78 * progress) + '<i>%</i>');
    });

    //Scrill-bar web design
    $("#graphic-design-skillbar").circleProgress({
        value: 0.90,
        size: 180,
        thickness: 8,
        fill: '#FD4766'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skil-count-no').html(Math.round(90 * progress) + '<i>%</i>');
    });

    //Scrill-bar web design
    $("#web-development-skillbar").circleProgress({
        value: 0.85,
        size: 180,
        thickness: 8,
        fill: '#FD4766'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skil-count-no').html(Math.round(85 * progress) + '<i>%</i>');
    });

    //Scrill-bar web design
    $("#digital-marketing-skillbar").circleProgress({
        value: 0.77,
        size: 180,
        thickness: 8,
        fill: '#FD4766'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skil-count-no').html(Math.round(77 * progress) + '<i>%</i>');
    });
    
});

// CircleBar -------------
