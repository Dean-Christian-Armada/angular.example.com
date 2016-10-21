var app = angular.module("sample.config", ['ngRoute']);

app.config(loginConfig)

sampleConfig.$inject = ["$routeProvider"];

function sampleConfig($routeProvider){
	$routeProvider
	.when("/sample", {
		title: 'Sample',
		controller: "sampleController",
		templateUrl: "components/login/templates/sample.html" 
	})
	.otherwise({
		redirectTo: '/'
	});
}