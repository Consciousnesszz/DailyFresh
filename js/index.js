var app = angular.module("app", []);

app.factory('data', function(){
	var navlist = ['特价','零食','乳品','速食','水果','饮品','粮油']
	var footlist = [{
		class : 'iconfont icon-shouye-copy',
		name : '首页'
	},{
		class : 'iconfont icon-xing',
		name : '品牌团'
	},{
		class : 'iconfont icon-liwu',
		name : '红包'
	},{
		class : 'iconfont icon-gouwuche',
		name : '购物车'
	},{
		class : 'iconfont icon-wode',
		name : '我的'
	}];

	return {
		getFootData : function(){
			return footlist;
		},
		getNavData : function(){
			return navlist;
		}
	}
})

app.controller('main', ['$scope', '$timeout', 'data', function(scope, delay, data){
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
	scope.navlist = data.getNavData();
	scope.curStatus = 0;
	scope.navactive = function (index){
		scope.curStatus = index;
	}

	// foot click
	scope.footlist = data.getFootData();
	scope.curPage = 0;
	scope.footactive = function (index){
		scope.curPage = index;
	}
}])