window.onload = function(){
    var header = document.getElementById("header");
    var top = header.offsetTop;//获取导航条到顶部的高度
    document.onscroll = function(){
        var sTop = document.documentElement.scrollTop;//获取滚动距离
        if(sTop>top){
            header.className = "container fixed";
        }else{
            header.className = "container";
        }
    }  
}