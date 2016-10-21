var app = angular.module("common.directives", []);

app.directive('input', inputErrors);

inputErrors.$inject = ["$timeout"];

// Directive that automates the error in every field
function sample($timeout){
	
}