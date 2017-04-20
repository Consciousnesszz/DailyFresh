app.controller('cartCtrl', ['$scope', 'pageData', function(scope, pageData){
	// count
	scope.minus = function(pro){
		pro.num--;
		
		pageData.setCartData(pro);
	}
	scope.plus = function(pro){
		pro.num++;

		pageData.setCartData(pro);
	}
}]);