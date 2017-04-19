var app = angular.module("app", ['ionic', 'ngRoute']);

app.config(['$routeProvider', function(route){
	route.when('/home', {
		templateUrl : '/src/view/home.html'
	}).when('/login', {
		templateUrl : '/src/view/login.html'
	}).when('/cart', {
		templateUrl : '/src/view/cart.html'
	}).when('/search', {
		templateUrl : '/src/view/search.html'
	}).when('/brand', {
		templateUrl : '/src/view/brand.html'
	}).when('/gift', {
		templateUrl : '/src/view/gift.html'
	}).otherwise({
		redirectTo: '/home'
	})
}])

