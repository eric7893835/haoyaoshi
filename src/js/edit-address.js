const $ = require('zepto');
require('sm');
require('smPicker');
require('smextend');

$(function(){
    $("#picker").picker({
        toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title">请选择地址</h1>\
  </header>',
        cols: [
            {
                textAlign: 'center',
                values: ['上海', '北京', '南京', '西京', '东京', '普京']
                //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
            },
            {
                textAlign: 'center',
                values: ['杨浦', '黄埔', '闸北', '普陀', '长宁']
            },
            {
                textAlign: 'center',
                values: ['xx路', 'xxx路']
            }
        ]
    });
    $.init();

});