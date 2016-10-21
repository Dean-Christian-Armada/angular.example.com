var app = angular.module("sample.controller", []);

app.controller("formController", formController);

controller.$inject = ["$scope"];

function controller($scope){
	$scope.name = "dean";
};