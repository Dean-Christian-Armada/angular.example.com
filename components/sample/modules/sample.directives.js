var app = angular.module("login.directives", []);

app.directive('loginButton', sampleButton);

sampleButton.$inject = ["$http", "$timeout", "$location"];

// Used in the log-in page
function loginButton($http, $timeout, $location){
	
}