/*fixed header*/
let header = $('#header');
let header_inner = $('#header_inner');
let intro = $('#intro');
let headerH = header_inner.innerHeight();
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();
checkScroll(scrollPos, introH);

/*
        $(window).on('scroll load resize', function(){
            introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();

            if(scrollPos > introH){
                header.addClass('fixed');
            }else{
                header.removeClass('fixed');
            }
        })
*/

$(window).on('scroll resize', function(){
    introH = intro.innerHeight();
    headerH = header_inner.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
})

function checkScroll(){
    if(scrollPos > introH - headerH){
        header.addClass('fixed');
    }else{
        header.removeClass('fixed');
    }
}

/*scroll*/
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data("scroll")
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementOffset - 56
    }, 700)
});

/*burger*/;
let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");
})

/*slick:https://kenwheeler.github.io/slick/*/
let slider = $("#reviewsSlider");

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
});
              

 



