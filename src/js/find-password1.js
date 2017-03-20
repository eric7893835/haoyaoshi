const $ = require('zepto');
require('sm');
require('smPicker');
require('smextend');

$(function(){
    $.init();
    //发送验证码计时
    var wait=60;
    function settime(o) {
        if (wait == 0) {
            o.removeAttr("disabled");
            o.html("获取");
            o.removeAttr('disabled');
            wait = 60;
        } else {
            o.attr("disabled", "disabled");
            o.html("(" + wait + ")");
            wait--;
            setTimeout(function() {
                    settime(o);
                },
                1000)
        }
    }

//点击发送验证码
    $(".get-code").on('click',function(e){
        settime($(this));
        e.stopPropagation();
    });
});