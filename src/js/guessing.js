/**
 * Created by grandhonor on 2017/3/4.
 */
const $ = require('zepto');
require('sm');
require('smPicker');
require('smextend');
$(function(){
    $.init();
    $(document).on('click', '.confirm-ok-cancel',function () {
        var ele = $(this).parents('.operator-box').find('h5');
        $.confirm('确定支持'+ele.html()+'吗？',
            function () {
                /*$.alert('You clicked Ok button');*/
                $.toast("您支持了"+ele.html());

                $('.select').find('p').html('您选择支持了'+ele.html());
                $('.select').show();
            },
            function () {
                /*$.alert('You clicked Cancel button');*//*$.alert('You clicked Cancel button');*/
            }
        );
    });
});