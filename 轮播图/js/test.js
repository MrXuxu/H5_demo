
window.onload = function() {
    var list = document.getElementById("list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    function animate(offset){
        /*获取的style.left，是相对左边获取距离，所以第一张图后style.left都为负值*/
        /*且style.left获取的是字符串，需要用parseInt()或者parseFloat()取整转化为数字。*/
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + "px";
        list.style.transition = '300ms ease';   //给动画添加过渡时间
        /*从最后一张偏移值到第一张*/
        if(newLeft<=-1600){
            list.style.left = 0 +'px';
        }
        /*从第一张偏移值到最后第一张*/
        if(newLeft>0){
            list.style.left = -1200 +'px';
        }
    }
    prev.onclick = function(){
        animate(400);
    }
    next.onclick = function(){
        animate(-400);
    }
    /*---定时自动轮播--*/
    var timer;
    function autoplay() {
        timer = setInterval(function(){
            next.onclick()
        }, 2000);
    }
    autoplay();
    /*---鼠标悬停停止---*/
    var container = document.getElementById('container');
    function stopplay() {
        clearInterval(timer);
    }
    container.onmouseover = stopplay;
    container.onmouseout = autoplay;

    /*----切换图片时底部样式改变----*/
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    function showButton() {
        //清除之前的样式
        for(let i = 0; i<buttons.length; i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
            }
        }
        buttons[index-1].className = 'on';
    }
    prev.onclick = function() {
        index -= 1;
        if(index < 1){
            index = 4;
        }
        showButton();
        animate(400);
    }
    next.onclick = function() {
        index += 1;
        if(index > 4){
            index = 1;
        }
        showButton();
        animate(-400);
    }
    
    /*---点击按钮切换--*/
    for(var i=0; i<buttons.length; i++){
        buttons[i].onclick = function(){
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 400*(index - clickIndex);
            animate(offset);
            index = clickIndex;
            showButton();
        }
    }

    /*---动画效果---*/
    
}