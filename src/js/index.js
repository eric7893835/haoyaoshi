require('./public');

$.init();
$(function(){
  /*=== 默认为 standalone ===*/
  var myPhotoBrowserStandalone = $.photoBrowser({
    photos : [
      './images/prodct_01.jpg',
      './images/prodct_01.jpg',
      './images/prodct_01.jpg'
    ]
  });
  //点击时打开图片浏览器
  $(document).on('click','.pb-standalone',function () {
    myPhotoBrowserStandalone.open();
  });
  $(".swiper-container").swiper({
    speed: 400,
    spaceBetween: 100
  });
  $('.menu').on('click',function(){
    location.href = '../dist/shopping-list.html'
  });
});