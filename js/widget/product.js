app.directive("product", ['pageData', function(data){
	return {
		templateUrl : '/src/view/product.html',
		resdrict : 'E',
		replace : true,
		link : function(scope, element, attr){
			// set type
			if (location.hash === "#/home") {
				// get data
				var products = data.getProductData();
				if (products.length > 0) {
					scope.products = products;
				} else {
					data.sendRequest(scope);
				}
			} else {
				scope.products = data.getCartData();
			}
		},
		scope : {

		}
	}
}]);