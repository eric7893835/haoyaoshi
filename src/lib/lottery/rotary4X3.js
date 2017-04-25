$(function(){
	lottery.lottery({
		selector: '#lottery',
		width: 4,
		height: 3,
		index: 0, // 初始位置
		initSpeed: 300, // 初始转动速度
		beforeRoll: function(callback) { //转动前进行校验
			//模拟转动前做的一些校验
			setTimeout(function(){
				/*
				 * 当出现某某问题，在此处可以给出提示，直接return
				 * .....
				 * */
				if (callback && typeof callback == "function") {
					callback();
				}
			},500);
		},
		aim: function(callback) { //转动中确定终点
			//，获取终点，和弹出信息
			setTimeout(function(){
				if (callback && typeof callback == "function") {

					var index = Math.round(Math.random()*9+1); //随机的值

					var msg; //提示
					switch (index){
						case 0:
                            msg = '100元红包';
							break;
						case 1:
							msg = '现金券100元';
							break;
						case 2:
							msg = '100元红包';
							break;
						case 3:
							msg = '精美礼盒';
							break;
						case 4:
							msg = '谢谢参与';
							break;
						case 5:
							msg = '谢谢参与';
							break;
						case 6:
							msg = '一等奖';
							break;
						case 7:
							msg = '100元红包';
							break;
						case 8:
							msg = '200元红包';
							break;
						case 9:
							msg = '现金券100元';
							break;
					}

					callback(index,msg);
				}
			},500);
		}
	});
})