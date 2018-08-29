$(function () {
    var timer;
    var index = 0;
    $("#next").click(function () {

        if (!$("#list").is(":animated")) {
            index++;
            if (index > 4) {
                index = 0;
            }
            showBtn();
            animate(-600);
        }

    })
    $("#prev").click(function () {
        if (!$("#list").is(":animated")) {
            index--;
            if (index < 0) {
                index = 4;
            }
            showBtn();
            animate(600)
        }
    })
    function animate(offset) {
        var newLeft = $("#list").position().left + offset
        $("#list").animate({ left: newLeft + "px" }, 500, function () {
            if (newLeft < -3000) {
                $("#list").css({ left: "-600px" })
            }
            if (newLeft > -600) {
                $("#list").css({ left: "-3000px" })
            }
        })
    }
    function showBtn() {
        $("#btns>span").eq(index).addClass("current").siblings().removeClass("current");

    }
    $("#btns>span").click(function(){
        var offset = ($(this).index()-index)*-600;
        console.log(offset);
        index = $(this).index();
        showBtn();
        animate(offset);
    })
    function play(){
        timer = setInterval(function(){
            $("#next").click()
        },1000)
    }
    play();
    function stop(){
        clearInterval(timer);
    }
    $(".content").mouseover(function(){
       stop();
    })
    $(".content").mouseout(function(){
        play();
    })
})