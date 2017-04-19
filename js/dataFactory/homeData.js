app.factory('pageData', function(){
	var navlist = ['特价','零食','乳品','速食','水果','饮品','粮油']
	var footlist = [{
		className : 'iconfont icon-shouye-copy',
		name : '首页',
		loca : '#/home'
	},{
		className : 'iconfont icon-xing',
		name : '品牌团',
		loca : '#/brand'
	},{
		className : 'iconfont icon-liwu',
		name : '红包',
		loca : '#/gift'
	},{
		className : 'iconfont icon-gouwuche',
		name : '购物车',
		loca : '#/cart'
	},{
		className : 'iconfont icon-wode',
		name : '我的',
		loca : '#/login'
	}];

	return {
		getFootData : function(){
			return footlist;
		},
		getNavData : function(){
			return navlist;
		},
		getCurPage : function(){
			for (var i = 0; i < footlist.length; i++) {
				if (location.hash === footlist[i].loca) {
					return i;
				}
			}
		}
	}
})