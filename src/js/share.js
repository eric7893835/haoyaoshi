/**
 * Created by Administrator on 2017/3/14.
 */
const $ = require('zepto');
require('sm');
require('smPicker');
require('smextend');

$(function(){
    $.init();
    $('.send').click(function(){
        $('.share-masking').show();
    });
    $(".share-masking").click(function(){
        $('.share-masking').hide();
    });
});