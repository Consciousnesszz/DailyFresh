
app.controller('main', ['$scope', '$timeout', '$http', 'pageData', function(scope, delay, ajax, pageData){
	scope.content = true;
	/*scope.loader = true;
	delay(function(){
		scope.loader = false;
		scope.content = true;
	},1000);*/

	// header advertisement
	scope.topad = true;
	scope.disapear = function(){
		scope.topad = false;
	}

	// nav click
	scope.navlist = pageData.getNavData();
	scope.curStatus = 0;
	scope.navactive = function (index){
		scope.curStatus = index;
	}

	// banner
	scope.curBanner = 1;
	scope.bannerChange = function(index){
		scope.curBanner = index + 1;
	}

	// tips
	scope.tips = "新希望香蕉牛奶200ml*6 安心特惠19.9元 添加蜂蜜的奶 自然的甜"

//"<font color="#262626">所选商品实付满39，即可免运费哦"

}])