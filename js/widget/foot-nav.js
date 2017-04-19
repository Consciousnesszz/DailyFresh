app.directive("footNav", ['pageData', function(data){
	return {
		templateUrl : '/src/view/foot-nav.html',
		//template : '<div>abc</div>',
		resdrict: 'E',
		//replace : true,
		scope : {

		},
		link : function(scope, element, attr){
			scope.footlist = data.getFootData();

			// foot click
			scope.curPage = data.getCurPage();
			scope.footactive = function (index){
				scope.curPage = index;
			}
		}
	}
}])