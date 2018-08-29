window.onload = function () {
    var content = document.getElementById("content");
    var list = document.getElementById("list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var btns = document.getElementById("btns").children;
    // 点击next加-600px,当left<-3000时,left=-600
    var index = 0;
    var animated = false;
    var timer;
    next.onclick = function () {
        if(animated){
            return;
        }
        animate(-600);
        index++;
        if (index > 4) {
            index = 0;
        }
        showBtn();
    }
    prev.onclick = function () {
        if(animated){
            return;
        }
        index--;
        animate(600)
        if (index < 0) {
            index = 4;
        }
        showBtn();
    }
    function animate(offset) {
        animated =true;
        var newLeft = parseInt(list.style.left) + offset;
        // 动画总时长300
        var time = 300;
        // 间隔10移动一次
        var interval = 10;
        // 每次移动的量
        var speed = offset / (time / interval);
        function go() {
            // 向右移动的条件 speed<0且left>newLeft
            //向左移动speed>0且left<newLeft;
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go,interval);
            } else {
                animated =false;
                if (newLeft < -3000) {
                    list.style.left = "-600px"
                } else if (newLeft > -600) {
                    list.style.left = "-3000px";
                } else {
                    list.style.left = newLeft + "px";
                }
            }
        }
        go();

    }
    function showBtn() {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("current");
        }
        btns[index].classList.add("current")
    }
    // 给所有的btns的子元素点击事件
    for (let i = 0; i < btns.length; i++) {
        btns[i].index = i
        btns[i].onclick = function () {
            var offset = (this.index - index) * -600;
            index = this.index;
            animate(offset);
            showBtn();
        }
    }
    function play(){
        timer=setInterval(function(){
            next.onclick()
        },1500)
    }
    play();
    function stop(){
        clearInterval(timer);
    }
    content.onmouseover = function(){
        stop();
    }
    content.onmouseout = function(){
        play();
    }

}