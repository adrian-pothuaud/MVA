(function() {

    angular.module('eventModule', [])
        .config([function() {
            console.log("[eventModule] -> Configuration hook")
        }])
        .run([function() {
            console.log("[eventModule] -> Run hook")
        }])
        .controller('EventCtrl', ['$scope', function($scope) {
            $scope.menu = [{
                    name: "Home",
                    href: "index.html"
                },
                {
                    name: "Contact",
                    href: "contact.html"
                },
                {
                    name: "About",
                    href: "about.html"
                }
            ]
            $scope.index = 0
            $scope.setIndex = function(val) {
                $scope.index = val
            }
            $scope.getIndex = function() {
                return $scope.index
            }
        }])

})();