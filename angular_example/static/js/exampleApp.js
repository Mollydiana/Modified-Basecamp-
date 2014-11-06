var exampleApp = angular.module('exampleApp',['ngRoute']);

exampleApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/example_view.html', controller: exampleController}).
        when('/second_view', {templateUrl: '/static/js/views/second_view.html', controller: secondController}).
        otherwise({redirectTo: '/'});
}]);