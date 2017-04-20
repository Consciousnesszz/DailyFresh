app.controller('loginCtrl', ['$scope', '$ionicModal', 'pageData', function(scope, ionic, pageData){
	ionic.fromTemplateUrl('my-modal.html', {
	    scope: scope,
	    animation: 'slide-in-up'
	}).then(function(modal) {
	    scope.modal = modal;
	});

	scope.signUp = function(){
		scope.modal.show();
	}
	scope.back = function(){
		scope.modal.hide();
	}

	scope.sendCode = function(){
		pageData.sendSingUpData(scope.phone);
	}
	scope.phone = 18380429940;
}])