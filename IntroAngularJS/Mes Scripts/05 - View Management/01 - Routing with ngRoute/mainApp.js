// Angular Modules takes a name (lowerCamelCase) and a list of dependencies
angular.module('mainApp', ['eventModule', 'ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            console.log("[mainApp] -> Configuration hook")
            console.log($routeProvider);
            $routeProvider.
            when('/contact', {
                templateUrl: 'contact.html',
                controller: 'ContactCtrl'
            }).
            when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ])
    .run([function() {
        // Run is when the app gets kicked off
        console.log("[mainApp] -> Run hook")
    }])