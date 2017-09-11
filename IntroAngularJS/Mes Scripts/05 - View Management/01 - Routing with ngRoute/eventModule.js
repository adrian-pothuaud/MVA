(function() {

    angular.module('eventModule', [])
        .config([function() {
            console.log("[eventModule] -> Configuration hook")
        }])
        .run([function() {
            console.log("[eventModule] -> Run hook")
        }])
        .controller('EventCtrl', ['$scope', function($scope) {
            
        }])

})();