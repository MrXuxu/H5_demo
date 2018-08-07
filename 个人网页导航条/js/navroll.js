$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
    })
    $(function(){
        var aboutc = $("#aboutc").offset().top;
        console.log(aboutc);
        $("#about").click(function(){
            $("html, body").animate({scrollTop: aboutc}, 500);
        })
    })
})

