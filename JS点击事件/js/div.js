window.onload = function(){
    /*封装$*/
    var $ = function(id){
        return document.getElementById(id);
    }
    var click = $("click");
    click.onclick = function(){setting.style.display = "block";}
    /*建立设置颜色，宽，高的函数*/
    function c_color(id, color){
        var dom = document.getElementById(id);
        dom.style.backgroundColor = color;
    }
    function w_width(id, width){
        var dom = document.getElementById(id);
        dom.style.width = width + "px";
    }
    function h_height(id, height){
        var dom = document.getElementById(id);
        dom.style.height = height +"px";
    }
    /*为各个按钮设置点击动作*/
    $("red").onclick = function(){c_color("test", "red");}
    $("yellow").onclick = function(){c_color("test", "yellow");}
    $("blue").onclick = function(){c_color("test", "blue");}
    $("w-2").onclick = function(){w_width("test", 200);}
    $("w-3").onclick = function(){w_width("test", 300);}
    $("w-4").onclick = function(){w_width("test", 400);}
    $("h-2").onclick = function(){h_height("test", 200);}
    $("h-3").onclick = function(){h_height("test", 300);}
    $("h-4").onclick = function(){h_height("test", 400);}

    $("reset").onclick = function(){
        $("test").style.width = 50 + "px";
        $("test").style.height = 50 + "px";
        $("test").style.backgroundColor = "#fff";
    }
    $("makesure").onclick = function(){
        $("setting").style.display = "none";
    }
}






