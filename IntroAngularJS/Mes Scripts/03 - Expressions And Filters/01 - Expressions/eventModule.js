(function() {

    angular.module('eventModule', [])
        .config([function() {
            console.log("[eventModule] -> Configuration hook")
        }])
        .run([function() {
            console.log("[eventModule] -> Run hook")
        }])
        .controller('EventCtrl', ['$scope', function($scope) {
            $scope.index = 0
            $scope.setIndex = function(val) {
                $scope.index = val
            }
            $scope.getIndex = function() {
                return $scope.index
            }
            $scope.contacts = [
                { "name": "Adrian", "age": 24, "phone": "0672671564" },
                { "name": "Axel", "age": 21, "phone": "06XXXXXXXX" },
                { "name": "Alvin", "age": 18, "phone": "06XXXXXXXX" },
                { "name": "Muriel", "age": 50, "phone": "06XXXXXXXX" }
            ]
        }])

})();