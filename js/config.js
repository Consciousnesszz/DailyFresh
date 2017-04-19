var app = angular.module("app", ['ngRoute', 'controllerModule']);

app.config(['$routeProvider', function(route){
	route.when('/home', {
		templateUrl : '/html/home.html'
	}).when('/detail', {
		templateUrl : '/html/detail.html'
	}).when('/list', {
		templateUrl : '/html/list.html'
	}).otherwise({
		redirectTo: '/home'
	})
}])

app.factory('pageData', function(){
	var navlist = ['特价','零食','乳品','速食','水果','饮品','粮油']
	var footlist = [{
		className : 'iconfont icon-shouye-copy',
		name : '首页'
	},{
		className : 'iconfont icon-xing',
		name : '品牌团'
	},{
		className : 'iconfont icon-liwu',
		name : '红包'
	},{
		className : 'iconfont icon-gouwuche',
		name : '购物车'
	},{
		className : 'iconfont icon-wode',
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